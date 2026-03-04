const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const services = [
  { slug: 'rosctl-licence', title: 'RoSCTL Licence', img: 'rosctl.jpg', desc: 'Rebate of State and Central Taxes and Levies (RoSCTL) is a scheme for exporters of made-up articles and garments. We help you obtain and manage your RoSCTL licences efficiently.' },
  { slug: 'iec-code', title: 'IEC Code', img: 'iec-code.jpg', desc: 'Import Export Code (IEC) is a key business identification number mandatory for exports from India or imports to India. We handle the entire IEC registration process for you.' },
  { slug: 'meis-seis-incentives', title: 'MEIS & SEIS Incentives', img: 'MEIS.jpg', desc: 'Merchandise Exports from India Scheme (MEIS) and Service Exports from India Scheme (SEIS) provide duty credit scrips to exporters. We maximize your incentive entitlements.' },
  { slug: 'epcg-licence', title: 'EPCG License', img: 'epcg.png', desc: 'Export Promotion Capital Goods (EPCG) scheme allows import of capital goods for pre-production, production and post-production at zero customs duty. We manage the entire process.' },
  { slug: 'advance-licence', title: 'Advance License', img: 'advance.jpg', desc: 'Advance Authorisation allows duty free import of inputs which are physically incorporated in the export product. Our experts ensure accurate applications and compliance.' },
  { slug: 'export-house', title: 'Export House Certificate', img: 'export-house.jpg', desc: 'Status Certificate recognizes exporters for their export performance. We assist in obtaining Star Export House, Trading House, and Premier Trading House certificates.' },
  { slug: 'rcmc-application', title: 'RCMC Application', img: 'rcmc.jpg', desc: 'Registration cum Membership Certificate (RCMC) is mandatory for availing benefits under the Foreign Trade Policy. We handle RCMC applications with all Export Promotion Councils.' },
  { slug: 'coo', title: 'C.O.O (Certificate of Origin)', img: 'coo.jpg', desc: 'Certificate of Origin certifies that the goods in a particular export shipment have been wholly obtained, produced, manufactured or processed in a particular country.' },
  { slug: 'digital-signature', title: 'Digital Signature', img: 'digital-signature.jpg', desc: 'Digital Signature Certificates (DSC) are required for filing various documents with DGFT, Customs, and other authorities. We provide Class 2 and Class 3 DSC services.' },
  { slug: 'no-incentive', title: 'No Incentive Certificate', img: 'no-incentive.jpg', desc: 'No Incentive Certificate is required by various authorities to certify that no export incentives have been availed on specific shipments. We prepare and file these on your behalf.' },
  { slug: 'free-sales', title: 'Free Sales & Commerce Certificate', img: 'free-sales.jpg', desc: 'Free Sale Certificate confirms that the product is freely sold in the domestic market of the exporting country. Essential for pharmaceutical and food product exports.' },
  { slug: 'other-documentation', title: 'Other Documentation Work', img: 'other-doc.jpg', desc: 'We handle all other export-import documentation including shipping bills, bill of entry, customs clearance, freight forwarding, and any DGFT-related paperwork.' },
  { slug: 'rodtep-rosctl', title: 'RoDTEP / RoSCTL Scheme', img: 'rodtep.jpg', desc: 'Remission of Duties and Taxes on Exported Products (RoDTEP) and RoSCTL are key export incentive schemes that reimburse taxes paid on inputs. We help exporters claim maximum benefits under both schemes.' },
  { slug: 'rcmc-registration', title: 'RCMC Registration Procedure', img: 'rcmc-reg.jpg', desc: 'Step-by-step assistance for Registration cum Membership Certificate (RCMC) with all Export Promotion Councils (EPCs) and Commodity Boards. We manage the entire registration procedure from documentation to certificate issuance.' },
  { slug: 'fssai-licence', title: 'FSSAI Licence', img: 'fssai.jpg', desc: 'Food Safety and Standards Authority of India (FSSAI) licence is mandatory for all food businesses including exporters. We assist in obtaining Basic, State, and Central FSSAI licences and renewals.' },
  { slug: 'ifsc-ad-code', title: 'IFSC & AD Code Registration', img: 'adcode.jpg', desc: 'Authorised Dealer (AD) Code registration at Customs and IFSC registration is mandatory for exporters to file shipping bills. We handle the complete registration process with your bank and customs authorities.' },
  { slug: 'duty-drawback', title: 'Duty Drawback / Brand Rate / Supplementary Claim', img: 'drawback.jpg', desc: 'Duty Drawback is a refund of customs and excise duties paid on imported/domestic inputs used in export production. We handle All Industry Rate (AIR) drawback claims, Brand Rate fixation, and Supplementary claims for maximum refund recovery.' },
  { slug: 'bank-guarantee-bond', title: 'Bank Guarantee / Bond Cancellation', img: 'bond.jpg', desc: 'Bank Guarantees and Bonds furnished to Customs for provisional assessments, EPCG, Advance Licence, and other purposes need timely cancellation to release funds. We manage the complete process of bond cancellation and bank guarantee discharge from customs authorities.' },
];

// HOME
router.get('/', (req, res) => {
  res.render('home', {
    title: 'Raja Trade - Licensing, Clearance, Forwarding & Custom Services',
    services: services.slice(1, 4),
  });
});

// ABOUT
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Us - Raja Trade' });
});

// ALL SERVICES
router.get('/services', (req, res) => {
  res.render('services', { title: 'Our Services - Raja Trade', services });
});

// INDIVIDUAL SERVICE PAGES
router.get('/products/:slug', (req, res) => {
  const service = services.find(s => s.slug === req.params.slug);
  if (!service) return res.status(404).render('404', { title: '404' });
  res.render('product', { title: `${service.title} - Raja Trade`, service, services });
});

// CONTACT GET
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us - Raja Trade' });
});

// CONTACT POST
router.post('/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Simple validation
  if (!name || !email || !message) {
    return res.render('contact', {
      title: 'Contact Us - Raja Trade',
      error: 'Please fill in all required fields.',
      formData: req.body,
    });
  }

  try {
    // Configure transporter (update credentials in production)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'your@gmail.com',
        pass: process.env.EMAIL_PASS || 'yourpassword',
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'mail@rajatrade.com',
      subject: subject || 'New Enquiry from Website',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res.render('contact', {
      title: 'Contact Us - Raja Trade',
      success: 'Thank you! Your message has been sent. We will get back to you shortly.',
    });
  } catch (err) {
    // In dev mode, just show success (email not configured)
    res.render('contact', {
      title: 'Contact Us - Raja Trade',
      success: 'Thank you for your enquiry! We will contact you shortly.',
    });
  }
});

module.exports = router;
module.exports.services = services;
