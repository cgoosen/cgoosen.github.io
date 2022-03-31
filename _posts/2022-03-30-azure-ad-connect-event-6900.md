---
author: chris
title: 'Azure AD (ADSync) Event 6900'
slug: azure-ad-connect-event-6900
date: '2022-03-30 08:00:00'
layout: post
categories:
- AzureAD
- Security
- Authentication
tags: []
comments: []
---

A little while back I was asked to help troubleshoot an issue with Azure AD Connect. Everything was working great before, but all of a sudden Azure AD Connect stopped sync'ing successfully. When looking at the event log on the server, I noticed an ADSync event 6900 that seemed to indicate an issue with MFA. It said "The ADSync service is not allowed to interact with the desktop to authenticate..." as shown below

<p><a href="/assets/img/2022/03/1.png"><img src="/assets/img/2022/03/1.png" style="width:811px;height:642px;"/></a></p>

This event was accompanies by a few others, like Events 904, 906, 659

<p><a href="/assets/img/2022/03/2.png"><img src="/assets/img/2022/03/2.png" style="width:840px;height:283px;"/></a></p>

After logging into Azure AD, I found that a Conditional Access policy has been enabled to enforce MFA on all administrator accounts and this was tripping up the ADSync account. To solve the problem, simply add an exclusion to the policy. You can do this in two ways, either exclude the specific account or exclude the "Directory Synchronization Accounts" role. I chose the latter option

<p><a href="/assets/img/2022/03/3.png"><img src="/assets/img/2022/03/3.png" style="width:845px;height:801px;"/></a></p>
