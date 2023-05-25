import React from 'react'
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from '../../components/layout'
import { Navigation } from '../../components/navigation'
import TopTitle from "../../components/topTitle"

const Page = () => {

    return (
        
        <>
            <Helmet title="Cookie Policy | Philosophy Break">
                <meta name="robots" content="noindex" />
            </Helmet>
            <Layout>
             <Navigation bg='light-bg' />


            {/*DISABLE MEDIAVINE ADS*/}
            <div id="mediavine-settings" data-blocklist-all="1" ></div>

             <div className='grey-background'>

             <TopTitle title="Cookie Policy" subtitle="Last updated May 20, 2023" />


                <div id="break-start" className="page-center mid-mar-top large-pad-bottom">

                    <p>This Cookie Policy explains how Philosophy Break Ltd (&quot;<strong>Company</strong>,&quot; &quot;<strong>we</strong>,&quot; &quot;<strong>us</strong>,&quot; and &quot;<strong>our</strong>&quot;) uses cookies and similar technologies to recognize you when you visit our website at <a href="https://philosophybreak.com">https://philosophybreak.com</a> (&quot;<strong>Website</strong>&quot;). It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>
                    <p>In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information. For more information about how we may use personal data, please read our <Link to="/privacy-policy/">privacy policy</Link>.</p>
                    <h2>What are cookies?</h2>
                    <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
                    <p>Cookies set by the website owner (in this case, Philosophy Break Ltd) are called &quot;first-party cookies.&quot; Cookies set by parties other than the website owner are called &quot;third-party cookies.&quot; Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.</p>

                    <h2>Why do we use cookies?</h2>
                    <p>We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes. This is described in more detail below.</p>

                    <h2>How can I control cookies?</h2>
                    <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager, which allows you to select which categories of cookies you accept or reject. For users in countries in which the relevant laws apply, the Cookie Consent Manager can be found in the notification banner that pops up when you first visit our website, and you can also access it by clicking the 'Update privacy settings' link in the website's footer.</p>
                        
                    <p>For all users, you can also set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.</p>

                    <p>The specific types of first- and third-party cookies served through our Website and the purposes they perform are described below (please note that the specific cookies served may vary depending on the specific Online Properties you visit):</p>

                    <h2>Analytics and customization cookies:</h2>
                    <p>These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.</p>
                    <h5><br/>Name: _gid</h5>
                    <p>Purpose: Keeps an entry of unique ID which is then used to come up with statistical data on website usage by visitors. It is a HTTP cookie type and expires after a browsing session.</p>
                    <p>Provider: philosophybreak.com</p>
                    <p>Service: Google Analytics (<a href="https://policies.google.com/technologies/ads">View Service Privacy Policy</a>)</p>
                    <p>Country: United States</p>
                    <p>Type: http_cookie</p>
                    <p>Expires in: 1 day</p>
                    
                    <h5><br/>Name: _gat#</h5>
                    <p>Purpose: Enables Google Analytics to regulate the rate of requesting. It is a HTTP cookie type that lasts for a session.</p>
                    <p>Provider: philosophybreak.com</p>
                    <p>Service: Google Analytics (<a href="https://policies.google.com/technologies/ads">View Service Privacy Policy</a>)</p>
                    <p>Country: United States</p>
                    <p>Type: http_cookie</p>
                    <p>Expires in: 1 minute</p>
                    
                    <h5><br/>Name: _ga_#</h5>
                    <p>Purpose: Used to distinguish individual users by means of designation of a randomly generated number as client identifier, which allows calculation of visits and sessions</p>
                    <p>Provider: philosophybreak.com</p>
                    <p>Service: Google analytics (<a href="https://policies.google.com/technologies/ads">View Service Privacy Policy</a>)</p>
                    <p>Country: United States</p>
                    <p>Type: http_cookie</p>
                    <p>Expires in: 1 year 11 months 29 days</p>
                    
                    <h5><br/>Name: _ga</h5>
                    <p>Purpose: It records a particular ID used to come up with data about website usage by the user. It is a HTTP cookie that expires after 2 years.</p>
                    <p>Provider: philosophybreak.com</p>
                    <p>Service: Google Analytics (<a href="https://policies.google.com/technologies/ads">View Service Privacy Policy</a>)</p>
                    <p>Country: United States</p>
                    <p>Type: http_cookie</p>
                    <p>Expires in: 1 year 11 months 29 days</p>

                    <h2>Advertising cookies:</h2>
                    <p>These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.</p>
                    
                    <h5><br/>Name: ga-audiences</h5>
                    <p>Purpose: Used by Google AdWords to re-engage visitors that are likely to convert to customers based on the visitor&#39;s online behaviour across websites</p>
                    <p>Provider: philosophybreak.com</p>
                    <p>Service: AdWords (<a href="https://policies.google.com/privacy">View Service Privacy Policy</a>)</p>
                    <p>Country: United States</p>
                    <p>Type: pixel_tracker</p>
                    <p>Expires in: session</p>
                    
                    <h5><br/>Name: _fbp</h5>
                    <p>Purpose: Facebook tracking pixel used to identify visitors for personalized advertising.</p>
                    <p>Provider: philosophybreak.com</p>
                    <p>Service: Facebook (<a href="https://www.facebook.com/privacy/explanation">View Service Privacy Policy</a>)</p>
                    <p>Country: United States</p>
                    <p>Type: http_cookie</p>
                    <p>Expires in: 2 months 29 days</p>
                    
                    <h5><br/>Name: ad-id</h5>
                    <p>Purpose: Used by Amazon Advertising to register user actions and target content on the website based on ad clicks on a different website.</p>
                    <p>Provider: amazon-adsystem.com</p>
                    <p>Service: Amazon Advertising (<a href="https://aws.amazon.com/privacy/">View Service Privacy Policy</a>)</p>
                    <p>Country: United States</p>
                    <p>Type: server_cookie</p>
                    <p>Expires in: 8 months 7 days</p>


                    <h2>How can I control cookies on my browser?</h2>
                    <p>As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser&#39;s help menu for more information. The following is information about how to manage cookies on the most popular browsers:</p>
                    <ul>
                    <li><a href="https://support.google.com/chrome/answer/95647#zippy=%2Callow-or-block-cookies">Chrome</a></li>
                    <li><a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d">Internet Explorer</a></li>
                    <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&amp;redirectlocale=en-US">Firefox</a></li>
                    <li><a href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac">Safari</a></li>
                    <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd">Edge</a></li>
                    <li><a href="https://help.opera.com/en/latest/web-preferences/">Opera</a></li>
                    </ul>
                    <p>In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit:</p>
                    <ul>
                    <li><a href="http://www.aboutads.info/choices/">Digital Advertising Alliance</a></li>
                    <li><a href="https://youradchoices.ca/">Digital Advertising Alliance of Canada</a></li>
                    <li><a href="http://www.youronlinechoices.com/">European Interactive Digital Advertising Alliance</a></li>
                    </ul>
                    
                    <h2>What about other tracking technologies, like web beacons?</h2>
                    <p>Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called &quot;tracking pixels&quot; or &quot;clear gifs&quot;). These are tiny graphics files that contain a unique identifier that enables us to recognize when someone has visited our Website or opened an email including them. This allows us, for example, to monitor the traffic patterns of users from one page within a website to another, to deliver or communicate with cookies, to understand whether you have come to the website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of email marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.</p>
                    <h2>Do you use Flash cookies or Local Shared Objects?</h2>
                    <p>Websites may also use so-called &quot;Flash Cookies&quot; (also known as Local Shared Objects or &quot;LSOs&quot;) to, among other things, collect and store information about your use of our services, fraud prevention, and for other site operations.</p>
                    <p>If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the <a href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html">Website Storage Settings Panel</a>. You can also control Flash Cookies by going to the <a href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html">Global Storage Settings Panel</a> and following the instructions (which may include instructions that explain, for example, how to delete existing Flash Cookies (referred to &quot;information&quot; on the Macromedia site), how to prevent Flash LSOs from being placed on your computer without your being asked, and (for Flash Player 8 and later) how to block Flash Cookies that are not being delivered by the operator of the page you are on at the time).</p>
                    <p>Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce or impede the functionality of some Flash applications, including, potentially, Flash applications used in connection with our services or online content.</p>
                    <h2>Do you serve targeted advertising?</h2>
                    <p>Third parties may serve cookies on your computer or mobile device to serve advertising through our Website. These companies may use information about your visits to this and other websites in order to provide relevant advertisements about goods and services that you may be interested in. They may also employ technology that is used to measure the effectiveness of advertisements. They can accomplish this by using cookies or web beacons to collect information about your visits to this and other sites in order to provide relevant advertisements about goods and services of potential interest to you. The information collected through this process does not enable us or them to identify your name, contact details, or other details that directly identify you unless you choose to provide these.</p>
                    <h2>How often will you update this Cookie Policy?</h2>
                    <p>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>
                    <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>
                    <h2>Where can I get further information?</h2>
                    <p>If you have any questions about our use of cookies or other technologies, please email us at hello@philosophybreak.com or by post to:</p>
                    <p>Philosophy Break Ltd</p>
                    <p>11 Curtain Rd</p>
                    <p>London EC2A 3JX</p>
                    <p>United Kingdom</p>
                    <p>For more information about how we may use personal data, please read our <Link to="/privacy-policy/">privacy policy</Link>.</p>

                          </div>
             </div>
        </Layout>
       </>
    )

}

export default Page
