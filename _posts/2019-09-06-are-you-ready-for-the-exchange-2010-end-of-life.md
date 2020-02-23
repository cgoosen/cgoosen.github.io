---
author: chris
title: 'Are you ready for the Exchange 2010 end of life?'
slug: are-you-ready-for-the-exchange-2010-end-of-life
date: '2019-09-06 08:00:00'
layout: post
categories:
- Exchange
tags: []
comments: []
---

![Warning](https://github.githubassets.com/images/icons/emoji/unicode/26a0.png?v8) This post was originally published TechTarget, you can view the original post [here](https://searchwindowsserver.techtarget.com/tip/Are-you-ready-for-the-Exchange-2010-end-of-life)

Exchange Server 2010 end of life is approaching -- do you have your migration plan plotted out yet?

Exchange Server 2010 reached general availability on November 9, 2009, and has been the cornerstone of the collaboration strategy for many organizations over the last decade. Since that time, Microsoft also produced three releases of Exchange Server, with Exchange Server 2019 being the most recent. Exchange Server 2010 continues to serve the needs of many organizations, but they must look to migrate from this platform when support ends on January 14, 2020.

*__Editor’s note:__ [A Sept. 16 blog] (https://techcommunity.microsoft.com/t5/Exchange-Team-Blog/Microsoft-Extending-End-of-Support-for-Exchange-Server-2010-to/ba-p/753591) on the Exchange Team site indicated Microsoft would push the extended support of Exchange Server 2010 from Jan. 14, 2020 to Oct. 13, 2020 "to give Exchange Server 2010 customers more time to complete their migrations. This extension also aligns with the end of support for Office 2010 and SharePoint Server 2010." Administrators who run Exchange Server 2010 workloads on Windows Server 2008 will need to make adjustments due to the Jan. 14, 2020, end-of-life for that server operating system.*

What exactly does end of support mean for existing Exchange Server 2010 deployments? Your Exchange 2010 servers will continue to operate with full functionality after this date; however, Microsoft will no longer provide technical support for the product. In addition, bug fixes, security patches and time zone updates will no longer be provided after the end-of-support date. If you haven't already started your migration from Exchange Server 2010, now is the time to start by seeing what your options are.

### Exchange Online

For many, Exchange Online -- part of Microsoft Office 365 -- is the natural replacement for Exchange Server 2010. This is my preferred option.

A hybrid migration to Exchange Online is the quickest way to migrate to the latest version of Exchange that is managed by Microsoft. Smaller organizations may not need the complexity of this hybrid setup, so they may want to investigate simpler migration options. Not sure which migration option is best for you? Microsoft has some great guidance to help you decide on the best migration path.

The cloud isn't for everyone, but in many instances the reasons organizations cite for not considering the cloud are based on perception or outdated information, not reality. I often hear the word "compliance" as a reason for not considering the cloud. If this is your situation, you should first study the compliance offerings on the Microsoft Trust Center. Microsoft Office 365 fulfills many industry standards and regulations, both regionally and globally.

If you decide to remain on premises with your email, you also have options. But the choice might not be as obvious as you think.

### Staying with Exchange on premises

Exchange Server 2019 might seem like the clear choice for organizations that want to remain on premises, but there are a few reasons why this may not be the case.

First, there is no direct upgrade path from Exchange Server 2010 to Exchange Server 2019. For most organizations, this migration path involves a complex multi-hop migration. You first migrate all mailboxes and resources to Exchange Server 2016, then you decommission all remnants of Exchange Server 2010. You then perform another migration from Exchange Server 2016 to Exchange Server 2019 to finalize the process. This procedure involves significant resources, time and planning.

Another consideration with Exchange Server 2019 is licensing. Exchange Server 2019 is only available to volume license customers via the Volume Licensing Service Center. This could be problematic for smaller organizations without this type of agreement.

Organizations that use the unified messaging feature in Exchange Server 2010 have an additional caveat to consider: Microsoft removed the feature from Exchange Server 2019 and recommends Skype for Business Cloud Voicemail instead.

For those looking to remain on premises, Exchange Server 2019 has some great new features, but it is important to weigh the benefits against the drawbacks, and the effort involved with the migration process.

Microsoft only supports Exchange Server 2019 on Windows Server 2019. For the first time, the company supports Server Core deployments and is the recommended deployment option. In addition, Microsoft made it easier to control external access to the Exchange admin center and the Exchange Management Shell with client access rules.

Microsoft made several key improvements in Exchange Server 2019. It rebuilt the search infrastructure to improve indexing of larger files and search performance. The company says the new search architecture will decrease database failover times. The MetaCacheDatabase feature increases the overall performance of the database engine and allows it to work with the latest storage hardware, including larger disks and SSDs.

There are some new features on the client side as well. Email address internationalization allows support for email addresses that contain non-English characters. Some clever calendar improvements include "do not forward" work without the need for an information rights management deployment and the option to cancel/decline meetings that occur while you're out of office.

What happens if the benefits of upgrading to Exchange Server 2019 don't outweigh the drawbacks of the migration process? Exchange Server 2016 extended support runs through October 2025, making it a great option for those looking to migrate from Exchange Server 2010 and stay in support. The simpler migration process and support for unified messaging makes Exchange Server 2016 an option worth considering.
