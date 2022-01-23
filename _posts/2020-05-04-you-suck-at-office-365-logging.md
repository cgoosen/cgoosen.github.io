---
author: chris
title: 'You Suck at Office 365 Logging'
slug: you-suck-at-office-365-logging
date: '2020-05-04 08:00:00'
layout: post
categories:
- Microsoft365
- Security
- GuestPosts
tags: []
comments: []
---

*__This post was originally published on the ModernCISO Blog, you can view the original post [here](https://modernciso.com/2020/05/04/you-suck-at-office-365-logging/)__*

One of the misconceptions about cloud services is that you have to surrender all control when you sign-up. While it is true that you may no longer have racks of servers with blinking lights humming away in your data center, it doesn’t mean that you no longer have any visibility into how your users use and interact with the service.

Office 365 is no exception and the service includes several auditing and reporting features that can be used to track user and administrative activity within a tenant. Unfortunately, there is no singe place to view all audit logs and in some instances this functionality is not enabled by default which causes confusion. The good news is that once enabled, this audit data is available to consume directly from the Security & Compliance Center or Admin Portals without the need for a security information and event management (SIEM) platform.

### Office 365 audit logs

The audit information and reports available in Office 365 can be used to effectively manage user experience, mitigate risks, and is required in many instances to fulfill compliance obligations. Audit logging is not enabled by default in Office 365 and must first be turned on in the Security & Compliance Center before audited activities can be searched.

There are two main types of activities that are tracked in the unified audit log, these are:
- Admin activities
- User activities

While mailbox audit logging in Exchange Online has been enabled by default since early 2019, only users with E5 licenses will return mailbox audit log events in audit log searches in the Security & Compliance Center. Mailbox audit log entries for users without E5 licenses can also be retrieved after mailbox auditing has been manually enabled on those individual mailboxes.

Azure Active Directory (Azure AD) also provides several reports to help keep track of user sign-in activity and security. Unlike Office 365 auditing, these are enabled by default. It is important to note that it could take 30 minutes to 24 hours after an event occurs for the corresponding audit log record to be returned in the results of an audit log search.

### Log retention

When an audited activity is performed by a user or admin, an audit record is generated and stored in the Office 365 audit log. The length of time that an audit record is retained and searchable depends on your Office 365 or Microsoft 365 enterprise subscription the type of the license that is assigned to a specific user. Similarly, Azure AD activities are maintained in accordance to the Azure AD plan in use.

### The takeaway

Logging is an essential part of your cloud service and can help troubleshoot user issues, mitigate risks, and fulfill compliance obligations. Office 365 includes several auditing and reporting features, however not all logging is not enabled by default. The following table provides a summary of some of the most important logging available to Office 365 administrators:

| Audit Item | Location |	Enabled by default | Retention |
| ------------------ | ------------------ | ------------------ | ------------------ |
| User Activity |	Office 365 Security & Compliance Center |	No | 90 days |
| Admin Activity | Office 365 Security & Compliance Center | No | 90 days |
| Mailbox	| Office 365 Security & Compliance Center / Exchange Online | Yes – requires manual intervention for non-E5 users | 90 days |
| Sign-in Activity | Azure Portal | Yes | 30 days (P1/P2 only) |
| Users at Risk | Azure Portal | Yes | 7 Days / 30 days (P1/P2) |
| Risky Sign-ins | Azure Portal | Yes | 7 Days / 30 days (P1/P2) |
| Azure MFA Usage | Azure Portal | Yes | 30 days |
