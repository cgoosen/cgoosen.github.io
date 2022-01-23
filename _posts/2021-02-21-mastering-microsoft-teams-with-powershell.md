---
author: chris
title: 'Mastering Microsoft Teams with PowerShell'
slug: mastering-microsoft-teams-with-powershell
date: '2021-02-21 08:00:00'
layout: post
categories:
- Teams
- Microsoft365
- PowerShell
- GuestPosts
tags: []
comments: []
---

*__This post was originally published on the ENow Software Blog, you can view the original post [here](https://www.enowsoftware.com/solutions-engine/mastering-microsoft-teams-with-powershell)__*

There is no denying that as IT Pros we are writing more ‘code’ than ever before. I like to think of this an an evolution – If you cast your mind back 13 years to 2007 when PowerShell first made an appearance, many of us were just coming to terms with using single cmdlets to perform tasks instead of clicking GUI buttons. Over time, cmdlets became one-liners which in turn led to PowerShell scripts all the while helping us automate repetitive tasks in a predictable manner with orchestrated runbooks being a lot more commonplace today

<p><a href="/assets/img/2021/02/img1.png"><img src="/assets/img/2021/02/img1.png" style="width:682px;height:305px;"/></a></p>

### Flavors of PowerShell

I’m sure by now you’ve heard of PowerShell – also known as ‘Desktop Edition’ and may have heard of PowerShell Core and perhaps you’re not entirely sure what the difference is. When Windows PowerShell was initially released, it was a Windows-only component. This version of PowerShell has been included with Windows since Windows 7 SP1 and is still in use today as PowerShell Version 5.1.In late 2016, PowerShell 6.0 was released, it was made open-source and cross platform so it was now available for MacOS and various Linux distributions. This version of PowerShell and its subsequent releases (currently Version 7.0.3) are often referred to as PowerShell Core.An easy way to check your PowerShell version and edition is the use the $PSVersionTable variable:

<p><a href="/assets/img/2021/02/img2.png"><img src="/assets/img/2021/02/img2.png" style="width:602px;height:378px;"/></a></p>

### Using PowerShell with Microsoft Teams

When it comes to using PowerShell to manage Microsoft Teams, there are a couple of options:

- Microsoft Teams PowerShell Module
- Microsoft Graph PowerShell SDK

Each of these options have their benefits and drawbacks so there really isn’t a easy answer to the question “Which one should I use?” – It really is going to depend on your comfort level with PowerShell in general, the tasks you are looking to accomplish, etc. This idea with this post is to provide a succinct overview of these options to help you make the best decision for your own use case.The Microsoft Teams PowerShell Module has been around for some time now and it typically how most administrators manage Teams via PowerShell or for Teams reporting. The module works with both PowerShell 5.1 (Desktop) and PowerShell 6.2.4 (Core). There are currently some know bugs when using this module with PowerShell Core so PowerShell 5.1 is currently the recommended way to run this module. In addition, there are a few modules that are also needed to ensure a complete management solution, these are:

- SkypeOnlineConnector
- AzureAD
- Exchange Online

The AzureAD and Exchange Online modules can be installed from the PowerShell Gallery while the SkypeOnlineConnector (also known as the Skype for Business PowerShell module) currently requires a separate download. It is worth noting though that many of the SkypeOnlineConnector cmdlets are now Included in the Teams 1.1.3-preview module.To install the Teams, AzureAD and Exchange Online modules you can simply use the *Install-Module* cmdlet:

<p><a href="/assets/img/2021/02/img3.png"><img src="/assets/img/2021/02/img3.png" style="width:620px;height:275px;"/></a></p>

In order to use the Teams module, you would need to be a member of one of the following groups:

- Global Admin
- Teams Service Admin
- Teams Communications Admin
- Teams Communications Support Engineer
- Teams Communications Support Specialist

For more information about the Microsoft Teams PowerShell Module, be sure to check out the [Microsoft Teams PowerShell Overview documentation here.](https://docs.microsoft.com/en-us/microsoftteams/teams-powershell-overview)

The Microsoft Graph PowerShell SDK is a collection of PowerShell modules that contain cmdlets for calling Microsoft Graph. This module requires a minimum of PowerShell 5.1 and works great with PowerShell core on other platforms. To install the Microsoft Graph PowerShell SDK module you can use the *Install-Module* cmdlet.

When using the Graph SDK module, you need to make use of fine-grained API permissions, e.g:
“Directory.ReadWrite.All”, “Group.ReadWrite.All” or “User.Read.All”. These permissions are used with the “Scopes” parameter when using the *Connect-Graph* cmdlet.

<p><a href="/assets/img/2021/02/img4.png"><img src="/assets/img/2021/02/img4.png" style="width:620px;height:144px;"/></a></p>

When trying to determine the scope for your particular use case, the Microsoft Graph REST API v1.0 reference can be a really useful tool. Once you have identified the operations you would like to complete, the required scope is listed as the application permissions from least to most privileged as shown below:

<p><a href="/assets/img/2021/02/img5.png"><img src="/assets/img/2021/02/img5.png" style="width:633px;height:419px;"/></a></p>

Once connected, Graph SDK module cmdlets usually contain “Mg”, to see a list of all the Get- cmdlets, you can simply use the *Get-Command* cmdlet, eg: Get-Command *Get-Mg*

An example of listing all users in a tenant would be to use *Get-MgUser*

<p><a href="/assets/img/2021/02/img6.png"><img src="/assets/img/2021/02/img6.png" style="width:682px;height:424px;"/></a></p>

The Microsoft Graph PowerShell SDK is currently in preview so there is likely to be some changes with this module over time, but it is very promising and works great on other platforms like MacOS. This module also doesn’t require the installation of additional supporting modules which makes it even more useful in my book.

I have found the documentation to be somewhat lacking but do expect that to take shape as the module matures. For more information, be sure to check out the [Powershell SDK for Microsoft Graph project page on Github.](https://github.com/microsoftgraph/msgraph-sdk-powershell)
