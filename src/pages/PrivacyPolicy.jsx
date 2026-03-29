import useSEO from "../hooks/useSEO";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  useSEO({
    title: "Privacy Policy",
    description: "Privacy Policy for Target Media Ads LTD — how we collect, use, maintain and disclose personal data.",
    canonical: "/privacy-policy",
  });

  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Legal</div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6">
              Privacy<br /><span className="text-primary">Policy.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-8"
          >
            <p className="text-white/80">
              This Privacy Policy governs the manner in which Target Media Ads LTD collects, uses, maintains and discloses personal data collected from users as well as all websites working directly or indirectly with the Target Media Media Network. This privacy policy applies to the Site and all products and services offered by Target Media Ads LTD.
            </p>

            <div>
              <h2 className="text-white font-bold text-xl mb-3">Personal Data on website</h2>
              <p>
                Target Media Ads fully respects your right to privacy and will collect personal data from you only if you voluntarily submit such information to us. Personal data that we collect about you may include your name, email address, telephone number, instant messenger, social account, home/office address and bank details. Any personal data which you volunteer to Target Media ads will be treated strictly in accordance with the Data Protection Acts 1988 and 2003. You may refuse to supply personal data to us, except that it may prevent you from engaging in certain Site related activities.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-3">Non-personally identifiable information</h2>
              <p>
                We may collect non-personally identifiable information about you whenever you interact with our Site. Non-personally identifiable information may include the browser name, the type of computer and technical information about your means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-3">Web browser cookies</h2>
              <p>
                Our Site may use "cookies" to distinguish you from other users of the Site and to enhance your experience when using the Site. Cookies may be placed by your browser on your hard drive for record-keeping purposes and sometimes to track information about your use of the Site. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent. If you do so, please note that some parts of the Site may not function properly.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-3">How we use collected information</h2>
              <p>Target Media Ads Media may collect and use Users personal information (only from www.targetmedia-ads.com website, not other websites where we serve our ads) for the following purposes:</p>
              <ul className="mt-4 space-y-4 list-none pl-0">
                <li>
                  <span className="text-white font-semibold">- Business partnerships and co operation.</span>
                  <p className="mt-1">In order for us to engage in business activities with publishers and advertisers, Personal Data will be requested in order to create business related activities such as emails, inquiries and payments.</p>
                </li>
                <li>
                  <span className="text-white font-semibold">- To send periodic emails.</span>
                  <p className="mt-1">If you decide to opt-in to our mailing list, you will receive emails that may include company news, updates, related product or service information, etc. If at any time you would like to unsubscribe from receiving future emails you can make a request at <a href="mailto:team@targetmedia-ads.com" className="text-primary hover:underline">team@targetmedia-ads.com</a>.</p>
                </li>
                <li>
                  <span className="text-white font-semibold">- To personalize user experience.</span>
                  <p className="mt-1">We may use information in the aggregate to understand how our users as a group use the services and resources provided on our Site.</p>
                </li>
                <li>
                  <span className="text-white font-semibold">- Safety.</span>
                  <p className="mt-1">As part of our efforts to keep the Site safe and secure.</p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-3">How we protect your information</h2>
              <p>
                We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
              </p>
              <p className="mt-3">
                Sensitive and private data exchange between the Site and your browser happens over a SSL secured communication channel and is encrypted and protected with digital signatures.
              </p>
              <p className="mt-3">
                Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our Site; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorized access.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-3">For How Long Do We Keep Personal Data?</h2>
              <p>
                We keep personal data for as long as it is necessary to fulfill the purpose for which the personal data was collected, for example during the period which you are registered in our websites or online platforms, to attend to any legal claims, for example if we believe that you have violated our rights, or for as long as required by applicable law.
              </p>
              <p className="mt-3">
                When the personal data that we have collected is no longer required, we will delete it in a secure manner. We may further process data for statistical purposes, but in such cases, data will be anonymized.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-3">What Are Your Rights In Relation To Your Personal Data?</h2>
              <p>You have the following rights with respect to your personal data held by Company:</p>
              <ul className="mt-3 space-y-2 list-none pl-0">
                <li>• Right to request a copy of your personal data;</li>
                <li>• Right to request that Company corrects your personal data if inaccurate or out of date. If you have a registered account on our websites or online platforms, you can update your personal data directly on your preferences section.</li>
                <li>• Right to request the erasure of your personal data when no longer necessary for the purposes for which they are processed.</li>
                <li>• Right to withdraw your consent given to us for a certain purpose, for example for targeted advertising;</li>
                <li>• Right to request a restriction on further processing, in case there is a dispute regarding the processing.</li>
                <li>• Right to object to the processing, in case such processing is based on legitimate interests, for example for direct marketing and sales activities. You can opt-out of receiving direct marketing and sales communication from us.</li>
              </ul>
              <p className="mt-4">
                Any question or request related to your rights should be sent to <a href="mailto:Team@targetmedia-ads.com" className="text-primary hover:underline">Team@targetmedia-ads.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-3">Do We Use Cookies And Similar Technologies?</h2>
              <p>
                We use cookies and similar technologies, for example web beacons, pixels, ad tags and device identifiers, to collect information as you navigate on our websites and online platforms. These include standard information such as browser type, IP address, and the actions you take on our websites and online platforms, such as the pages viewed and the links clicked.
              </p>
              <p className="mt-3">
                This information is used to make our websites and online platforms work more efficiently, to provide us with business and marketing information, and to gather such personal data for the purposes of understanding how visitors use our websites and online platforms. Cookies and similar technologies help us tailor our websites and platforms to you, as well as to detect and prevent security threats and abuse. If used alone, these technologies do not personally identify you.
              </p>
              <p className="mt-3">
                To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit wikipedia.org, allaboutcookies.org, or aboutcookies.org.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-3">Do We Share Personal Data With Other Parties?</h2>
              <p>We may share personal data with the following parties:</p>
              <ul className="mt-3 space-y-2 list-none pl-0">
                <li>• Service providers and other partners which help us to provide our services. For example, we may share certain personal data with a bank to make a payment or store certain personal data in a cloud platform.</li>
                <li>• Partners we work with to serve targeted advertising and other marketing content, provided that you have given us your consent, which you can withdraw at any moment.</li>
              </ul>
              <p className="mt-3">
                We will ensure that these third parties are bound by this Privacy Notice and all applicable data protection laws, if necessary by executing data processing agreements. If data is transferred outside the EEA, we will ensure that appropriate safeguards are in place to protect your personal data.
              </p>
              <p className="mt-3">
                We may be required to disclose certain personal data by law, to comply with a court order, or to protect our rights. In any case, we will do what we can to ensure that your rights remain protected.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-3">Sharing your non-personally identifiable information</h2>
              <ul className="mt-3 space-y-2 list-none pl-0">
                <li>• Where we engage trusted third parties to provide services in connection with the Site or our advertising activities.</li>
                <li>• Cross reference of user device data for advertising preferences and exclusions.</li>
                <li>• For screening of fraud and false advertising activities.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-3">Advertising Services</h2>
              <p>
                Ads appearing on our network may be delivered to you by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement and to compile non personally identifiable information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This privacy policy does not cover the use of cookies by any advertisers.
              </p>
              <p className="mt-3">
                The cookies placed by Target Media Ads are for attribution (conversion tracking) and frequency capping only. They automatically expire after 30 days.
              </p>
              <p className="mt-3">
                Target Media Ads fully complies and adheres to the principles of DMA and ICO and we simply never store any personal information when showing our ads to any visitors for more than 9 months.
              </p>
              <p className="mt-3">In order to prevent fraud and attribute clicks and conversions, we may collect certain device information including the following:</p>
              <ul className="mt-3 space-y-2 list-none pl-0">
                <li>• Name and properties of mobile applications/websites through which a consumer interacts with the Services;</li>
                <li>• Country</li>
                <li>• IP Address – hashed version</li>
                <li>• Internet browser user-agent used to access the Services; and</li>
                <li>• Identifier for advertisers (IFA) / GoogleADID</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-3">Opt-Out</h2>
              <p>
                All the data we collect is for fraud prevention and conversions attribution only. We don't use interest based advertising or retargeting.
              </p>
              <p className="mt-3">
                To opt-out of our collection of information from mobile devices, please visit your device's settings to set the "Limit Ad Track" or other similar feature on your device. You can also make choices about data collection for certain companies by visiting{" "}
                <a href="http://preferences-mgr.truste.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://preferences-mgr.truste.com</a>.
              </p>
              <p className="mt-3">
                Note that if you opt-out you will still see advertising on your device. In addition, if you reset your device identifier or use a different device you may need to renew your opt-out.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-3">Changes to this privacy policy</h2>
              <p>
                Target Media Ads has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-3">Your acceptance of these terms</h2>
              <p>
                By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-xl mb-3">Contacting us</h2>
              <p>
                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:{" "}
                <a href="mailto:Team@targetmedia-ads.com" className="text-primary hover:underline">Team@targetmedia-ads.com</a>
              </p>
            </div>

            <p className="text-sm text-muted-foreground/60 pt-4 border-t border-border">
              This document was last updated on March 29, 2026
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}