---
author: chris
title: 'Microsoft Passwordless Authentication 101 '
slug: microsoft-passwordless-authentication-101
date: '2020-05-12 08:00:00'
layout: post
categories:
- Microsoft365
- Security
- GuestPosts
tags: []
comments: []
---

*__This post was originally published on the ModernCISO Blog, you can view the original post [here](https://modernciso.com/2020/05/12/microsoft-passwordless-authentication-101/)__*

Passwords have long been a daily part of our lives, but in today’s modern, cloud-first world the use of passwords alone leaves us increasingly more vulnerable to compromise. Large-scale data breaches are being reported more and more frequently in the media with more than 80% of hacking-related breaches involving compromised or weak credentials.

## Traditional password management

Traditionally, we overcame weak passwords by implementing password complexity and expiry policies with the addition of multi-factor authentication (MFA), but these practices were not always user-friendly and were burdensome to manage. Password complexity policies make passwords more predictable and often lead to poor security practices like the old ‘password on a post–it’ scenario. Users will inevitably find the easiest, most convenient way to meet the complexity policy. The latest NIST password guidelines, published under NIST 800-63, recommend against both password complexity and password expiry.  Microsoft says that MFA-enabled accounts are 99.9% less likely to be compromised, however, less than 10% of enterprise users use MFA. There is no denying that passwords are the weakest form of authentication and in order to improve our security posture and appropriately secure our digital assets we need to consider a more modern approach to authentication.

## A modern approach

Passwordless authentication is a modern approach to authentication that offers improved security and better user experience. While traditional MFA requires something you know (password or PIN), something you have (smart card or token), or something you are (biometric), passwordless authentication adds convenience by replacing the traditional password with something you have – in this case a device or a security key – and also requiring something you are or something you know.

Microsoft currently offers the following three passwordless authentication options:
- Windows Hello for Business
- Microsoft Authenticator app
- FIDO2 security keys

Fast Identity Online or FIDO2 compliant security keys are standards-based cryptographic credentials that are available in many different form factors such as USB keys or NFC-enabled smartcards from several different providers. These are particularly interesting as they allow organizations to choose the technology that best suits their needs and doesn’t have specific hardware and operating system requirements.

Each of the above-mentioned authentication options offers a unique set of pros and cons, giving organizations the ability to use the method that best caters to its unique requirements. Perhaps different user personas within the organization have different needs – for example, requiring fingerprint biometrics for factory workers who use gloves all day wouldn’t be ideal, so it is possible to mix and match these options as needed.

## Not a silver bullet

Enabling passwordless authentication in Azure Active Directory is fairly straightforward, however simply enabling the feature doesn’t solve all the problems associated with passwords and this causes much confusion. While passwordless authentication does a great job of straddling the line between security and convenience, it does not (yet) eliminate passwords completely from the environment. Users will still have the option of logging in with their traditional password if they so choose. It is therefore vitally important to take the following actions prior to implementing passwordless authentication:

### Enable MFA

If you haven’t already implemented MFA, I would strongly recommend that you do.  This change is very visible to the user community, it requires communications and end-user training which could take a considerable amount of time in large organizations. While you prepare to introduce MFA into your environment, you can dramatically improve your security posture by enabling MFA for all your privileged accounts. MFA is also a prerequisite for passwordless authentication and if you plan to use the Microsoft Authenticator app option for passwordless authentication you will have a head start since your user devices will already have the app installed.

### Reduce user-visible password prompts

Implementing single sign-on (SSO) will help reduce the number of times users are prompted for their password. This will in turn will reduce the likelihood of a user surrendering their credentials during a phishing attack since users who are constantly prompted for login are conditioned to entering their credentials and don’t always take the time to examine the legitimacy of every login form. SSO also requires modern authentication methods and this will expedite the remediation of any applications that still rely on legacy authentication.

### Improve your password management practices

Since user passwords are not eliminated entirely, it is important to adopt modern, up to date password guidelines such as NIST 800-63. Self-service password management capabilities should go hand-in-hand with updated password policies. Allowing users to manage and reset their own passwords will help ease the administrative burden.

Consider using tools like Azure AD password protection to ensure that users are not using weak or banned passwords.

## In closing

Passwords are outdated and cannot be relied on to provide any significant form of security by themselves. Passwordless authentication is a form of multi-factor authentication that is both secure and convenient and can be implemented in different ways based on the needs of the organization. Since passwords are not currently completely eliminated from the environment, it is important that the implementation is accompanied by an up to date password policy.
