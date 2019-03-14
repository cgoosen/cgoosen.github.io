---
layout: post
status: publish
published: true
title: Exchange Online - No DKIM keys saved for this domain
author:
  display_name: Chris
  login: chris
  email: chris@cgoosen.com
  url: http://www.cgoosen.com
author_login: chris
author_email: chris@cgoosen.com
author_url: http://www.cgoosen.com
wordpress_id: 3651
wordpress_url: https://www.cgoosen.com/?p=3651
date: '2019-01-30 11:31:34 +0000'
date_gmt: '2019-01-30 17:31:34 +0000'
categories:
- Exchange Server
- Cloud
- Office 365
tags: []
comments: []
---
I recently came across an interesting issue when attempting to enable DKIM for a domain in Exchange Online. When accessing the DKIM options via the Exchange Admin Center, I didn't have the option to enable DKIM, instead saw the "No DKIM keys saved for this domain" message shown in the screenshot below:
<a href="/assets/img/2019/01/2.png"><img src="/assets/img/2019/01/2.png" style="width:300px;height:129px;" /></a>
Fortunately, we are able to manage DKIM configuration via PowerShell. Once connected to Exchange Online, you can list the DKIM cmdlets using Get-Command:
<a href="/assets/img/2019/01/3.png"><img src="/assets/img/2019/01/3.png" style="width:300px;height:155px;" /></a>

{% highlight ruby linenos %}
Get-Command -Module tmp_dmwhjqj3.m1c *dkim*
{% endhighlight %}

We can use&nbsp;New-DkimSigningConfig cmdlet to enable DKIM for a particular domain:

{% highlight ruby linenos %}
New-DkimSigningConfig -DomainName domain.com -Enabled $True
{% endhighlight %}

Once run, you'll notice that the&nbsp;Exchange Admin Center will now show DKIM as enabled for the domain. If you haven't already, you'll also need to create the relevant DNS records to ensure that DKIM functions correctly. The following records will be required:
* selector1._domainkey.domain.com = CNAME: selector1-domain-com._domainkey.tenant.onmicrosoft.com
* selector2._domainkey.domain.com = CNAME: selector2-domain-com._domainkey.tenant.onmicrosoft.com

Fellow MVP <a href="https://twitter.com/jaapwess" target="_blank" rel="noopener">Jaap Wesselius</a> has a great post on <a href="https://jaapwesselius.com/2018/10/31/spf-dkim-and-dmarc-in-exchange-online-protection/" target="_blank" rel="noopener">SPF, DKIM and DMARC.</a>
