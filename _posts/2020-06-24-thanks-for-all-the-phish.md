---
author: chris
title: 'Thanks for all the phish..'
slug: thanks-for-all-the-phish
date: '2020-06-24 08:00:00'
layout: post
categories:
- Exchange
- Microsoft365
- Security
- GuestPosts
tags: []
comments: []
---

*__This post was originally published on the ENow Software Blog, you can view the original post [here](https://www.enowsoftware.com/solutions-engine/thanks-for-all-the-phish)__*

There’s a running joke in the industry at the moment that the COVID-19 pandemic has done more to drive digital transformation in organizations than any consultant, project team or CTO! While this may be a slight exaggeration, there is definitely an element of truth to it. Many organizations have historically been slow to adopt remote working practices, but the pandemic and associated lockdowns have forced organizations all over the world to change their work from home policies and accelerate the deployment of tools to support telecommuting. In fact, Microsoft recently reported a staggering increase of more than 30 million Teams users in a single month. Even more surprising is that these same organizations who were once against it are now seeing the productivity benefits and opportunity for cost-reduction and may never go back to the old ‘open-plan office’ way of working again.

As much as the pandemic has helped many organizations realize that working from home isn’t the death of productivity and drive the adoption of tools to support this new normal, it has also given bad actors a new and exciting target. [Zscaler](https://www.zscaler.com/blogs/research/30000-percent-increase-covid-19-themed-attacks) observed an increase of 30,000% in phishing, malicious websites, and malware targeting remote users since January 2020. Some of these attacks are pretty basic and are relatively easy to spot such as the [example](https://us.norton.com/internetsecurity-online-scams-coronavirus-phishing-scams.html) below:

<p><a href="/assets/img/2020/06/picture1.png"><img src="/assets/img/2020/06/picture1.png" style="width:584px;height:465px;"/></a></p>

Others are more sophisticated with actors often targeting an organization and registering a legitimate domain name similar to that of the target, for example conotso.com instead of contoso.com. In many instances, these domains are using trusted certificates on the spoofed login pages and even have the appropriate DNS records to ensure that email isn’t discarded as spam. These attacks also typically include impersonation and use terminology associated with working from home to encourage the victim to click the link or perform an action. The [example](https://www.zscaler.com/blogs/research/30000-percent-increase-covid-19-themed-attacks) below illustrates how this approach might be used to trick an end-user:

<p><a href="/assets/img/2020/06/picture2.png"><img src="/assets/img/2020/06/picture2.png" style="width:584px;height:345px;"/></a></p>

One particularly popular variation uses a combination of these methods in an attempt to persuade accounts payable or a procurement officer to transfer funds or make a payment to a new account. Unfortunately, I’ve heard of several of these attacks being very successful recently. These attacks are usually targeted and extremely sophisticated, often involving what appear to be the correct document templates, signatures and so forth. Here’s an [example](https://info.phishlabs.com/blog/covid-19-phishing-update-bec-lures-use-pandemic-to-enhance-attacks) of what these attacks could look like:

<p><a href="/assets/img/2020/06/picture3.png"><img src="/assets/img/2020/06/picture3.png" style="width:899px;height:402px;"/></a></p>

### How can you be safe?

You may be asking yourself, “what can I do to ensure my organization is protected from these types of attacks?” and the good news is there is a lot you can do – the better news is that you likely won’t need to spend any money or buy additional licensing to improve your security posture.

**It all starts with user education.** Bad actors continually evolve their methods, your training methods and user education should also be updated regularly in order to ensure your end-users are aware of how they may be targeted. If you’re not already performing simulated phishing campaigns, I would strongly encourage you to start. If you have the Office 365 Advanced Threat Protection (ATP) Plan 2 license, the Attack Simulator in ATP is a very useful tool for these simulations:

<p><a href="/assets/img/2020/06/picture4.png"><img src="/assets/img/2020/06/picture4.png" style="width:974px;height:356px;"/></a></p>

In addition to being able to identify a potential phishing attack, it is important that your end-users have a mechanism to report them and that they are taught the importance of using the reporting mechanism.

**Use multifactor authentication (MFA).** No, really! If you do nothing else, enable MFA on all accounts in your organization, not only the admin accounts. If you have a plan that supports conditional access, you can configure rules for when MFA is required – such as when a user attempts to connect from an untrusted network location. Even without conditional access, you can enforce MFA on all users accounts in Office 365.

**Get your DNS records in order.** Sender Policy Framework (SPF) records have been around for some time now and most organizations have these in some form or fashion. These records help identify which mail servers are allowed to send email on behalf of your organization. The challenge with SPF records is that they are often not restrictive enough or were put in place a long time ago and are not being maintained.Domain-based Message Authentication, Reporting, and Conformance (DMARC) records are a more recent addition to the landscape and is not as widely adopted. When used with SPF and DomainKeys Identified Mail (DKIM) to authenticate mail senders, these records can provide additional protection against spoofing and phishing email. DMARC helps receiving mail systems determine what to do with messages sent from your domain that fail SPF or DKIM checks.How does this work? An email message may contain multiple sender addresses which are used for different purposes. The "Mail From" address is used to identify the sender and specifies where to send return notices if any problems occur with the delivery of the message. This address appears in the envelope portion of an email message and is not usually displayed by your email client. The "From" address is the address displayed in the From field of your email client. This address identifies the author of the email. These addresses can be seen in the following DMARC forensic report (RUF) for a failed message:

<p><a href="/assets/img/2020/06/picture5.png"><img src="/assets/img/2020/06/picture5.png" style="width:731px;height:641px;"/></a></p>

SPF uses a DNS TXT record to provide a list of authorized sending IP addresses for a given domain. SPF checks are typically only performed against the “Mail From” address. This means that the “From” address is not authenticated when using SPF by itself and allows for a scenario where a bad actor can craft a message which passes an SPF check but has a spoofed “From” address. When DMARC is used in combination with SPF, the “From” address is also validated and this scenario can be mitigated.

### Additional resources

While the benefits of DMARC are evident, many organizations find it difficult to extract actionable intelligence from DMARC reports which are typically XML files containing a large amount of IP addresses. Instead of manually parsing this massive amount of XML-based IP address data, there are many vendors who provide DMARC reporting services. [Valimail](https://go.valimail.com/microsoft.html) is one of these vendors and they offer this service free to Microsoft Office 365 customers.

Microsoft has also published a lot of detailed information to help organizations be more proactive in protecting, detecting, and defending against attacks. I’d encourage you to [check out this information](https://www.microsoft.com/security/blog/2020/05/14/open-sourcing-covid-threat-intelligence/) as well.
