import { motion } from "framer-motion";
import useSEO from "../hooks/useSEO";

const sections = [
  {
    title: "Personal Data on Website",
    content: `Target Media Ads fully respects your right to privacy and will collect personal data from you only if you voluntarily submit such information to us. Personal data that we collect about you may include your name, email address, telephone number, instant messenger, social account, home/office address and bank details. Any personal data which you volunteer to Target Media Ads will be treated strictly in accordance with the Data Protection Acts 1988 and 2003. You may refuse to supply personal data to us, except that it may prevent you from engaging in certain Site related activities.`
  },
  {
    title: "Non-Personally Identifiable Information",
    content: `We may collect non-personally identifiable information about you whenever you interact with our Site. Non-personally identifiable information may include the browser name, the type of computer and technical information about your means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.`
  },
  {
    title: "Web Browser Cookies",
    content: `Our Site may use "cookies" to distinguish you from other users of the Site and to enhance your experience when using the Site. Cookies may be placed by your browser on your hard drive for record-keeping purposes and sometimes to track information about your use of the Site. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent. If you do so, please note that some parts of the Site may not function properly.`
  },
  {
    title: "How We Use Collected Information",
    content: `Target Media Ads may collect and use Users personal information (only from www.targetmedia-ads.com website, not other websites where we serve our ads) for the following purposes:\n\n• Business partnerships and co-operation — In order for us to engage in business activities with publishers and advertisers, Personal Data will be requested in order to create business related activities such as emails, inquiries and payments.\n\n• To send periodic emails — If you decide to opt-in to our mailing list, you will receive emails that may include company news, updates, related product or service information, etc.\n\n• To personalize user experience — We may use information in the aggregate to understand how our users as a group use the services and resources provided on our Site.\n\n• Safety — As part of our efforts to keep the Site safe and secure.`
  },
  {
    title: "How We Protect Your Information",
    content: `We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.\n\nSensitive and private data exchange between the Site and your browser happens over a SSL secured communication channel and is encrypted and protected with digital signatures.`
  },
  {
    title: "How Long Do We Keep Personal Data?",
    content: `We keep personal data for as long as it is necessary to fulfill the purpose for which the personal data was collected, for example during the period which you are registered in our websites or online platforms, to attend to any legal claims, or for as long as required by applicable law.\n\nWhen the personal data that we have collected is no longer required, we will delete it in a secure manner. We may further process data for statistical purposes, but in such cases, data will be anonymized.`
  },
  {
    title: "Your Rights in Relation to Your Personal Data",
    content: `You have the following rights with respect to your personal data held by the Company:\n\n• Right to request a copy of your personal data\n• Right to request that Company corrects your personal data if inaccurate or out of date\n• Right to request the erasure of your personal data when no longer necessary\n• Right to withdraw your consent given to us for a certain purpose\n• Right to request a restriction on further processing\n• Right to object to the processing\n\nAny question or request related to your rights should be sent to Team@targetmedia-ads.com`
  },
  {
    title: "Cookies and Similar Technologies",
    content: `We use cookies and similar technologies, for example web beacons, pixels, ad tags and device identifiers, to collect information as you navigate on our websites and online platforms. These include standard information such as browser type, IP address, and the actions you take on our websites and online platforms.\n\nThis information is used to make our websites and online platforms work more efficiently, to provide us with business and marketing information, and to gather such personal data for the purposes of understanding how visitors use our websites and online platforms.`
  },
  {
    title: "Advertising Services",
    content: `Ads appearing on our network may be delivered to you by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement and to compile non personally identifiable information about you or others who use your computer.\n\nThe cookies placed by Target Media Ads are for attribution (conversion tracking) and frequency capping only. They automatically expire after 30 days.\n\nTarget Media Ads fully complies and adheres to the principles of DMA and ICO and we simply never store any personal information when showing our ads to any visitors for more than 9 months.`
  },
  {
    title: "Opt-Out",
    content: `All the data we collect is for fraud prevention and conversions attribution only. We don't use interest based advertising or retargeting.\n\nTo opt-out of our collection of information from mobile devices, please visit your device's settings to set the "Limit Ad Track" or other similar feature on your device. You can also make choices about data collection for certain companies by visiting http://preferences-mgr.truste.com.`
  },
  {
    title: "Changes to This Privacy Policy",
    content: `Target Media Ads has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.`
  },
];

export default function PrivacyPolicy() {
  useSEO({
    title: "Privacy Policy",
    description: "Read the Target Media Ads privacy policy — how we collect, use, and protect personal data for advertisers, publishers and website visitors.",
    canonical: "/privacy-policy",
  });
  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Legal</div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              This Privacy Policy governs the manner in which Target Media Ads LTD collects, uses, maintains and discloses personal data collected from users as well as all websites working directly or indirectly with the Target Media Network. This privacy policy applies to the Site and all products and services offered by Target Media Ads LTD.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-10">
            {sections.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="pb-10 border-b border-border last:border-0"
              >
                <h2 className="text-xl font-bold text-white mb-4">{s.title}</h2>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
                  {s.content}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl border border-border bg-card">
            <p className="text-muted-foreground text-sm">
              For any privacy-related questions or requests, contact us at{" "}
              <a href="mailto:Team@targetmedia-ads.com" className="text-primary hover:underline">
                Team@targetmedia-ads.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}