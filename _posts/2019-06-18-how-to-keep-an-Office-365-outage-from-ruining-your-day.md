---
layout: post
title: 'How to keep an Office 365 outage from ruining your day'
slug: how-to-keep-an-Office-365-outage-from-ruining-your-day
date: '2019-06-18 09:00:00'
author: chris
categories:
- Cloud
- Office365
- Exchange
tags: []
comments: []

---

![Warning](https://github.githubassets.com/images/icons/emoji/unicode/26a0.png?v8){:style="float: left;margin-right: 10px;margin-top: 10px;"} This post was originally published TechTarget, you can view the original post [here](https://searchwindowsserver.techtarget.com/tip/How-to-keep-an-Office-365-outage-from-ruining-your-day)

Microsoft employs many engineering teams to make its hosted email service Exchange Online as highly available as possible, but no system is perfect. An Office 365 outage can occur at any time as well as any Azure service you depend on, but with some advance preparation, you can try to make a disruption less jarring.

Much like Exchange Server on premises relies on services such as Active Directory and domain name system, Exchange Online is part of Office 365 and relies on many shared services to provide a user access to their mailbox. Microsoft's cloud got hit with a few outages last year that affected Azure multifactor authentication and prevented users who require MFA to log on from accessing Office 365 services, including their Exchange Online mailbox. These outages also affected administrators who used MFA on their accounts and could not get into the Office 365 portal.

Developing a highly available Exchange environment on premises involves load balancers, database availability groups, switchovers, failovers and the like. Organizations that move to Exchange Online leave that work in Microsoft's hands, but you will have new tools and new strategies to use if an Office 365 outage occurs or a critical Azure cloud service breaks to make downtime less of an issue.

### How to avoid surprises with Azure identity and authentication

Monitoring your tenant and supporting services won't prevent a service problem, but it will help you to respond proactively when one occurs and let your users know about the problem before they start alerting you.

The specifics of what to monitor depends on your environment and the services you consume, but it's always a good idea keep an eye on your identity and authentication infrastructure. How are my domain controllers performing? Is Azure AD Connect synchronization successful? These are the types of questions Azure AD Connect Health can answer. Azure AD Connect Health is included with the Azure Active Directory premium tiers as a component of Azure AD Connect. It monitors the key parts of your identity infrastructure: Azure AD Connect synchronization, Active Directory Domain Services (AD DS) and Active Directory Federation Services (AD FS)

You use agents with Azure AD Connect Health, so you only configure it for the services you want to monitor. For example, if you don't use AD FS, then there is no need to install and configure that agent.

![Monitoring](/assets/img/2019/06/monitoring-data.png){:style="float: center; height="365px" width="469px"}

### Check the status of your Office 365 services

In addition to monitoring your identity and authentication infrastructure, it is essential to keep an eye on the Office 365 service health page in the Microsoft 365 admin center.

Office 365 is a massive service with thousands of servers, so it stands to reason that there will always be an incident or service advisory. Some have a wider-reaching effects than others, but it's a good idea to monitor the service health daily to understand which affect your tenant and users. You can access the service health dashboard from the Health node in the Microsoft 365 admin center.

![Service Health](/assets/img/2019/06/service-health.png){:style="float: center; height="281px" width="476px"}

There are a plethora of third-party monitoring tools that provide in-depth monitoring and reporting of your environment and the Office 365 services you consume. Some include additional monitoring features and will alert you if things like user experience become suboptimal.

If you use System Center and prefer to monitor your Office 365 tenant in one application, then you can download a management pack from Microsoft that adds a monitoring dashboard.

### In case of emergency, break glass

If you follow Microsoft's security recommendations, then all the administrators in your Office 365 tenant should be using MFA to access the Microsoft 365 admin center. But what if you didn't have any workarounds when the Azure MFA outages hit? You would have lost access to the admin center, unable to see the service health dashboard or perform any other administrative tasks in the tenant.

To get administrative access to your environment during an Azure MFA outage, then you can create an emergency access account, also called a break glass account, to gain administrative access to the tenant when the needed.

What is an emergency access account? As the name indicates, it's a global administrator account in the tenant for use only when absolutely necessary. There are some basic rules of thumb when creating a break glass account:
* The password should be long, complex and randomly generated.
* The password should not have an expiration date.
* The password should not be known by anyone. Ideally, it will be printed and stored in a safe place that has controlled access.
* The account should be cloud-only so it is not affected by federation service outages and uses the default tenant -- .onmicrosoft.com -- domain.
* The account should not have MFA enabled and should be excluded from conditional access policies.
* The account should be easily identifiable by other administrators in the tenant, so it doesn't have its permissions taken away or isn't inadvertently removed. An easy way to do this is to use the Job Title field for a description.

It's also important to have a well-documented process to use the break glass account. It doesn't help if just one person with access to the account password is away on vacation when you need to use the account. It is also a good idea to periodically reset the account password and confirm that it still has all the required permissions and policy exclusions in place.
