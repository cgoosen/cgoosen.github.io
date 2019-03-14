var hostname = "http://172.16.7.177:4000";
var index = lunr(function () {
    this.field('title')
    this.field('content', {boost: 10})
    this.field('category')
    this.field('tags')
    this.ref('id')
});



    index.add({
      title: "Sample Data",
      category: ["docs"],
      content: "Markdown (or Textile), Liquid, HTML &amp; CSS go in. Static sites come out ready for deployment.\n\nHeadings\n\nHeading 1\n\nHeading 2\n\nHeading 3\n\nHeading 4\n\nHeading 5\n\nHeading 6\n\nBlockquote\n\n\n  No more databases, comment moderation, or pesky updates to install—just your content.\n\n\nUnordered List\n\n\n  Jekyll\n    \n      Nested Jekyll\n      Nested Ruby\n    \n  \n  Ruby\n  Markdown\n  Liquid\n\n\nOrdered List\n\n\n  Jekyll\n    \n      Nested Jekyll\n      Nested Ruby\n    \n  \n  Ruby\n  Markdown\n  Liquid\n\n\nLink\n\nThis is an example inline link.\n\nParagraph w/ strong, em, etc.\n\nThese are just a few of the available configuration options. Many configuration options can either be specified as flags on the command line, or alternatively (and more commonly) they can be specified in a _config.yml file at the root of the source directory. Jekyll will automatically use the options from this file when run. For example, if you place the following lines in your _config.yml file.\n\nImage\n\n\t\n\tPhoto by Rachel Davis.\n\n\nVideo\n\n\n\nDefault Code Block\n\nThis is code blog.\n\n\nStyled Code Block\n\n1\n2\n3\nGet-Command -Module tmp_dmwhjqj3.m1c *dkim*\n\nNew-DkimSigningConfig -DomainName domain.com -Enabled $True\n\nDefinition Lists\n\n\n    Definition Title\n    Definition Description\n\n\nParagraphs w/ Aligned Images\n\nThe Jekyll gem makes a jekyll executable available to you in your Terminal window. You can use this command in a number of ways.\n\n\n\t\n\tPhoto by Dustin Lee.\n\n\nThis site aims to be a comprehensive guide to Jekyll. We’ll cover topics such as getting your site up and running, creating and managing your content, customizing the way your site works and looks, deploying to various environments, and give you some advice on participating in the future development of Jekyll itself.\n\nJekyll is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through a converter (like Markdown) and our Liquid renderer, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server. Jekyll also happens to be the engine behind GitHub Pages, which means you can use Jekyll to host your project’s page, blog, or website from GitHub’s servers for free.\n\n\n\t\n\tPhoto by LoboStudio Hamburg.\n\n\nThroughout this guide there are a number of small-but-handy pieces of information that can make using Jekyll easier, more interesting, and less hazardous. Here’s what to look out for.\n\nIf you come across anything along the way that we haven’t covered, or if you know of a tip you think others would find handy, please file an issue and we’ll see about including it in this guide.\n\nThe front matter is where Jekyll starts to get really cool. Any file that contains a YAML front matter block will be processed by Jekyll as a special file. The front matter must be the first thing in the file and must take the form of valid YAML set between triple-dashed lines.\n",
      tags: [],
      id: 0
    });
    

    index.add({
      title: "Connect-365 Script Updates",
      category: null,
      content: "I'm excited to publish a new version of my Connect-365.ps1 script. The new version includes a bunch of usability improvements, the addition of Teams and Azure modules and now supports MFA.\n\nI have published a code-signed version to the TechNet Gallery, it can be downloaded by clicking here&hellip;&nbsp;or you can grab the code from Github here.&nbsp;\n\n",
      tags: [],
      id: 1
    });
    

    index.add({
      title: "TCA Podcast Episode 22: Governance With Antonio Maio",
      category: null,
      content: "Governance is a big word and is a concept that is often thrown around. It seems to confuse a lot of organizations, even those who have successfully navigated the cultural and technology changes often brought on by cloud adoption. The &lsquo;on by default&rsquo; nature of many cloud services has made it even more important for organizations to plan their governance strategy before adopting these services, so we sat down with Antonio Maio to talk about the need for governance and why it isn&rsquo;t something that should be overlooked.\n\nFor more information on The Cloud Architects podcast, check us out on SoundCloud. We are also available on your favorite podcast app:\n\niTunes\nStitcher\nTunein\nAcast\n\n",
      tags: [],
      id: 2
    });
    

    index.add({
      title: "Exchange Online - No DKIM keys saved for this domain",
      category: null,
      content: "I recently came across an interesting issue when attempting to enable DKIM for a domain in Exchange Online. When accessing the DKIM options via the Exchange Admin Center, I didn’t have the option to enable DKIM, instead saw the “No DKIM keys saved for this domain” message shown in the screenshot below:\n\nFortunately, we are able to manage DKIM configuration via PowerShell. Once connected to Exchange Online, you can list the DKIM cmdlets using Get-Command:\n\n\n1\nGet-Command -Module tmp_dmwhjqj3.m1c *dkim*\n\nWe can use New-DkimSigningConfig cmdlet to enable DKIM for a particular domain:\n\n1\nNew-DkimSigningConfig -DomainName domain.com -Enabled $True\n\nOnce run, you’ll notice that the Exchange Admin Center will now show DKIM as enabled for the domain. If you haven’t already, you’ll also need to create the relevant DNS records to ensure that DKIM functions correctly. The following records will be required:\n\n  selector1._domainkey.domain.com = CNAME: selector1-domain-com._domainkey.tenant.onmicrosoft.com\n  selector2._domainkey.domain.com = CNAME: selector2-domain-com._domainkey.tenant.onmicrosoft.com\n\n\nFellow MVP Jaap Wesselius has a great post on SPF, DKIM and DMARC.\n",
      tags: [],
      id: 3
    });
    

    index.add({
      title: "TCA Podcast Episode 21: Get-IoTEpisode -GuestName &ldquo;Anthony Bartolo&rdquo;",
      category: null,
      content: "The Internet of things (IoT) seems to be everywhere these days. Anything from connected light bulbs and door bells to sensors that monitor and report the drying and curing of concrete in real time, there seems to be an IoT solution for every problem but IoT is so much more than just a sensor connected to a Raspberry PI. Microsoft&rsquo;s&nbsp;Anthony Bartolo sat down with us at Ignite to explain what IoT is, why IT Pros should pay attention and how to get started.\n\nFor more information on The Cloud Architects podcast, check us out on SoundCloud. We are also available on your favorite podcast app:\n\niTunes\nStitcher\nTunein\nAcast\n\n",
      tags: [],
      id: 4
    });
    

    index.add({
      title: "TCA Podcast Episode 20: Azure Active Directory and B2B",
      category: null,
      content: "In this episode we talk with Program Manager&nbsp;Elisabeth Olson&nbsp;and Principle Program Manager Rob Lowe. They both work with the Azure Active Directory teams at Microsoft and they give us some amazing insight into how Azure AD works.\n\nFor more information on The Cloud Architects podcast, check us out on SoundCloud. We are also available on your favorite podcast app:\n\niTunes\nStitcher\nTunein\nAcast\n\n",
      tags: [],
      id: 5
    });
    

    index.add({
      title: "TCA Podcast Episode 19: Unsung Heroes",
      category: null,
      content: "Documentation is something we all rely on, especially in today&rsquo;s rapidly changing cloud world where the only constant seems to be change. Perhaps I&rsquo;m a little obsessive, but I constantly use Microsoft&rsquo;s documentation to confirm things, even when I already know the answer. Like many people though, I never really considered what goes into making sure I have something to refer to and keeping it up to date with all the change going on. Nicolas and I had the pleasure of sitting down with Brenda Carter and Joe Davies from the Microsoft Documentation Team at Ignite recently to talk about how they do what they do, how you can help and what it takes to be a technical writer.\n\nFor more information on The Cloud Architects podcast, check us out on SoundCloud. We are also available on your favorite podcast app:\n\niTunes\nStitcher\nTunein\nAcast\n\n",
      tags: [],
      id: 6
    });
    

    index.add({
      title: "TCA Podcast Episode 18: The One with Exchange Goddess",
      category: null,
      content: "Diversity and inclusion in tech was one of the powerful themes at Microsoft Ignite this year and I&rsquo;m excited to see if get bigger every year. Nicolas had the distinct&nbsp;privilege of being able to sit down with&nbsp;Phoummala Schmitt, a.k.a&nbsp;Exchange Goddess to talk about diversity in tech, community and her new role at Microsoft. The episode was also sketched by the wonderfully talented&nbsp;Luise Freese.\n\n\nFor more information on The Cloud Architects podcast, check us out on SoundCloud. We are also available on your favorite podcast app:\n\niTunes\nStitcher\nTunein\nAcast\n\n",
      tags: [],
      id: 7
    });
    

    index.add({
      title: "TCA Podcast Episode 17: The Community Khaleesi",
      category: null,
      content: "The Microsoft Tech Community was launched in 2016 and&nbsp;is an evolution of the Office 365 Network, extended to support the Azure; Windows Server, and SQL Server communities. Microsoft Tech Community brings together multiple communities in one central location to support&nbsp;discussions and best practice sharing across a variety of Microsoft products and services. We had a lot of fun catching up with Anna Chu at Microsoft Ignite last week to talk about her role at Microsoft, the value of community and what it takes to put on an event like Ignite.\n\n\nFor more information on The Cloud Architects podcast, check us out on SoundCloud. We are also available on your favorite podcast app:\n\niTunes\nStitcher\nTunein\nAcast\n\n",
      tags: [],
      id: 8
    });
    

    index.add({
      title: "TCA Podcast Episode 16: Jeff Mealiffe and the Awesomeness of Exchange(Ahem, Office 365)",
      category: null,
      content: "In this episode, Nic and Warren have a chat to the Perf Guy himself, Principal Lead Program Manager at Microsoft,&nbsp;Jeff Mealiffe. They&nbsp;talk about the evolution of Exchange and get Jeff to spill on which version he liked best! They also talk about Office 365 connectivity and the great things Microsoft are doing internally to make your Office 365 experience better.\n\nFor more information on The Cloud Architects podcast, check us out on SoundCloud. We are also available on your favorite podcast app:\n\niTunes\nStitcher\nTunein\nAcast\n\n",
      tags: [],
      id: 9
    });
    

    index.add({
      title: "Azure AD Connect High CPU Usage detected",
      category: null,
      content: "I recently started receiving a lot of emails from Azure AD Connect Health in one of my lab environments indicating that my AAD Connect server was experiencing high CPU usage:\n\nI remembered seeing a tweet from fellow MVP&nbsp;Jeff Guillet about this - He's been tracking this for a while and as it turns out the issue is caused by a buggy Windows update for .NET framework. You can read all about it in the following posts on his&nbsp;The EXPTA {blog}:\n\n\"Fixed\" .NET Framework Updates Still Cause High CPU on AAD Connect Servers\nAzure AD Connect version 1.1.880.0 includes many updates\n\nUpgrading to AAD Connect&nbsp;1.1.880.0 fixed the issue for me.\n",
      tags: [],
      id: 10
    });
    

    index.add({
      title: "TCA Podcast Episode 15: Automation, DevOps and the evolution of the IT Pro",
      category: null,
      content: "The word DevOps seems to be everywhere at the moment, I can&rsquo;t open LinkedIn without coming across a bunch of posts and articles talking about DevOps. What does it all mean, and more specifically why should IT Pros care about something that seems at first glance to be very much related to software development? I recently caught up with fellow MVPs Simon Waight and Michel de Rooij in an attempt to understand what it is and why it is something worth paying attention to.\n\nFor more information on The Cloud Architects podcast, check us out on SoundCloud. We are also available on your favorite podcast app:\n\niTunes\nStitcher\nTunein\nAcast\n\n",
      tags: [],
      id: 11
    });
    

    index.add({
      title: "TCA Podcast Episode 14: Waxing lyrical about GDPR with Tony Redmond",
      category: null,
      content: "The General Data Protection Regulation (GDPR) has been on everyone's mind recently. GDPR became enforceable on 25 May 2018 and is a regulation in EU law on data protection and privacy for all&nbsp;individuals within the European Union. It also addresses the export of personal data outside the EU and aims primarily to give control to citizens and residents over their personal data and how that data is used. It seems a lot a organizations left their GDPR strategies to the very last minute - I received a lot of GDPR related email that week!&nbsp;What does it all mean and why should we care? We had the pleasure of talking to Tony Redmond about it recently.\n\nFor more information on The Cloud Architects podcast, check us out on SoundCloud. We are also available on your favorite podcast app:\n\niTunes\nStitcher\nTunein\nAcast\n\n",
      tags: [],
      id: 12
    });
    

    index.add({
      title: "TCA Podcast Episode 13: All About Mary-Jo Foley",
      category: null,
      content: "In this episode, Nic and Warren had the privilege of interviewing legendary journalist Mary-Jo Foley. Mary-Jo has been covering the tech industry for almost 3 decades&nbsp;and her&nbsp;career has included&nbsp;many highlights, such as&nbsp;interviewing all three Microsoft CEOs - Bill Gates, Steve Ballmer and Satya Nadella.\n\nFor more information on The Cloud Architects podcast, check us out on SoundCloud. We are also available on your favorite podcast app:\n\niTunes\nStitcher\nTunein\nAcast\n\n",
      tags: [],
      id: 13
    });
    

    index.add({
      title: "TCA Podcast Episode 12: Skype for Business, Teams and the evolution of Telecommunications",
      category: null,
      content: "The telecommunications industry has come&nbsp; a long way since the days of manual service telephone exchanges. We caught up with fellow MVP Greig Sheridan late last year to talk about Skype for Business, Teams and the evolution in technology he has experienced in his 30+ years in the industry.\n\nFor more information on The Cloud Architects podcast, check us out on SoundCloud. We are also available on your favorite podcast app:\n\niTunes\nStitcher\nTunein\nAcast\n\n",
      tags: [],
      id: 14
    });
    

    index.add({
      title: "Fun with Azure Automation and Table Service REST API",
      category: null,
      content: "I love PowerShell and I really love to automate things! I recently started looking into leveraging Azure services for some automation tasks&nbsp;and discovered how powerful it could be. I also had a lot of fun doing it and wanted to share some of what I learned.\nAzure&nbsp;Automation is for scheduling tasks or scripts that run on some sort of schedule and is especially useful for any automation you might be doing with Office 365. Your code is stored in a Runbook (PowerShell or Python) and executed according to a schedule. Interacting with modules is a little different to working with your local PowerShell installation, however the module gallery makes it pretty simple. Getting started is simple, let's assume in this example we will be automating a report in Exchange Online. First you create an Automation Account:\n\n\nCreate a credential set for your Exchange Online credentials - remember what you call it.&nbsp;\"TenantCreds\" in my case.\n\nThen create a new Runbook:\n\nNext it's time to add some PowerShell to the Runbook. Since we will be working in Exchange Online, we need to create and import that session. This is similar to working with Exchange Online sessions on your local machine, but you will notice that we don't need to include the credentials in the code and simply reference the credential set we created earlier:\n1\n2\n3\n4\n5\n&lt;br /&gt;\n$UserCredential = Get-AutomationPSCredential -Name \"TenantCreds\"&lt;br /&gt;\n$Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://outlook.office365.com/powershell-liveid/ -Credential $UserCredential -Authentication Basic -AllowRedirection&lt;br /&gt;\n$Commands = @(\"Get-MigrationBatch\",\"Get-MigrationUser\",\"Get-MigrationUserStatistics\",\"Get-MoveRequestStatistics\",\"Get-MoveRequest\")&lt;br /&gt;\nImport-PSSession -Session $Session -Prefix \"EXO\" -DisableNameChecking:$true -AllowClobber:$true -CommandName $Commands | Out-Null&lt;br /&gt;\nI had some errors when trying to import all Exchange Online cmdlets, so I limit it&nbsp;to only the cmdlets I intend to use in the script. I also add a prefix of \"EXO\" to these, so these cmdlets are used as follows:\n1\n2\n&lt;br /&gt;\n$MigBatch = Get-EXOMigrationBatch | Where-Object {$_.Identity -like '*MyMigration*'} | foreach {$_.BatchGuid}&lt;br /&gt;\nLastly, we need to create a schedule for the automation job:\n\nOnce the schedule has been created, you can link it to the Runbook:\n\nThis is great if you need to perform tasks that don't generate any output. What happens when something (e.g .CSV file) is generated? There are a couple of ways to deal with that. You could just use the temp folder to store your data and then email it to yourself - remember, data stored in the temp folder will not persist:\n1\n2\n&lt;br /&gt;\n$TmpPath = $env:TEMP&lt;br /&gt;\nAnother way to deal with this data is to write it to Azure Storage. There is a PowerShell module available for Azure Storage that can be used with Azure Automation, but you can also use the APIs. Since&nbsp;I figured out how to use the API, it has become my go to method because it is actually much faster. I have also been able to use it in environments where it isn't possible to install modules.\nThe first thing we need to do is create a Storage Account in Azure:\n\nWe then create a Shared Access Signature (SAS) for that Storage Account:\n\nThe result should look similar to this:\n\nIn this example, we are going to store our script output in the Table Service, so we'll be using the&nbsp;Table Service REST API. When working with the Table Service it is important to understand tables, entities, system properties and other limitations, but for the&nbsp;purposes of this post I'm going to simplify things a little.&nbsp;Tables store data as collections of entities - entities are similar to rows&nbsp;and have&nbsp;a primary key and a set of properties. A property is similar to a column.\nEach entity always has the following system properties:\n\nPartitionKey\nRowKey\nTimestamp\n\nTimestamp is managed automatically and isn't something you can change. The&nbsp;PartitionKey and RowKey are always required and are used for scalability and indexing of the content so it is important to consider these when designing your table. Here is some really good information to read up on.&nbsp;In this&nbsp;example, I'll looking up migration status of a mailbox in Exchange Online and will be inserting this data into a table. I'm going to use the \"BatchID\" as the&nbsp;PartitionKey and the \"Status\" as the&nbsp;RowKey. The table name in the example will use the \"Alias\" of the mailbox.\nFirst, lets define the data we are going to insert. This could easily be used in a script or automation Runbook as a Foreach() loop, but to keep it simple I'm just going to manually define them in the example\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n&lt;br /&gt;\n$UserTable = \"ZacTurner\"&lt;br /&gt;\n$PartitionKey = \"Batch02\"&lt;br /&gt;\n$RowKey = \"Synced\"&lt;br /&gt;\n$PrimaryEmailAddress = \"ZacTurner@o365testlab.com\"&lt;br /&gt;\n$MbxGuid = \"e31949b2-ebc6-4f57-b9ae-0aa8ae73bb2c\"&lt;br /&gt;\n$Batch = \"Batch02\"&lt;br /&gt;\n$Status = \"Synced\"&lt;br /&gt;\n$Skipped = \"4\"&lt;br /&gt;\n$LastCheck = \"2/27/2018 8:28:01 PM\"&lt;br /&gt;\nNext we will import this information, during the import, we'll first check to see if a unique table already exists (using the Alias). If one does exist, we'll insert the data, if one doesn't exist we will create it.\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31\n32\n33\n&lt;br /&gt;\n$AzureEndpoint = 'https://cgblogpostdemo.table.core.windows.net/'&lt;br /&gt;\n$AzureSAS = \"?sv=2017-07-29&amp;amp;ss=bfqt&amp;amp;srt=sco&amp;amp;sp=rwdlacup&amp;amp;se=2018-04-05T02:31:38Z&amp;amp;st=2018-02-27T19:31:38Z&amp;amp;spr=https&amp;amp;sig=&lt;removed&gt;\"&lt;br /&gt;\n$AzureRequestHeaders = @{&lt;br /&gt;\n\t\t\"x-ms-date\"=(Get-Date -Format r);&lt;br /&gt;\n\t\t\"x-ms-version\"=\"2016-05-31\";&lt;br /&gt;\n\t\t\"Accept-Charset\"=\"UTF-8\";&lt;br /&gt;\n\t\t\"DataServiceVersion\"=\"3.0;NetFx\";&lt;br /&gt;\n\t\t\"MaxDataServiceVersion\"=\"3.0;NetFx\";&lt;br /&gt;\n\t\t\"Accept\"=\"application/json;odata=nometadata\"}&lt;/p&gt;\n&lt;p&gt;$UserURI = $AzureEndpoint + $UserTable + \"/\" + $AzureSAS&lt;/p&gt;\n&lt;p&gt;#Check if table already exists&lt;br /&gt;\n$UserTableExists = Invoke-WebRequest -Method GET -Uri $UserURI -Headers $AzureRequestHeaders&lt;br /&gt;\n$UserTableExists = $UserTableExists.StatusCode&lt;/p&gt;\n&lt;p&gt;If ($UserTableExists -ne \"200\"){&lt;br /&gt;\n\t\t $TableRequestBody = ConvertTo-Json -InputObject @{&lt;br /&gt;\n\t\t\t\t\t\t\t\"TableName\"=$UserTable}&lt;br /&gt;\n\t\t $EncodedTableRequestBody = [System.Text.Encoding]::UTF8.GetBytes($TableRequestBody)&lt;br /&gt;\n\t\t $TableURI = $AzureEndpoint + 'Tables/' + $AzureSAS&lt;br /&gt;\n\t\tInvoke-WebRequest -Method POST -Uri $TableURI -Headers $AzureRequestHeaders -Body $EncodedTableRequestBody -ContentType \"application/json\"&lt;br /&gt;\n\t\t\t}&lt;/p&gt;\n&lt;p&gt;#Insert data&lt;br /&gt;\n$AzureRequestBody = ConvertTo-Json -InputObject @{&lt;br /&gt;\n\t\t\"PartitionKey\"= \"$PartitionKey\";&lt;br /&gt;\n\t\t\"RowKey\"= \"$RowKey\";&lt;br /&gt;\n\t\t\"PrimaryEmailAddress\"= \"$PrimaryEmailAddress\";&lt;br /&gt;\n\t\t\"MbxGuid\"= \"$MbxGuid\";&lt;br /&gt;\n\t\t\"BatchName\"= \"$Batch\";&lt;br /&gt;\n\t\t\"Status\"= \"$Status\";&lt;br /&gt;\n\t\t\"ItemsSkipped\"= \"$Skipped\";&lt;br /&gt;\n\t\t\"LastCheck\"= \"$LastCheck\"}&lt;br /&gt;\n$EncodedAzureRequestBody = [System.Text.Encoding]::UTF8.GetBytes($AzureRequestBody)&lt;br /&gt;\nInvoke-WebRequest -Method POST -Uri $UserURI -Headers $AzureRequestHeaders -Body $EncodedAzureRequestBody -ContentType \"application/json\"&lt;br /&gt;\nYou could also use Invoke-RestMethod instead of Invoke-WebRequest. The resulting tables should look like this:\n\nCredit to&nbsp;a couple of Stack Overflow posts that were really helpful&nbsp;when I was trying to figure this out:\n\nHere\nHere\n\n\n",
      tags: [],
      id: 15
    });
    

    index.add({
      title: "TCA Podcast Episode 11: \"I'm not scared of what AI will do, but what humans will do with AI\"",
      category: null,
      content: "In this incredibly interesting episode, Warren and Nic catch up with Joe Baguley from VMware to talk what it's like speaking live in front of 90 million people and geek out about virtualization, edge computing and the endless possibilities enabled by AI.\n\nFor more information on The Cloud Architects podcast, check us out on SoundCloud. We are also available on your favorite podcast app:\n\niTunes\nStitcher\nTunein\nAcast\n\n",
      tags: [],
      id: 16
    });
    

    index.add({
      title: "TCA Podcast Episode 10: Device Management needn&rsquo;t be complex",
      category: null,
      content: "In this episode, we caught up with&nbsp;MVP Steve Goodman&nbsp;to discuss a simplistic approach to implementing Device Management and why it needn&rsquo;t be so complex.\n\nFor more information on The Cloud Architects podcast, check us out on SoundCloud. We are also available on your favorite podcast app:\n\niTunes\nStitcher\nTunein\nAcast\n\n",
      tags: [],
      id: 17
    });
    

    index.add({
      title: "My PowerShell scripts are now available on GitHub",
      category: null,
      content: "Ever since I first started sharing scripts on my blog, I've had a bunch of people reach out to me with stories of how they've used my code in their projects or offering to collaborate with me on future versions. My intention has always been to make my scripts easily downloadable and ready to run - one of the reasons why I sign the code with a code signing certificate, but I've come to realize that there is no reason why I couldn't do both.\nOver time my own development and version&nbsp;control methodologies have matured and I've been very successfully using git to manage my own projects. After a recent conversation with fellow MVP Michel de Rooij&nbsp;about his use of GitHub as a repository for his scripts, I decided to follow suit and have&nbsp;created a public GitHub repositories for each of my scripts. You can find these here.\nI will continue to make code signed versions of my scripts available in the TechNet gallery for those who prefer to just download and use them. Links to those are below:\n\nConnect-365.ps1\nConnect-EXO.ps1\nGet-AZCopyGUI.ps1\nFix-ProxyAddress.ps1\n\n",
      tags: [],
      id: 18
    });
    

    index.add({
      title: "TCA Podcast Episode 9: \"This is not your Grandfathers Sharepoint!\"",
      category: null,
      content: "In this episode, we&nbsp;talk to&nbsp;Patricia Hendricks (@phndrx)&nbsp;and Navjot Virk&nbsp;(@navjotvirk)&nbsp;from Microsoft about&nbsp;OneDrive and SharePoint.\n\nFor more information on The Cloud Architects podcast, check us out on SoundCloud. We are also available on your favorite podcast app:\n\niTunes\nStitcher\nTunein\nAcast\n\n",
      tags: [],
      id: 19
    });
    

    index.add({
      title: "TCA Podcast Episode 8: SharePoint isn&rsquo;t so scary..",
      category: null,
      content: "SharePoint can be intimidating, especially for those of use who don&rsquo;t work with it everyday. In this episode,&nbsp;@WonderLaura tells us why&nbsp;SharePoint isn&rsquo;t so scary and we discuss some of the SharePoint announcements at Ignite.\n\nFor more information on The Cloud Architects podcast, check us out on SoundCloud. We are also available on your favorite podcast app:\n\niTunes\nStitcher\nTunein\nAcast\n\n",
      tags: [],
      id: 20
    });
    

    index.add({
      title: "TCA Podcast Episode 7: &ldquo;The cloud can make a real fool of you&rdquo;",
      category: null,
      content: "Change can be difficult for any organization. Changing the working culture of your user population and driving product adoption can seem overwhelming, especially when applying traditional principles and adoption practices to today's cloud world. Nic and I&nbsp;sat down with&nbsp;Patience Wootton from Dentsu Aegis Network&nbsp;at Ignite recently to understand&nbsp;what it means to be an Office 365 Product Owner and talk about&nbsp;change, driving user adoption and being an early Microsoft Teams adopter.\n\nFor more information on The Cloud Architects podcast, check us out on SoundCloud. We are also available on your favorite podcast app:\n\niTunes\nStitcher\nTunein\nAcast\n\n",
      tags: [],
      id: 21
    });
    

    index.add({
      title: "TCA Podcast Episode 6: \"I like OneDrive, but&hellip;\"",
      category: null,
      content: "OneDrive for Business has come a long way since it was initially launched and has earned it's place as a leader in Gartner's Magic Quadrant for Content Collaboration Platforms. Nic and I sat down with Stephen Rose from the&nbsp;SharePoint/OneDrive team&nbsp;at Ignite recently to talk about some of the exciting new things that will be coming to OneDrive soon.\n\nFor more information on The Cloud Architects podcast, check us out on SoundCloud. We are also available on your favorite podcast app:\n\niTunes\nStitcher\nTunein\nAcast\n\n",
      tags: [],
      id: 22
    });
    

    index.add({
      title: "The Cloud Architects Podcast",
      category: null,
      content: "Better late than never.. I'm delighted to annouce that I'll be joining The Cloud Architects Podcast as a co-host. Started by fellow MVPs Nicolas Blank and Warren du Toit, the Cloud Architects podcast is about best practice, guidance, news and cutting edge Microsoft cloud technologies - I'm really excited to be involved.\nMicrosoft&nbsp;Ignite gave us a great opportunity to connect with and talk to some really interesting people - those episodes will be published soon, but in the meantime, we recently recorded in introductory episode where we talk about some of the complexities of adopting cloud technologies at scale:\n\n&nbsp;\nFor more information about the podcast, visit us on the web or twitter. We are still getting started and experimenting with show formats, etc. and would love feedback so feel free to get in touch and let us know how we are doing.\n",
      tags: [],
      id: 23
    });
    

    index.add({
      title: "Office Servers and Services MVP 2017!",
      category: null,
      content: "The last few weeks have been incredibly busy.. I spent a week in Europe and presented a couple of sessions at Office 365 Engage in The Netherlands and after a quick laundry stop at home I headed off to Washington D.C were I presented two sessions at a small technology conference for overseas schools (K-12). That&rsquo;s two conferences and four sessions in two weeks &ndash; I was pretty exhausted at the end of it all but was super excited when I received an email from the Microsoft MVP program informing me that I had been awarded my fourth Microsoft Most Valuable Professional (MVP) Award. \n\nI&rsquo;m truly honored to be part of this great community and have some ambitious plans for the next year, so stay tuned!\n",
      tags: [],
      id: 24
    });
    

    index.add({
      title: "Dank je wel, Haarlem!",
      category: null,
      content: "Last week, I was fortunate enough to speak at the inaugural Office 365 Engage conference in Haarlem, Netherlands. I had been looking forward to it for months, not only because it was my first time visiting the Netherlands, but I had heard about how picturesque the city was and had been told that the conference venue, the Philharmonie, was something quite special. I can honestly say that no description could do it justice, it really is the nicest conference venue I&rsquo;ve ever seen.\n\nThe conference itself was extremely well organized and I definitely have to compliment the organizers for the level of thought that went into every detail. There were more than 40 speakers, 31 of which were Microsoft MVPs. We were encouraged to call on our real world experience and be independent voices so this was a true technical conference and not just another marketing junket. There were 6 tracks with plenty of great content to go around:\n\nAzure Infrastructure\nExchange Online\nOffice 365 Administration\nOffice 365 Applications\nOffice 365 Development\nSharePoint Online\n\nMy sessions on Office 365 management and mobile device management were well received and I even managed to pull off an elaborate demo using a couple of devices. A special thanks to MVH for helping me getting around the need for multiple HDMI inputs, it definitely made the demo flow more smoothly.\nAfter a few great days, I can only imagine that Office 365 Engage 2018 will be even better. If you are looking to build your skills and network with some of the best in the business, I&rsquo;d definitely encourage you to check out Office 365 Engage in 2018 &ndash; I hope to see you there!\n",
      tags: [],
      id: 25
    });
    

    index.add({
      title: "I am speaking at Office 365 Engage!",
      category: null,
      content: "I&rsquo;m really excited to announce that I&rsquo;ll be speaking at Office 365 Engage in Haarlem, Netherlands 19-22 June 2017.\n\n\n\n\n\n\nOffice 365 Engage is Europe&rsquo;s foremost conference on Office 365 and will be hosted at the Philharmonie Theatre in the energetic picturesque city of Haarlem.\nI am thrilled to be one of more than 30 Microsoft MVPs speaking at the event so if you are interested in learning all about Micrsoft Office 365, it isn&rsquo;t too late to register today!\nUse discount code &lsquo;SPRCG378&rsquo; to receive a 20% discount when registering.\n",
      tags: [],
      id: 26
    });
    

    index.add({
      title: "Script: Connect-365.ps1 - Connect to Office 365 services using remote PowerShell",
      category: null,
      content: "I'm excited to announce the release of Connect-365! Back 2012, I put together a basic script with a GUI to simplify connecting to Exchange Online via remote PowerShell. I had never intended to make the script publicly available and it was just something I used myself. After a couple years I realized that it had been shared with so many colleagues and clients that I decided to clean it up and publish it on the TechNet gallery. Connect-EXO was born! Here's a screenshot of the original first version:\n\nOver time the script matured into what Connect-EXO is today. One of the challenges in the early version was that I used WPF for the GUI, this was problematic for older versions of PowerShell so I made the decision to port it to Windows Forms for backward compatibility. Forms is old and added a lot of bloat and since&nbsp;backwards compatibility is no longer a concern, I decided to move back to WPF. Connect-365 is essentially the next version of Connect-EXO, I renamed it so more accurately reflect it's purpose and this will allow me to continue to maintain Connect-EXO.\nConnect-365 features a GUI that will prompt for your tenant credentials and then connect to various Office 365 services using remote PowerShell. The built-in prerequisite checker will check to ensure that the correct modules are installed and provide a download link for those that are not.\nThe current version of the script allows connectivity to:\n\nExchange Online\nAzure Active Directory (using v2 module)\nOffice 365 Security &amp; Compliance Center\nSkype for Business Online\nSharePoint Online\n\nRequirements:\nThis script will work natively in PowerShell 4.0+\nUsage:\nThere are no parameters or switches, simply execute the script: .\\Connect-365.ps1\nExecution Policy:\nThis script has been digitally signed and will run just fine under a \"RemoteSigned\" execution policy\nScreenshots:\n\n\n\nRoadmap:\n\nSupport Azure AD v1 and v2 - Removed as v1 is depreciated\nSupport for Exchange Online MFA (via module) - Done!\nDerive SPO Admin URL\nAuto-install prerequisites\nMuch more..\n\nDownload:\nI have published it to the TechNet Gallery, it can be downloaded by clicking here&hellip;\n",
      tags: [],
      id: 27
    });
    

    index.add({
      title: "Connecting to Exchange Online with remote PowerShell from a Mac",
      category: null,
      content: "Yes! it is finally possible to connect to Exchange Online from PowerShell installed on MacOS. I noticed some tweets about this being possible on Linux earlier in the week so I thought I&rsquo;d re-visit testing it on MacOS. PowerShell remoting has been available in the MacOs version since powershell-6.0.0-alpha.15, but it didn&rsquo;t include the ability to specify a &ldquo;ConnectionUri&rsquo; as the endpoint &ndash; it only worked with server names and IP addresses. powershell-6.0.0-alpha.17 which was recently released now includes this functionality.\nThe first thing you need to do it download and install the latest release from here, you&rsquo;ll want to download at least powershell-6.0.0-alpha.17\n\nNext launch PowerShell and confirm the version:\n[powershell]\n$PSVersionTable\n[/powershell]\n\nWe are now ready to run establish our remote session. First let&rsquo;s define our credentials:\n[powershell]\n$UserCredential = Get-Credential\n[/powershell]\nThen create the session:\n[powershell]\n$Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://outlook.office365.com/powershell-liveid -Credential $UserCredential -Authentication Basic -AllowRedirection\n[/powershell]\nAnd finally, import that session:\n[powershell]\nImport-PSSession $Session\n[/powershell]\n\nOnce connected you have all the Exchange Online cmdlets available to you:\n\nI haven&rsquo;t thoroughly tested it yet, but I look forward to spending some time using it soon!\n",
      tags: [],
      id: 28
    });
    

    index.add({
      title: "Changes to RSS feeds",
      category: null,
      content: "Since starting this blog in 2008, I have been using Google Feedburner to publish my RSS feeds and enable 'subscribe by email' functionality. At the time it was a great platform and it provided many benefits, but after nearly 9 years that is no longer the case.\nFeedburner has been pretty stagnant since 2012 and I have recently started to notice RSS validation errors in my feed which in-turn cause issues with some of the current and planned integrations I have running on the blog. Over the next month, I will be making some changes to the way RSS feeds work on the blog. I will not remove RSS feeds entirely but will be transitioning them from Feedburner.\nMy analytics data shows that I do have a bunch of subscribers using RSS and email and I do expect the transition to be fairly smooth. Unfortunately, those subscribing via email will need to resubscribe once the transition is done - I figure that an 'opt-in' strategy would be best in this instance. All in all, I'm hoping for minimal disruption.\nTLDR; I will continue to offer RSS feeds, but some upcoming changes may mean that you need to resubscribe.\n",
      tags: [],
      id: 29
    });
    

    index.add({
      title: "Single Sign On with Azure AD Connect",
      category: null,
      content: "Ever since the launch of Office 365 (and BPOS before that) there has been a desire to make accessing these services as seamless as possible. Single Sign On (SSO) has long been high on the requirements list for many organizations and while it has been possible for some time now to provide a near seamless login experience, it has historically come at a cost in the form of additional infrastructure - usually deployed on-premises and at the very least carrying some sort of administrative burden. I&rsquo;m not against identity federation, I think it definitely has it&rsquo;s place and most of the customers I work with already have some federation solution deployed so it makes a lot of sense leveraging it for Office 365 as well, but there are always those organizations who don&rsquo;t already have a solution in place or those smaller environments where it doesn&rsquo;t make a whole lot of sense to implement a highly-available AD FS deployment.\nPassword Sync has long been the best compromise, offering a &ldquo;Same Sign On&rdquo; experience where users are able to use their existing AD credentials to access Office 365 services. The recent announcement of Pass-Through Authentication and Single Sign-on means that things are about to get a whole lot better!\nI wanted to put together a quick post and run through how easy it is to setup Single Sign On and review the user experience when it is used with Password Sync. Single Sign On can also be enabled with the new Pass-through authentication option, but that&rsquo;s a story for another post!\nBefore getting started, it is important to understand the client requirements. The client should:\n\nbe using a domain-joined machine\nbe using Windows and a supported browser (Edge is not supported)\nhave direct access to a domain controller\nhave the Kerberos end-points defined in the browser&rsquo;s Intranet zone (AD Group Policy is the easiest way to do this)\n\nhttps://autologon.microsoftazuread-sso.com\nhttps://aadg.windows.net.nsatc.net\n\n\n\n\nOnce the client requirements have been taken care of, we need to update AAD Connect. At the time of writing, version 1.1.380.0 is the latest version. It looks like these new features were introduced in version 1.1.370.0. If we compare the the &ldquo;User sign-in&rdquo; page to that of an older build you&rsquo;ll notice the addition of a few more features:\n&nbsp;\nTo upgrade AAD Connect, follow your regular upgrade procedure. If you don&rsquo;t have any customizations or special considerations, you can just let the wizard perform the upgrade for you:\n\nOnce upgraded, you&rsquo;ll want to run the configuration wizard again and tick the &ldquo;Enable single sign on&rdquo; checkbox on the &ldquo;User sign-in&rdquo; page (shown above) and that is all there is to it!\nLet&rsquo;s compare the user experience before and after enabling Single Sign On. Here is the user experience before:\n\nand here is the user experience after implementing Single Sign On with AAD Connect (you&rsquo;ll notice that I do not have to re-enter my password this time):\n\nNote: In the demo videos, I have my home page set in a way that forces my custom branding before any user credentials are entered. You can do this by either creating a web redirect or setting your home page to: https://login.microsoftonline.com/login.srf?whr=your_domain.com (replace your_domain.com with your actual domain name!)\nThere is a lot of great documentation available about Single Sign On on the Microsoft website, I highly recommend that you check it out as well:\n\n\nWhat is Single Sign On (SSO)\n\n\nAzure AD Connect: Version release history\n\n\n",
      tags: [],
      id: 30
    });
    

    index.add({
      title: "Configuring session timeouts for Outlook on the Web (OWA) in Exchange Online",
      category: null,
      content: "In today&rsquo;s browser first, cloud first world, many organizations look at reducing risk by imposing strict session timeout settings on their productivity tools and applications. The idea generally is that if a user is not actively using and application for 10 &ndash;15 mins, they have completed the task they were working on and have forgotten to logoff correctly. This can be especially dangerous when these applications are accessed on shared terminals or public computers. Given that email remains a vitally important business tool for many organizations, reducing the session timeout on Exchange Online (and Exchange 2016) is a fairly common request and it is really simple to do.\nBy default, session timeout is enabled for OWA (let&rsquo;s just call it that, shall we?) and it set to 6 hours. You can confirm this configuration via PowerShell using the Get-OrganizationConfig cmdlet:\n[powershell]Get-OrganizationConfig | FL ActivityBasedAuthenticationTimeout*[/powershell]\n\nThere are two parameters in particular worth paying attention to:\n\nActivityBasedAuthenticationTimeoutEnabled\nActivityBasedAuthenticationTimeoutInterval\n\nActivityBasedAuthenticationTimeoutEnabled is pretty self-explanatory, you will want to keep it enabled if you intended to set the timeout interval. The&nbsp;ActivityBasedAuthenticationTimeoutInterval parameter&nbsp;controls the actual timeout interval in&nbsp;hh:mm:ss&nbsp;format where&nbsp;hh&nbsp;= hours,&nbsp;mm&nbsp;= minutes and&nbsp;ss&nbsp;= seconds. Note that this parameter has a range of 5 min - 8 hrs. Changes can be made using the Set-OrganizationConfig cmdlet, for example to set the timeout interval to 15 mins we'd issue the following cmd:\n[powershell]Set-OrganizationConfig -ActivityBasedAuthenticationTimeoutInterval 00:15:00[/powershell]\n\nDuring my testing, it took a really long time (12+ hrs) for this to take effect so don't be alarmed if it doesn't work right away.\nFor more information on the Set-OrganizationConfig parameters, see TechNet.\n",
      tags: [],
      id: 31
    });
    

    index.add({
      title: "Getting started with AAD conditional access - Location based access rules",
      category: null,
      content: "Azure Active Directory (AAD) conditional access is something I&rsquo;ve been wanting to post about for a while now. A scenario I come across fairly often is the desire to prevent access or add an additional layer of security to certain Office 365 workloads when the user is connecting from a remote, non-corporate location. In the past, this could be achieved by making use of claims rules and Active Directory Federation Services (AD FS) which meant that it wasn&rsquo;t possible for those organizations not making use of federated identities with Office 365.\nAAD conditional access solves this problem and makes it really simple to apply access policies to AAD connected applications. Conditional access does require an AAD premium license (P1). In this post we&rsquo;ll cover a simple location based scenario where we prevent users from accessing Outlook on the web (OWA) from outside of the organization&rsquo;s network. In order to configure conditional access you will require:\n\n\nAzure Active Directory premium licensing\nAccess to the Azure management portal (classic portal)\n\n\nConditional access policies are configured via the classic Azure management portal (http://manage.windowsazure.com). Locate &ldquo;Active Directory&rdquo; on the left-hand side, select your Office 365 directory and click the &ldquo;Applications&rdquo; option.\n\nNext, select the &ldquo;Office 365 Exchange Online&rdquo; application and turn access rules &ldquo;On&rdquo; under the &ldquo;Multi-factor authentication and location based access rules&rdquo; section. You have the option of applying your rules to all users or select groups. You then select the &ldquo;Block access when not at work&rdquo; option. You also have to option to enforce MFA for an application which is useful if you would like to enable MFA only for specific applications or you could require MFA only when users are accessing the application from outside the corporate network.\n\nIt is important to ensure that you define your corporate network ranges by clicking link. All connections from locations outside the definted network ranges will be treated as remote.\nOnce configured, you will notice that users are still able to access the Office 365 portal however, once they click the mail option in the app launcher they will no longer be able to access Outlook on the web unless they are connecting from a approved location.\n\n\nThis is a very simple example of how to use location based access rules. It is also possible to configure device based access policies which provide an incredible amount of control over which devices can access your applications. I&rsquo;ll cover device based access policies in a future post.\n&nbsp;\n",
      tags: [],
      id: 32
    });
    

    index.add({
      title: "Welcome to Ignite 2016!",
      category: null,
      content: "It&rsquo;s here! We&rsquo;ve all had to wait a little longer than usual for our yearly conference fix since Ignite in May last year, but the wait is finally over and here I am on the eve of Ignite 2016 in my hotel room in Atlanta. There are so many great speakers this year so I wanted to put together a short post listing some of them and highlighting some of the great Office 365 and Exchange sessions that I am personally looking forward to attending.\nMonday:\n\nTake control of your security and compliance with Office 365 (THR1003) - Caroline Shin: 12:30pm - 12:50pm, Microsoft Theater 4\nDesign global voice deployments with Skype for Business (THR3057) - St&aring;le Hansen: 1:30pm - 1:50pm, MVP Hub Talk 1\nLearn how Microsoft IT governs SharePoint Online and Office 365 Groups (THR2031) - David Johnson: 5:40pm - 6:00pm, Microsoft Theater 4\n\nTuesday:\n\nDebate the top 10 reasons not to move your Exchange on-premises mailboxes to Exchange Online (BRK2215) - Greg Taylor, Tony Redmond, Steve Conn: 9:00am - 10:15am, B401 &ndash; B402\nExperience Scott Schnoll's Exchange tips and tricks (BRK3253) - Scott Schnoll: 10:45am - 12:00pm, B401 &ndash; B402\nMeet twin sons of different mothers - Exchange Engineers and Exchange MVPs (BRK2219) - Tony Redmond, Jeff Mealiffe, Andrew Higginbotham, Jeff Guillet, Karim Batthish :12:30pm - 1:45pm, C112\nUnplug with the experts on Exchange Server and Exchange Online (BRK2216) - Wendy Wilkes, Greg Taylor, Ross Smith IV, Jeff Mealiffe, Timothy Heeney: 2:15pm - 3:30pm, B401 &ndash; B402\nAccess intelligence in the Microsoft Graph and API (BRK3199) - Jon Meling, Andreas Eide: 4:00pm - 5:15pm, A311 &ndash; A312\n\nWednesday:\n\nRun Microsoft Exchange Hybrid for the long haul (BRK3217) - Timothy Heeney, Nicolas Blank: 9:00am - 10:15am, Georgia Ballroom\nPrepare for the future with Windows 10 &amp; Office 365 - better together (THR3061) - Raphael K&ouml;llner: 10:20am - 10:40am, Expo Theater 2\nExplore the ultimate field guide to Microsoft Office 365 Groups (BRK3001) - Tony Redmond, Benjamin Niaulin, Amit Gupta: 10:45am - 12:00pm, Georgia Ballroom\nUnderstand the Microsoft Exchange Server 2016 Architecture (BRK3221) - Ross Smith IV, Mike Cooper: 12:30pm - 1:45pm, Georgia Ballroom\nMigrate to Exchange Online via Exchange Hybrid (BRK3219) - Michael Van Horenbeeck, Timothy Heeney - 2:15pm - 3:30pm, Thomas Murphy Ballroom 2&amp;3\nDesign your Exchange infrastructure right (or consider moving to Office 365) (BRK2093) - Adrian Moore, Boris Lokhvitsky, Robert Gillies: 4:00pm - 5:15pm, B312 &ndash; B314\n\nThursday:\n\nDeploy Microsoft Exchange Server 2016 (BRK3220) - Jeff Guillet: 9:00am - 10:15am, Sidney Marcus Auditorium\nUnplug with the experts on Microsoft Exchange Top Issues (BRK3000) - Nino Bilic, Nasir Ali, Amir Haque, Shawn McGrath, Timothy Heeney, Scott Landry, Gabe Bratton, Angela Taylor: 10:45am - 12:00pm, B401 &ndash; B402\nInvestigate tools and techniques for Exchange Performance Troubleshooting (BRK3007) - Jeff Mealiffe, Nasir Ali: 12:30pm - 1:45pm, Georgia Ballroom\nAutomate Exchange deployment with Powershell Desired State Configuration (THR3040) - Ingo Gegenwarth: 2:10pm - 2:30pm, Expo Theater 2\nDeploy Microsoft Office 365 Client using Configuration Manager (BRK3002) - Amesh Mansukhani, Doug Davis: 4:30pm - 5:15pm, B211 &ndash; B212\n\nThere is so much great content this year that conflicts are inevitable. Many sessions are repeated throughout the conference, especially on Friday so be sure to look at the alternate times if you are torn between two sessions that are scheduled at the same time.\nOutside of the content, there are a bunch of activities taking place this year. ENow Software will once again host one of their legendary &ldquo;Scheduled Maintenance&rdquo; parties,&nbsp; these are usually one of the must-attend events of any conference but are for registered guests only so hopefully you have already registered. QUADROtech has put an interesting spin on the Pokemon Go craze with their &ldquo;QTmon&rdquo; competition where contestants have the chance to win $2,220 in cash. Tony Redmond has a great post about this on his blog here, you can also visit this QUADROtech page for more info.\nEnjoy the week!\n",
      tags: [],
      id: 33
    });
    

    index.add({
      title: "Disabling Modern Attachments in Outlook 2016",
      category: null,
      content: "The modern attachments (aka cloudy attachments) feature in Outlook 2016 makes it simple for users to share documents stored in OneDrive for Business or SharePoint with each other as links instead of actually attaching the file and emailing it around. This is a great way to reduce the number of different document versions floating around the organization and helps promote collaboration and co-authoring. Once a cloudy attachment is attached to an email, the user can grant view only or edit permissions to the recipient and Exchange will automatically take care of applying the appropriate permission to the document.\n\nThis feature is available out of the box for Exchange Online users using Outlook 2016 and can be enabled for on-premises users with mailboxes on Exchange 2016 provided OAuth between Exchange 2016 and Office 365 has been configured properly and the appropriate prerequisites are in place, but what happens to on-premises customers who do not have Exchange 2016 deployed? The scenario is really interesting in that Outlook will still allow users to send cloudy attachments, but because the backend Exchange environment isn&rsquo;t able to apply the appropriate permission to the document the recipient will be unable to view the attachment:\n\nThis behavior may confuse users and may not be desirable in some environments and while there is no way to specifically disable modern attachments, there is a workaround that may help achieve similar results. There are two options in Outlook that enable modern attachments:\n\nThe &ldquo;Browse Web Locations&rdquo; option allows users to select files from OneDrive for Business, SharePoint sites or Groups.\nThe &ldquo;Recent items&rdquo; list provides a list of recently saved documents and when these documents are saved to OneDrive for Business or SharePoint it will automatically provide the option to attach a cloudy attachment version of the document.\n\nDisabling these two options in Outlook will effectively prevent users from being able to send cloudy attachments and change the user experience from this:\n\nTo this:\n\nIn order to do this, the following registry keys need to be added to the client machine for each user:\n\nTo simplify this, you can download the registry keys here\n",
      tags: [],
      id: 34
    });
    

    index.add({
      title: "Automating archive folder creation in Exchange Online mailboxes",
      category: null,
      content: "If you are using Outlook 2016 on Windows or Mac you will have noticed the recent addition of a one-click &lsquo;Archive&rsquo; button to the ribbon. The addition of the archive button was announced at the end of February, but seems to have caught a bunch of customers by surprise and there appears to be some confusion about it&rsquo;s intended purpose. If you are unfamiliar with the one-click &lsquo;Archive&rsquo; button, here&rsquo;s what it looks like:\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \nThe archive button is intended to make archiving email a one-click operation, but this does not archive email to an Online Archive and does not require users to have an Online Archive enabled. Instead, the button will file email to an &lsquo;Archive&rsquo; folder in your existing mailbox. The intention here is that this button provides a single-click way to clean or declutter your inbox of messages that you have already read. It is important to understand the following about the archive button:\n\n\nThe archive button cannot be used to send email messages to the Online Archive.\n\n\nSince the archive folder is a folder in the root of the mailbox, moving email to it will not reduce the overall size of the mailbox.\n\n\nIf a folder called &lsquo;Archive&rsquo; does not already exist in the root of the mailbox, the user will be prompted to create one:\n\nCertain organizations may feel like this creates confusion amongst their user community and would therefore like to automate the create of the &lsquo;Archive&rsquo; folder in their user mailboxes. Fortunately, MVP (and fellow Aussie!) Glen Scales has a great solution for creating mailbox folders using PowerShell the EWS managed API. In order to use his module, you will need to download and install the EWS managed API from here. Once installed, you will need to connect to Exchange Online via remote PowerShell and import the module. It them becomes a matter of using the Create-Folder cmdlet included in the module. The module has few parameters and a lot of other functionality but we only need the following:\n[powershell]\nCreate-Folder -MailboxName user@domain.com -NewFolderName Archive\n[/powershell]\n\nWith some minor tweaks to Glen&rsquo;s code, we can easily script this process for multiple (or all) mailboxes:\n[powershell]\nfunction Load-EWSManagedAPI{\n    param(\n    )\n \tBegin\n\t{\n\t\t## Load Managed API dll\n\t\t###CHECK FOR EWS MANAGED API, IF PRESENT IMPORT THE HIGHEST VERSION EWS DLL, ELSE EXIT\n\t\t$EWSDLL = (($(Get-ItemProperty -ErrorAction SilentlyContinue -Path Registry::$(Get-ChildItem -ErrorAction SilentlyContinue -Path 'Registry::HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Exchange\\Web Services'|Sort-Object Name -Descending| Select-Object -First 1 -ExpandProperty Name)).'Install Directory') + \"Microsoft.Exchange.WebServices.dll\")\n\t\tif (Test-Path $EWSDLL)\n\t\t    {\n\t\t    Import-Module $EWSDLL\n\t\t    }\n\t\telse\n\t\t    {\n\t\t    \"$(get-date -format yyyyMMddHHmmss):\"\n\t\t    \"This script requires the EWS Managed API 1.2 or later.\"\n\t\t    \"Please download and install the current version of the EWS Managed API from\"\n\t\t    \"http://go.microsoft.com/fwlink/?LinkId=255472\"\n\t\t    \"\"\n\t\t    \"Exiting Script.\"\n\t\t    exit\n\t\t    }\n  \t}\n}\nfunction Connect-Exchange{\n    param(\n    \t[Parameter(Position=0, Mandatory=$true)] [string]$MailboxName,\n\t\t[Parameter(Position=1, Mandatory=$true)] [System.Management.Automation.PSCredential]$Credentials\n    )\n \tBegin\n\t\t {\n\t\tLoad-EWSManagedAPI\n\t\t## Set Exchange Version\n\t\t$ExchangeVersion = [Microsoft.Exchange.WebServices.Data.ExchangeVersion]::Exchange2010_SP1\n\t\t## Create Exchange Service Object\n\t\t$service = New-Object Microsoft.Exchange.WebServices.Data.ExchangeService($ExchangeVersion)  \n\t\t#Credentials\n\t\t$creds = New-Object System.Net.NetworkCredential($Credentials.UserName.ToString(),$Credentials.GetNetworkCredential().password.ToString())\n\t\t$service.Credentials = $creds       \n\t\t#CAS URL hardcoded for Exchange Online \n\t\t$uri=[system.URI] \"https://outlook.office365.com/EWS/Exchange.asmx\"\n\t\t$service.Url = $uri    \n        if(!$service.URL){\n\t\t\tthrow \"Error connecting to EWS\"\n\t\t}\n\t\telse\n\t\t{\n\t\t\treturn $service\n\t\t}\n\t}\n}\nfunction Create-Folder{\n    param(\n    \t[Parameter(Position=0, Mandatory=$true)] [string]$MailboxName,\n\t\t[Parameter(Position=1, Mandatory=$true)] [System.Management.Automation.PSCredential]$Credentials,\n\t\t[Parameter(Position=2, Mandatory=$true)] [String]$NewFolderName\n    )\n \tBegin\n\t {\n\t\t$service = Connect-Exchange -MailboxName $MailboxName -Credentials $Credentials\n\t\t$NewFolder = new-object Microsoft.Exchange.WebServices.Data.Folder($service)\n\t\t$NewFolder.DisplayName = $NewFolderName\n        $NewFolder.FolderClass = \"IPF.Note\"\n        # Bind to the MsgFolderRoot folder\n\t\t$folderid= new-object Microsoft.Exchange.WebServices.Data.FolderId([Microsoft.Exchange.WebServices.Data.WellKnownFolderName]::MsgFolderRoot,$MailboxName)\n\t\t$EWSParentFolder = [Microsoft.Exchange.WebServices.Data.Folder]::Bind($service,$folderid)\n\t\t#Define Folder Veiw Really only want to return one object\n\t\t$fvFolderView = new-object Microsoft.Exchange.WebServices.Data.FolderView(1)\n\t\t#Define a Search folder that is going to do a search based on the DisplayName of the folder\n\t\t$SfSearchFilter = new-object Microsoft.Exchange.WebServices.Data.SearchFilter+IsEqualTo([Microsoft.Exchange.WebServices.Data.FolderSchema]::DisplayName,$NewFolderName)\n\t\t#Do the Search\n\t\t$findFolderResults = $service.FindFolders($EWSParentFolder.Id,$SfSearchFilter,$fvFolderView)\n\t\tif ($findFolderResults.TotalCount -eq 0){\n\t\t    Write-host (\"Folder Doesn't Exist\") -ForegroundColor Yellow\n\t\t\t$NewFolder.Save($EWSParentFolder.Id)\n\t\t\tWrite-host (\"Folder Created\") -ForegroundColor Green\n\t\t}\n\t\telse{\n\t\t    Write-error (\"Folder already Exist with that Name\")\n\t\t}  \n\t }\n}\n# Define tenant credentials\n$Credentials = Get-Credential\n# Define mailboxes that need the archive folder created\n# Get all mailboxes\n$Mailboxes = Get-Mailbox -ResultSize Unlimited | Where-Object {$_.Name -notlike \"DiscoverySearchMailbox*\"}\n# Or import a list of mailboxes from .txt\n# $Mailboxes = Get-Content C:\\Temp\\Mailboxes.txt\n# Create the folder\nForEach ($MailboxName in $Mailboxes) {\n    Write-host \"Processing $MailboxName\" -ForegroundColor Yellow\n    Create-Folder -MailboxName $MailboxName.PrimarySmtpAddress -NewFolderName Archive -Credentials $Credentials\n    }\n[/powershell]\nOnce the &lsquo;Archive&rsquo; folder has been created, it will become the destination for all messages that are selected when the &lsquo;Archive&rsquo; button is clicked.\nA word of caution: If you have a large number of mailboxes, you may run into throttling issues if you attempt to do this on all mailboxes at the same time so it is definitely worth considering a phased rollout in larger environments.\nGlen has some great stuff on his blog so be sure to check it out here.\n",
      tags: [],
      id: 35
    });
    

    index.add({
      title: "Office Servers and Services MVP 2016!",
      category: null,
      content: "I've been traveling this week and spent a couple of days in Washington D.C were I presented two sessions at a small technology conference for overseas schools (K-12). I had a great time presenting and interacting with attendees from all over the world - my Microsoft focussed sessions definitely stood out at a conference heavily dominated by Google.\nThe highlight of my week was the email I received this morning from the Microsoft MVP program presenting me with a 2016 MVP award. This is my third MVP award and as always I'm honored to part of the MVP community.&nbsp;I'm very fortunate to have the opportunity to interact with so many folks who I admire and respect as often as I do.\n\n",
      tags: [],
      id: 36
    });
    

    index.add({
      title: "Minor update to my Connect-EXO.ps1 script",
      category: null,
      content: "I've just published an updated version of my Connect-EXO.ps1 script. This version, (version 3.2) includes a very minor fix for those using German language keyboards. This update is the result of testing and feedback from the TechNet community and I wanted to thank all those involved.\nI have been planning some big updates to this script and work on version 4.0 will begin soon - watch this space!\nThe update has been published to the TechNet Gallery,&nbsp;it can be downloaded by clicking here&hellip;\n",
      tags: [],
      id: 37
    });
    

    index.add({
      title: "Using a certificate to encrypt credentials in automated PowerShell scripts &ndash; An Update!",
      category: null,
      content: "Early last year I wrote a post about encrypting script credentials using certificates. At the time, someone (thanks Dave Wyatt!) commented on the post suggesting a couple of alternative methods to encrypt and decrypt the data, in particular I was interested in the Protect-CmsMessage and Unprotect-CmsMessage cmdlets included in PowerShell 5.0. Now that PowerShell 5.0 is more widespread I wanted to post a quick update about how these cmdlets can help simplify the process. The process is similar, but there are less steps and it is important to note that the certificate must contain the Data Encipherment or Key Encipherment key usage, and include the Document Encryption Enhanced Key Usage (1.3.6.1.4.1.311.80.1).\n\nLet&rsquo;s start by first locating our certificate using the Get-ChildItem cmdlet:\n[powershell]$Cert = Get-ChildItem Cert:\\LocalMachine\\My | Where-Object {$_.Subject -like \"CN=PowerShell Automation*\"}[/powershell]\nNext we encrypt our password using that certificate:\n[powershell]$Password = 'MyPassword'\nProtect-CmsMessage -To $Cert -Content $Password\n[/powershell]\n\nYou&rsquo;ll notice that the encrypted password is presented a little differently. You will&nbsp;need to include the entire block in your script.\nUnencrypting the password in your script basically involves repeating this process in reverse:\n[powershell]$Cert = Get-ChildItem Cert:\\LocalMachine\\My | Where-Object {$_.Subject -like 'CN=PowerShell Automation*'}\n$EncryptedPwd = @'\n-----BEGIN CMS-----\nMIIBqAYJKoZIhvcNAQcDoIIBmTCCAZUCAQAxggFQMIIBTAIBADA0MCAxHjAcBgNVBAMMFVBvd2Vy\nU2hlbGwgQXV0b21hdGlvbgIQOEd4fYDturxF77V7lEytlDANBgkqhkiG9w0BAQcwAASCAQB0z92N\nHrgQ84JxSV7RYpwSMPJRuSXlgVubOIew8KsYXr/E8kd/wOyT/2NPi3d+4xb67CLUM4infqOrt9Q+\nReAtINvfVB5EPc9wU8yDpdz+WKProT4RJ94nzGH5qW5SK4O1Siu0VSPJZaCNb+CmYNFNNvLu6MN4\npDqOiqZnv+j/rUxhrHX+U3E+eJq5P0gsZUwRaXZoAgGyV6SvZdUsbPYZ+hMPG0DruF/83SK6MOZM\nyVnGOmeP8e8/b/Rk2Y24JvDcROwRvK2+uj2Oy3ukw1WS4TxMy2V4lkjTYvwIO+bukjFCCtaR4Q63\nC6fx9OArx+uMbPmzkFgmG0w3jFVNnjjMMDwGCSqGSIb3DQEHATAdBglghkgBZQMEASoEEPdMffTC\nN+IvYDNFmuWKgZqAELsAZyE9I0POh/j64DNTsLI=\n-----END CMS-----\n'@\n$DecryptedPwd = $EncryptedPwd | Unprotect-CmsMessage -To $Cert | ConvertTo-SecureString -AsPlainText -Force\n[/powershell]\nYou can now use $DecryptedPwd to generate your credentials similar to the following:\n[powershell]\n$MSOLUsername = 'serviceAcc@tenant.onmicrosoft.com'\n$MSOLCredentials = New-Object System.Management.Automation.PSCredential ($MSOLUsername,$DecryptedPwd)\nConnect-MSOLService -Credential $MSOLCredentials\n[/powershell]\n",
      tags: [],
      id: 38
    });
    

    index.add({
      title: "My Connect-EXO.ps1 script has been updated!",
      category: null,
      content: "I've just published an updated version of my Connect-EXO.ps1 script. Version 3.1 includes the ability&nbsp;to connect to the&nbsp;Office 365 Security &amp; Compliance Center. Based on the options selected it will connect to either or all&nbsp;services with Exchange Online being the only one selected by default. Here is a screenshot of the new interface:\n\nThe update has been published to the TechNet Gallery, it can be downloaded by clicking here&hellip;\n",
      tags: [],
      id: 39
    });
    

    index.add({
      title: "Using PowerShell to automate Office 365 license assignment",
      category: null,
      content: "The move to Office 365 almost always requires changes to existing operational processes. One of the processes that inevitably requires an update is the provisioning process and the extent of these changes will differ from organization to organization and depend on the maturity of your identity lifecycle management process. In many environments, license assignment can be easily automated using a scheduled task and PowerShell so I wanted to put together a post that provides an outline on how this can be done.\nBefore getting into it, I just want to add a little disclaimer to this post &ndash; I love PowerShell and because I love PowerShell, I like to use it, but this doesn&rsquo;t mean it is always fit for purpose. Each environment is different so I would urge you to consider all options before implementing a full blown PowerShell provisioning process because you may already own better tools for the job (FIM/MIM, etc). These tools often take a while to implement when done properly, so PowerShell could also be a great stop-gap solution. This post is intended to provide a foundation that helps you put together your own process and should not necessarily be implemented &ldquo;as-is&rdquo;.\nWith that out of the way, there are some requirements to think of as well. The server executing the script will need the following:\n\nThe ability to connect to Azure AD via remote PowerShell which requires the Azure AD Module &ndash;&nbsp; Click here for more info\nRemote Server Administration Tools &ndash; RSAT\nA certificate to encrypt and decrypt your service account passwords. This certificate can be from an internal CA &ndash; See this post for more info\nService accounts with the relevant permissions\nRelay permission on your Exchange server &ndash; Used for send report emails\n\nThe scenario I will be addressing in this post is to automate mailbox provisioning and license assignment in a hybrid deployment. All new mailboxes get provisioned as remote mailboxes directly in Office 365 and users are assigned the relevant Office 365 license. Each user account has an entry in the &lsquo;extensionAttribute1&rsquo; attribute which determines the license they will be assigned, eg. E3 or Exchange Plan 2. We make use of 2 security groups during this process so users can be created in any OU as long as that OU is being synchronized to Azure AD. These groups are:\n\nO365_Provision &ndash; Starts the provisioning process. New accounts are added to this group once they have been created in Active Directory\nO365_License &ndash; Used by the script to keep track of users who still need to have licenses assigned\n\nAt a high level the workflow looks something like this:\n\nLets start by looking at the variables and functions we need. Here you can define you license SKUs, service account credentials, etc:\n[powershell]\n# Modules\nImport-Module ActiveDirectory\n# Variables - Edit these\n#########################\n$ErrorActionPreference = 'Stop'\n$ExchangeServer = 'you_exchange_server'\n$FromAddress = 'Provisioning Service\n'\n$ToAddress = 'you@yourdomain.com'\n$ADUsername = 'YourDomain\\service_acc'\n$RoutingDomain = 'yourtenant.mail.onmicrosoft.com'\n$ADEncryptedPwd = ''\n$MSOLUsername = 'service_acc@yourtenant.onmicrosoft.com'\n$MSOLEncryptedPwd = ''\n$Cert = Get-ChildItem Cert:\\LocalMachine\\My | Where-Object {$_.Subject -like 'CN=Provisioning Service*'}\n$E3SKU = 'yourtenant:ENTERPRISEPACK'\n$EP2SKU = 'yourtenant:EXCHANGEENTERPRISE'\n#Email Styling\n$EmailBody = @\"\n\n\n\n\n\nHello,\nThis is an automated report from the Office 365 Provisioning Service. The following user accounts have been successfully provisioned in Office 365:\n\n\n\nUsername\nEmail Address\nLicense Assigned\n\n\n\n\"@\n$EmailBodyClosure = @\"\nRegards,\nProvisioning Service\n \n \n\"@\n###########################\n# Functions\n# Function to create report email\nfunction Send-Report{\n    $Msg = New-Object Net.Mail.MailMessage\n    $Smtp = New-Object Net.Mail.SmtpClient($ExchangeServer)\n    $Msg.From = $FromAddress\n    $Msg.To.Add($ToAddress)\n    $Msg.Subject = $EmailSubject\n    $Msg.Body = $EmailBody\n    $Msg.IsBodyHTML = $true\n    $Smtp.Send($Msg)\n    }\n# Function for Exchange Connection\nfunction Connect-Exchange{\n    $ADEncryptedBytes = [System.Convert]::FromBase64String($ADEncryptedPwd)\n    $ADDecryptedBytes = $Cert.PrivateKey.Decrypt($ADEncryptedBytes, $true)\n    $ADDecryptedPwd = [system.text.encoding]::UTF8.GetString($ADDecryptedBytes) | ConvertTo-SecureString -AsPlainText -Force\n    $ADCredentials = New-Object System.Management.Automation.PSCredential ($ADUsername,$ADDecryptedPwd)\n    $ExchSession = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri http://$ExchangeServer/PowerShell/ -Authentication Kerberos -Credential $ADCredentials\n    Import-PSSession $ExchSession\n    } \n# Function for MSOL Connection\nfunction Connect-MSOL{\n    $MSOLEncryptedBytes = [System.Convert]::FromBase64String($MSOLEncryptedPwd)\n    $MSOLDecryptedBytes = $Cert.PrivateKey.Decrypt($MSOLEncryptedBytes, $true)\n    $MSOLDecryptedPwd = [system.text.encoding]::UTF8.GetString($MSOLDecryptedBytes) | ConvertTo-SecureString -AsPlainText -Force\n    $MSOLCredentials = New-Object System.Management.Automation.PSCredential ($MSOLUsername,$MSOLDecryptedPwd)\n    Connect-MSOLService -Credential $MSOLCredentials\n    }\n[/powershell]\nNext we have the &lsquo;licensing phase&rsquo; &ndash; This phase also generates the email report because a user is considered to be fully provisioned once they have a license assigned. We can also catch any errors and generate an error report email for those.\n[powershell]\n# Licensing Phase - Check if any users need to have licenses assigned\n$NeedLicense = Get-AdGroupMember -Identity O365_License\nIf ($NeedLicense) {\n        $HasMbxArray = @()\n        Connect-MSOL\n        Foreach ($User in $NeedLicense) {\n            $UserInfo = Get-ADUser $User.SamAccountName -Properties *\n            $Username = $UserInfo.SamAccountName\n            $UserEmail = $UserInfo.Mail\n            $UserLic = $UserInfo.extensionAttribute1\n            $UserLoc = $UserInfo.c\n            $UPN = $UserInfo.UserPrincipalName\n            $MsolUser = Get-MsolUser -UserPrincipalName $UPN\n            $HasLic = $MsolUser.IsLicensed\n                If ($MsolUser -and $UserLic -and $UserLoc) {\n                    Try {\n\t\t\t\t\t\tIf ($HasLic) {\n\t                    $ExistingLic = $MsolUser.Licenses.AccountSkuId\n\t                    Set-MsolUserLicense -UserPrincipalName $UPN -RemoveLicenses $ExistingLic\n\t                    }\n\t                    If ($UserLic -eq 'Exchange 2') {\n\t                    Set-MsolUser -UserPrincipalName $UPN -UsageLocation $UserLoc\n\t                    Set-MsolUserLicense -UserPrincipalName $UPN -AddLicenses $EP2SKU\n                            Remove-AdGroupMember -Identity O365_License -Members $Username -Confirm:$False\n\t                    }\n\t                    ElseIf ($UserLic -eq 'E3') {\n\t                    Set-MsolUser -UserPrincipalName $UPN -UsageLocation $UserLoc\n\t                    Set-MsolUserLicense -UserPrincipalName $UPN -AddLicenses $E3SKU\n                            Remove-AdGroupMember -Identity O365_License -Members $Username -Confirm:$False\n                       }\n\t\t\t\t\t }\n\t\t\t\t\tCatch {\n        \t\t\t$EmailSubject = 'Office 365 Provisioning Error'\n        \t\t\t$EmailBody = @\"\n\n\n\n\nHello,\nThis is an automated report from the Office 365 Provisioning Service. The following errors occurred when attempting to provision users in Office 365:\n$Error\nAdditional Diagnostic Info:\nUsername: $Username\nEmail Address: $UserEmail\nLicense Assigned: $UserLic\nUsage Location: $UserLoc\nRegards,\nProvisioning Service\n\n\n\"@\n\t\t\t        Send-Report\n\t\t\t        }\n                    $EmailBody += '\n'\n\t            $EmailBody += \"\n$Username\n\"\n\t            $EmailBody += \"\n$UserEmail\n\"\n\t            $EmailBody += \"\n$UserLic\n\"\n\t            $EmailBody += '\n'\n                      }\n                     }\n\t        $Licenses = Get-MsolAccountSku\n\t        $E3Consumed = $Licenses[0].ConsumedUnits\n\t        $E3Total = $Licenses[0].ActiveUnits\n\t        $E3Remaining = $E3Total - $E3Consumed\n\t        $ExP2Consumed = $Licenses[1].ConsumedUnits\n\t        $ExP2Total = $Licenses[1].ActiveUnits\n\t        $ExP2Remaining = $ExP2Total - $ExP2Consumed\n\t        $EmailBodyLic = @\"\n\t\n\nLicense Summary:\n\nYou have consumed $E3Consumed Exchange Online (Plan 2) licenses and have $E3Remaining remaining\nYou have consumed $ExP2Consumed Office 365 Enterprise E3 licenses and have $ExP2Remaining remaining\n\n\"@\n\t        $EmailSubject = 'Office 365 Provisioning Report'\n\t        $EmailBody += $EmailBodyLic\n\t        $EmailBody += $EmailBodyClosure\n\t        Send-Report\n    }\n[/powershell]\nThe &lsquo;mailbox enablement phase&rsquo; connects to the local Exchange server and creates a new remote mailbox. See this post for more information on this process. This phase also attempts to generate error notification emails.\n[powershell]\n# Mailbox Enablement Phase - Check if any new mailboxes need to be provisioned\n$NeedMailbox = Get-AdGroupMember -Identity O365_Provisioning\nIf ($NeedMailbox) {\n    Connect-Exchange\n    Foreach ($User in $NeedMailbox) {\n    $Username = $User.SamAccountName\n    $UserInfo = Get-ADUser $Username -Properties *\n    $UserLic = $UserInfo.extensionAttribute1\n    $UserLoc = $UserInfo.c\n    If ($UserLic -and $UserLoc){\n        Try {\n            Enable-RemoteMailbox $Username -RemoteRoutingAddress \"$Username@$RoutingDomain\"\n            Add-ADGroupMember -Identity O365_License -Members $Username\n            Remove-AdGroupMember -Identity O365_Provisioning -Members $Username -Confirm:$False\n                }\n        Catch {\n        $EmailSubject = 'Office 365 Provisioning Error'\n        $EmailBody = @\"\n\n\n\n\nHello,\nThis is an automated report from the Office 365 Provisioning Service. The following errors occurred when attempting to mail-enable users:\n$Error\nAdditional Diagnostic Info:\nUsername: $Username\nRegards,\nProvisioning Service\n\n\n\"@\n        Send-Report\n        }\n        }\n    Else {\n        $EmailSubject = 'Office 365 Provisioning Error'\n        $EmailBody = @\"\n\n\n\n\nHello,\nThis is an automated report from the Office 365 Provisioning Service. The following user could not be provisioned, please check to ensure that the required license type has been correctly entered in the \"Company\" field and that the \"Country/region\" has been set:\nUser: $Username\nRegards,\nProvisioning Service\n\n\n\"@\n        Send-Report\n        }\n    }\n}\n[/powershell]\nPutting this all together will hopefully form be a great foundation to help you build your own workflow. Once done, you can simply schedule your script to run using task scheduler.\n",
      tags: [],
      id: 40
    });
    

    index.add({
      title: "Azure AD Connect gets a big update!",
      category: null,
      content: "In case you missed it, the latest version of Azure AD Connect (version 1.1.105.0) was recently made available for download. One of the big changes and great new additions in this version is the new built-in scheduler which was separate to the sync engine in previous releases and would run as a scheduled task in Windows task scheduler:\n\nAnother big change is the fact that the default synchronization frequency has been updated and is now 30 minutes which is a big change from the previous default of 3 hours. In addition, this value can now be configured which is something that was not supported previously &ndash; I know this change is going to be very well received by many organizations. The scheduler can be viewed and configured using the\n[powershell]Get-ADSyncScheduler[/powershell]\nand\n[powershell]Set-ADSyncScheduler[/powershell]\ncmdlets. You can also manually start a synchronization cycle with the\n[powershell]Start-ADSyncSyncCycle[/powershell]\ncmdlet\n\nAs before, the upgrade process from previous versions is very simple &ndash; The wizard will detect the previous installation and ask to if you would like to upgrade:\n\nYou will notice after the upgrade that the old Azure AD Sync Scheduler task no longer exists in Windows task scheduler\n\nOther new features in this release are:\n\nAutomatic upgrade feature for Express settings customers.\nSupport for the global admin using MFA and PIM in the installation wizard.\nSupport changing the user's sign-in method after initial install.\nAllows Domain and OU filtering in the installation wizard.\n\nFor more information on these and other new features, click here\nFor more information about the new built-in scheduler, click here\n",
      tags: [],
      id: 41
    });
    

    index.add({
      title: "How to create a remote &ldquo;Office 365&rdquo; mailbox  in a hybrid deployment",
      category: null,
      content: "I&rsquo;ve recently seen the same issue pop up in a few different environments so I thought I would put together a short post that explains how to create a &ldquo;Office 365&rdquo; mailbox when using a hybrid deployment of Exchange. One of the questions I&rsquo;ve had had answer a few times recently is &ldquo;Why do newly created Exchange Online mailboxes not appear in the on-premises Exchange Admin Center as &ldquo;Office 365&rdquo; mailboxes like migrated mailboxes do?&rdquo;\nThere appears to be some confusion around provisioning of new user mailboxes once a hybrid deployment has been configured as this issue is caused when the mailbox has not be correctly provisioned in the on-premises environment.\n\nWhile it is technically possible to create a new user account in Active Directory, wait for AAD Connect to provision that account to AAD and then assign an Exchange Online license to that user to create their mailbox, but the problem with that process is that it does not set the msExchRecipientType (and other) Exchange related attributes for that user object and that is why it will never appear in the on-premises Exchange Admin Center:\n\nIn order to correctly popular these attributes, you either need to create the new user and mailbox via the Exchange Admin Center by clicking on the &ldquo;+&rdquo; icon and selecting &ldquo;Office 365 Mailbox&rdquo; or you need to enable a remote mailbox for a previously created user using the Enable-RemoteMailbox cmdlet\n\nMany organizations already have automated provisioning processes in place so adjusting the mailbox enablement workflow may be the preferred method, an example of the cmdlet is shown below:\n[powershell]\n#Syntax is: Enable-RemoteMailbox  &ndash;RemoteRoutingAddress \nEnable-RemoteMailbox homer -RemoteRoutingAddress homer@gooselabs.mail.onmicrosoft.com\n[/powershell]\n\nThe Enable-RemoteMailbox cmdlet can be run immediately after creating the user account in Active Directory so there is no need to wait for the next AAD Connect synchronization cycle to complete before enabling the mailbox. Once the user account has been provisioned to AAD, the mailbox will automatically created and the appropriate license should then be assigned to the user.\nMore information on the Enable-RemoteMailbox cmdlet can be found on TechNet here\n",
      tags: [],
      id: 42
    });
    

    index.add({
      title: "Multiple tenant domains with a single Yammer network",
      category: null,
      content: "I recently worked with a customer who had a large number of different business units and each one had their own domain. As part of their Office 365 enablement project they wanted to enable Yammer Enterprise for their tenant and allow users from the different business units to collaborate with each other using the same Yammer network. Yammer integration with Office 365 has come a long way over the last few years and while merging multiple networks or adding domains into the same network is possible, there are a few things to think about before initiating the process and I wanted to post some of my notes.\nFirstly, here are some of the key points to remember:\n\nYammer no longer requires the use of Yammer Directory Sync and can now make use of Azure AD Connect\nOnce Yammer has been activated and a Yammer Enterprise network has been created for the tenant, any user who was a valid account in the tenant will be able to log on to Yammer without any additional license assignment\nYammer users are created the first time they log on and will therefore not appear in the Yammer people directory prior to that\nOffice 365 supports one activated Yammer Enterprise network per tenant\nYammer content is not copied during the merge process\n\nSince Office 365 supports only one activated Yammer Enterprise network per tenant, it is recommended that in environments with multiple domains the home network is activated using the domain that accommodates the majority of users. Once this network has been created, adding a domain to a network is very simple.&nbsp; log into the Office 365 portal, submit a service request and once you have completed the request form (pictured below) it only takes a day or two to complete.\n\nIf a domain already has a Yammer Basic network, you can choose to either upgrade that network to an Enterprise network or create a new Enterprise network and merge the old Basic one, but it is important to understand that during the merge process the old Yammer content will not be copied. This network migration process no longer requires a service request and can be performed by Yammer admins. There is some great documentation available here.&nbsp;\nSome additional documentation on upgrading your Yammer network is available here.\n",
      tags: [],
      id: 43
    });
    

    index.add({
      title: "Exchange Hybrid Deployment and Sizing",
      category: null,
      content: "In September, I posted about the great new Office 365 Hybrid Configuration Wizard and while there is no question that the HCW is a great help when configuring hybrid deployments, there are a few other important considerations to take into account when deploying Exchange Hybrid. I've helped many organizations deploy hybrid configurations and move mailboxes to the cloud over the last few years and often to come across the same questions and misconceptions, so I thought I'd address some of these in a blog post.\n&nbsp;\n\"Help!, I need to implement a hybrid server!\"That is not necessarily true, Exchange Hybrid is a configuration state and should not be thought of as a server role. A Hybrid deployment uses existing Exchange workloads like Autodiscover and Exchange Web Services (EWS) so if you already have Exchange 2010/2013/2016 deployed according to best practices then chances are you already have everything you need to configure Exchange Hybrid. Sure, there is some additional functionality available if you use the most recent version of Exchange, but do you need that functionality? I've seen so many environments that have correctly sized and load balanced Exchange servers and then have a tiny virtual machine deployed as a \"hybrid server\". This type of configuration creates a single point of failure and inevitably becomes a migration bottleneck.\nIf you are looking to migrate from a legacy version of Exchange then you will need to implement additional servers in order to deploy Hybrid. For Exchange 2003 your only option for going hybrid is to deploy a correctly sized Exchange 2010 deployment. For those on Exchange 2007 it is recommended that Exchange 2013 is used instead.\n&nbsp;\n\"Can I virtualize my servers for Hybrid?\" or \"How do I size my servers for Hybrid?\"If you are in a position where you are looking to upgrade your Exchange Organization prior to a migration to Exchange Online or you need to implement new Exchange servers because you are on a legacy version, you can definitely make use of virtualization. Virtualization in the Exchange world has long been a hot topic and isn&rsquo;t really something that I&rsquo;ll get into in this post. In my experience, incorrectly configured or undersized virtual Exchange servers are by far the most common issue I&rsquo;ve come across in the field so it is often simpler to use physical hardware which is also the recommended practice.\nTo illustrate this, here is an example of some actual performance data I gathered when working with a customer. This particular customer was migrating from Exchange 2007 and had implemented virtual Exchange 2013 servers. Everything worked great until they attempted to migrate several mailboxes at the same time and they noticed that it was taking a considerable amount of time for small mailboxes to migrate. After confirming that the issue wasn&rsquo;t bandwidth related we decided to take a closer look at the new virtual servers. These servers sized with 4 CPU cores and 32 GB of RAM but didn&rsquo;t appear to be performing correctly. Our initial performance tests indicated that the servers seemed to be CPU constrained and after a lot of testing and much discussion with their virtualization team we found that simply changing the configuration from 2 sockets with 2 cores each (4 cores total) to 1 socket with 4 cores (still 4 cores) greatly improved the performance. The same 100 mailboxes were used in both tests:\n\nIf you are planning to virtualize, make sure you follow Microsoft&rsquo;s best practices for virtualizing Exchange and always use the Exchange Server Role Requirements Calculator to correctly size your deployments.\n&nbsp;\n\"The cloud is awesome, I plan to remove all my on-premises Exchange servers!\"There is no denying that moving to the cloud makes sense for a lot of organizations and in many instances there is a desire to remove all on-premises workloads. I always advise my customers to be very careful when it comes to decommissioning their entire Exchange Organization. When using directory synchronization with your Office 365 tenant, your users are synchronized from your on-premises Active Directory and therefore most of the attributes associated with these users cannot be managed in Office 365 or Exchange Online and must be managed on-premises. Completely removing your on-premises Exchange Organization makes managing mailbox attributes more difficult so I would definitely recommend retaining at least one Exchange server for user object management. You don&rsquo;t need to retain all your Exchange servers though, so I many environments there will still be a significant reduction in servers.\nRetaining an on-premises Exchange server could also be really useful in SMTP relay scenarios where you have on-premises applications and devices that need to send email.\nMicrosoft also has a lot in great resources available to help answer your Hybrid questions, here are a few:\n\nHybrid Deployment Best Practices\nDecommissioning your Exchange 2010 servers in a Hybrid Deployment\nHow and when to decommission your on-premises Exchange servers in a Hybrid Deployment\nExchange 2016 Virtualization\n\n",
      tags: [],
      id: 44
    });
    

    index.add({
      title: "My Connect-EXO.ps1 script has been updated!",
      category: null,
      content: "I recently published an updated version of my Connect-EXO.ps1 script. Version 3.0 includes the option to connect to Azure AD. Based on the options selected it will connect to either or both services, here is a screenshot of the new interface:\n\nThe update has been published to the TechNet Gallery, it can be downloaded by clicking here&hellip;\n",
      tags: [],
      id: 45
    });
    

    index.add({
      title: "A look at the Microsoft Office 365 Hybrid Configuration Wizard",
      category: null,
      content: "In case you missed it, Microsoft recently announced the Microsoft Office 365 Hybrid Configuration Wizard (HCW). The HCW has come a long way since it was first introduced in Exchange 2010 SP2, prior to that configuring a hybrid deployment required ~50 manual steps. This is the third version of the HCW and one of the most notable changes is that it is a standalone application which decouples it from the Exchange update cycle. The HCW will download the latest version every time it is run which will ensure that the latest version is always used.\nThe new HCW is available for use with Exchange 2013 CU8 or higher, however you will need to have Exchange 2013 CU10 installed if you would like see the new HCW landing page (pictured below) which is accessible via the &ldquo;Hybrid&rdquo; menu item in your on-premises Exchange Admin Center:\n\nThose using Exchange 2013 CU8 or CU9 can download the new HCW here.\nThe wizard itself with take you through a series of configuration pages very similar to the pervious version, however there are improvements to error handling and a number of changes under the covers that greatly improve performance and efficiency.\n\n\n\nIt is worth noting that the log file location has changed from &ldquo;%ProgramFiles%\\Microsoft\\Exchange Server\\V15\\Logging\\Update-HybridConfiguration&rdquo;&nbsp; to &ldquo;%AppData%\\Microsoft\\Exchange Hybrid Configuration&rdquo;\nThe Exchange Team has a detailed post about all the great new features in the Microsoft Office 365 Configuration Wizard, I'd encourage you to check it out here.\n",
      tags: [],
      id: 46
    });
    

    index.add({
      title: "Migrating Office for Mac users to Exchange Online",
      category: null,
      content: "I recently worked with a customer who has a workstation fleet that is almost entirely made up of Macintosh computers. Users make use of Outlook 2011 for Mac and were being migrated to Exchange Online. We found that there wasn&rsquo;t a great deal of documentation around that covers this scenario so I wanted to post some of my notes here.\nAccording to the &ldquo;Office 365 system requirements&rdquo; page on office.com, Office 365 is designed to work with the following software:\n\nThe current or immediately previous version of Internet Explorer or Firefox, or the latest version of Chrome or Safari.\nAny version of Microsoft Office in mainstream support.\n\n\nMicrosoft Support Lifecycle indicates that you would need at least Microsoft Office for Mac 2011 SP3 and I can confirm after some testing that anything prior to Office for Mac 2011 SP2 simply won&rsquo;t even connect. The latest update currently available for Microsoft Office for Mac 2011 will bring the version number to 14.5.4. There is of course also the new Office 2016 for Mac.\nThe user experience when migrating a Mac user is similar to what we experience in the Windows world, with one exception &ndash; no restart of Outlook is required. Autodiscover will detect the mailbox move and prompt the user to re-configure. Here are some examples of this prompt in Outlook for Mac 2011 and Outlook 2016 for Mac:\n\n\nNot sure what version your clients have installed? You can use Log Parser Studio to parse the IIS logs on your CAS servers to help determine the versions you have out there. \n",
      tags: [],
      id: 47
    });
    

    index.add({
      title: "My Get-AZCopyGUI.ps1 script has been updated",
      category: null,
      content: "At the end of May, I published my Get-AZCopyGUI.ps1 script which is&nbsp;a&nbsp;simple GUI wrapper for AZCopy.exe and helps simplify the process of importing .PSTs into Exchange Online. Today I published an updated version of the script which fixes a small bug and provides some additional functionality. The GUI now includes the following new options:\n\nThe ability to use /Pattern switch - It will automatically be set&nbsp;to *.PST\nThe ability to choose a custom log&nbsp;location. If &nbsp;no location is selected,&nbsp;a log file is named AzCopyVerbose.log will be created in the default location which is %LocalAppData%\\Microsoft\\Azure\\AzCopy\n\n\nFor more information about&nbsp;Get-AZCopyGUI.ps1, see this post.&nbsp;I have published it to the TechNet Gallery, it can be downloaded by clicking here&hellip;\n",
      tags: [],
      id: 48
    });
    

    index.add({
      title: "Upgrading to Azure AD Connect",
      category: null,
      content: "It&rsquo;s here! Yesterday, Microsoft announced the general availability of Azure AD Connect (AAD Connect). Over the years the humble DirSync tool has evolved and AAD Connect is the simplest way yet to integrate on-premises AD identities with Azure Active Directory. There has been a lot of confusion out there about which tool to use for directory synchronization but Microsoft has been hard at work on one tool to rule them all and as noted on the Microsoft Azure site, this tool is AAD Connect:\nAzure AD Connect incorporates the components and functionality previously released as Dirsync and AAD Sync. These tools are no longer being released individually, and all future improvements will be included in updates to Azure AD Connect, so that you always know where to get the most current functionality.\n\nOne of the great features of AAD Connect is that it will upgrade your existing deployment of DirSync or AAD Sync, it&rsquo;s a simple wizard and 5 clicks away!\n\nClick here for more Azure AD Connect information and resources.\n",
      tags: [],
      id: 49
    });
    

    index.add({
      title: "Script: Get-AZCopyGUI.ps1 - AZCopy GUI for PST Import",
      category: null,
      content: "Microsoft recently announced the new Office 365 Import Service which is currently in preview. The new service allows organizations to import legacy PST data using one of two methods:\n\nDrive shipping &ndash; you send Microsoft a hard drive with your data.\nNetwork Upload &ndash; you make use of Azure storage to upload your data to Office 365.\n\nThe network upload option makes use of the Microsoft Azure AZCopy tool which uploads your data to an Azure storage blob. Brian Reid has a great post on his blog about using the service.\nGet-AZCopyGUI.ps1 is a GUI wrapper for the Microsoft Azure AZCopy tool (AZCopy.exe) to simplify the process of importing .PSTs into Exchange Online. To use the script, you need to locate your storage account key and upload URL. You can do this by accessing the &ldquo;Import&rdquo; menu item in the Office 365 Admin Center. To access this option, you need to be assigned the Mailbox Import Export role in Exchange Online.\n\nFor more information on the Office 365 Import Service, see the following TechNet documentation.\nRequirements:\n\nThe script will work natively in PowerShell 2.0+\nThe script requires the Microsoft Azure AZCopy Tool with default installation path - get it here\n\nUsage:\nThere are no parameters or switches, simply execute the script:\n[shell].\\Get-AZCopyGUI.ps1[/shell]\nWhen using the Verbose option, a log file is named AzCopyVerbose.log will be created in %LocalAppData%\\Microsoft\\Azure\\AzCopy if no \"Log Location\" is specified.\nExecution Policy:\nThe script has been digitally signed and will run just fine under a \"RemoteSigned\" execution policy.\nScreenshots:\n\nDownload:\nI have published it to the TechNet Gallery, it can be downloaded by clicking here...\n",
      tags: [],
      id: 50
    });
    

    index.add({
      title: "Using PowerShell to bulk email your users",
      category: null,
      content: "I was recently working on a migration project with a customer and volunteered to help find a solution to a challenge the Organizational Change Management (OCM) team were facing. The OCM team had been communicating with the business to keep them informed about the upcoming changes and what impact these changes would have on their day to day operations. This communication had all taken place via email and they now needed to send out a new notification to several thousand users that contained specific information that would be different for each recipient. Since this was a single-use scenario and all recipients were internal users, they were not terribly interested in investing in a third-party application or service to do this so we decided to explore other options.\nInspired by Pat Richard&rsquo;s &ldquo;New-WelcomeEmail.ps1&rdquo; script, I figured it would be pretty easy to achieve this using a PowerShell script and .CSV input file, it works great! To illustrate this, I&rsquo;ll use the fictitious example of gooseLabs, Inc who are relocating to a new office building and would like to send a notification email to all their users that contains their new desk location and phone number. The first and most important step is to ensure that you have an accurate input file. For this particular scenario, the input file looks something like this:\n\nOnce we have our input file created, we can use the magic of PowerShell to generate our notifications using this data. The following script imports the .CSV file and generates a simple email notification that is then sent to everyone in the list:\n[powershell]\n# Function to create report email\nfunction SendNotification{\n $Msg = New-Object Net.Mail.MailMessage\n $Smtp = New-Object Net.Mail.SmtpClient($ExchangeServer)\n $Msg.From = $FromAddress\n $Msg.To.Add($ToAddress)\n $Msg.Subject = \"Announcement: Important information about your office relocation.\"\n $Msg.Body = $EmailBody\n $Msg.IsBodyHTML = $true\n $Smtp.Send($Msg)\n}\n# Define local Exchange server info for message relay. Ensure that any servers running this script have permission to relay.\n$ExchangeServer = \"yourexchange.domain.com\"\n$FromAddress = \"Office Relocation Team \"\n# Import user list and information from .CSV file\n$Users = Import-Csv UserList.csv\n# Send notification to each user in the list\nForeach ($User in $Users) {\n $ToAddress = $User.Email\n $Name = $User.FirstName\n $Level = $User.Level\n $DeskNum = $User.DeskNumber\n $PhoneNum = $User.PhoneNumber\n $EmailBody = @\"\n \n \n \n \nDear $Name,\nAs you know we will be relocating to our new offices at 742 Evergreen Terrace, Springfield on July 1, 2015. This email contains important information to help you get settled as quickly as possible.\nYour existing access card will grant you access to the new building and your desk location is as follows:\nLevel: $Level\n Desk Number: $DeskNum\n Phone Number: $PhoneNum\nYour new phone will be connected and ready for use when you arrive.\nIf you require any assistance during the move please contact the relocation helpdesk at relocation@gooselabs.net or by calling 555-555-1234\nRegards,\nOffice Relocation Team\n \n \n\"@\n Write-Host \"Sending notification to $Name ($ToAddress)\" -ForegroundColor Yellow\n SendNotification\n}\n[/powershell]\n\nThe resulting notification looks like this:\n\n\nThis method could also be used to distribute other information, like temporary passwords prior to a Cutover Exchange Migration.\n",
      tags: [],
      id: 51
    });
    

    index.add({
      title: "Using Azure Scheduler to feed your pets (sort of)",
      category: null,
      content: "One of the things I learned shortly after we adopted our cat Kensington is that he doesn&rsquo;t care too much about my sleeping habits, if he&rsquo;s hungry he&rsquo;ll happily let us know. I don&rsquo;t have kids and having to wake up in the early hours of the morning to feed a hungry cat was a troubling proposition so I thought I'd&nbsp;find a better way. After some thought, I decided we needed a automated pet feeder but I wasn&rsquo;t able to find a commercially available one that met my criteria so I had to make my own which ended up being a really fun project.\nMy pet feeder had the following requirements:\n\nIt had to be internet enabled\nIt needed Wi-Fi connectivity so it could be more portable\nIt needed to be small and not an eyesore\nIt needed to support scheduling as well as&nbsp;manual operation\n\nI found a few ideas online (it seems my situation isn&rsquo;t unique!) but yet again none of them met my criteria. After a lot of thought, I settled on a design that I thought would be functional and give me the flexibility that I was looking for and off I went to Home Depot to get the material. I ended up with a few lengths of PVC piping of varying sizes and a polycarbonate sheet. For the electronic brain of the feeder I used the following:\n\n1 x Spark Core (Wi-Fi development board)\n1 x Continuous Rotation Servo\n1 x Green LED (Feed indicator)\n1 x Red LED (Power indicator)\n1 x Glue stick (to create a cheap linear actuator)\n2 x resistors, some leads and a mini breadboard\n\nThe idea is that cat food is deposited in the top part of the feeder, the Spark Core drives the actuator which lowers and then raises a platform inside the main pipe chamber. Lowering the actuator exposes the opening &lsquo;elbow&rsquo; in the middle section of the feeder and the food then falls down the smaller section of pipe and is deposited in the bowl. I wanted to ensure that only&nbsp;1-2 cups of food is dispensed and was able to do this by tweaking how wide of an opening is created when the actuator is lowered and how long it is kept open for. To remove any guessing, I added some LEDs to show me what was happening at all times. The red LED is always lit when the feeder is powered on and the green LED only lights up during a feed operation. I played around with various designs for the platform that moves up and down inside the main chamber and ended up creating an angular platform.&nbsp;Here are some pictures of the feeder:\n\n\n\nOperating the feeder is done by interacting with the Spark Core via the Spark API. Before this can be done, the board first has to have the relevant operating instructions flashed to it and I put together the following to achieve this:\n[shell]\nServo myServo;&nbsp; // create servo object to control a servo\nint redLed = D0; // red power LED on pin D0\nint greenLed = D1; //green feed LED on pin D1\nvoid setup()\n{\nmyServo.attach(A0);&nbsp; // attaches the servo on the pin A0\nSpark.function(\"feed\", feedKenny);&nbsp;&nbsp; // register the function\npinMode(redLed, OUTPUT);\npinMode(greenLed, OUTPUT);\n}\nvoid loop()\n{\ndigitalWrite(redLed, HIGH); // red LED always on\n}\nint feedKenny(String command)&nbsp; //called upon a matching POST request\n{\ndigitalWrite(greenLed, HIGH); // turn on green LED when feeding\nmyServo.writeMicroseconds(1000);\ndelay(7500);\nmyServo.writeMicroseconds(1500);\ndelay(2500);\nmyServo.writeMicroseconds(2000);\ndelay(7500);\nmyServo.writeMicroseconds(1500);\ndigitalWrite(greenLed, LOW); // turn off green LED\nreturn 200;\n}\n[/shell]\nOnce the Spark Core is connected to the Wi-Fi network and the application code has been flashed you can interact with it using a regular HTTP POST. For testing, you can use PowerShell and Invoke-RestMethod to do this:\n[ps]\nInvoke-RestMethod -Uri 'https://api.spark.io/v1/devices/YOUR-DEVICE-ID/FUNCTION?access_token=YOUR-TOKEN' -Method Post\n[/ps]\n\nPowerShell is great for testing, but not very practical for daily use, fortunately this is easily remedied with a few lines for HTML code. I created a very simple form and put it on web server on my home network. This page is not secured and is only accessible when I&rsquo;m on my home network.\n\nScheduling regular feeding times is really easy with Azure Scheduler. Sign in to your Azure subscription and click &lsquo;Scheduler&rsquo;\n\nCreate a new Job Collection and give it a meaningful name\n\nThe wizard will also give you&nbsp;the option of creating your first Job. Since the Spark API requires a HTTPS POST, be sure to select that option and schedule it accordingly\n\n\nOnce the wizard completes, you can add more Jobs to the Job Collection as appropriate:\n\nHere is a quick demonstration of how the feeder works:\n[embed]https://www.youtube.com/watch?v=O226R01mmD0[/embed]\n",
      tags: [],
      id: 52
    });
    

    index.add({
      title: "Using a certificate to encrypt credentials in automated PowerShell scripts",
      category: null,
      content: "PowerShell is a great way to help automate frequent or repetitive tasks and every now and then these tasks require some form of authentication. You could just store the service account password in the script, but I&rsquo;m really not a fan of doing that and I&rsquo;m sure you&rsquo;d agree it really isn&rsquo;t a very good way to do it. I was working on a script recently which was to be scheduled to run at various times by different service accounts on different servers so I wanted a way to ensure that a single copy of the script could be portable to any server and would still securely connect to Exchange with the correct permissions no matter which service account actually executed the script. Remotely connecting to Exchange/Exchange Online via PowerShell isn&rsquo;t difficult to do and you could just use Get-Credential cmdlet with ConvertFrom-SecureString and Set-Content to securely save your password to file which could then be read by your script without subsequent intervention. The trouble with this solution is that it isn&rsquo;t very portable and that password can only be ready by the user that created the file so it will work great if you used it only on your own machine, but not so well when trying to distribute it to a bunch of servers as a scheduled job. I wanted a solution that would use a particular certificate to decrypt a password stored in the script, in that way if the script was executed on a machine that did not have my certificate installed it would not be able to decrypt the password and would fail. I ended up creating an encrypted password using the public key of a certificate and storing that in the script, the only way to decrypt that password is with the private key of the same certificate. Let&rsquo;s look at this in more detail.\nThe first component of the solution is a certificate. Since I already had access to a internal Windows CA, I wanted to use a certificate signed by that CA but I also tested it with a self-signed certificate that was generated using &ldquo;makecert.exe&rdquo;. PowerShell 4.0 includes a New-SelfSignedCertificate cmdlet that makes generating a self-signed certificate really easy, but for some reason I wasn&rsquo;t able to use one of those certificates for encryption (more specifically the decryption would not work) and since I planned to use a CA signed certificate anyway I didn&rsquo;t spend a whole lot of time trying to figure it out. The key thing to remember is that you need to install the certificate AND the private key, the certificate doesn&rsquo;t have to be trusted. I decided to create a new certificate template for my &ldquo;Script Authentication&rdquo; certificate by duplicating the &ldquo;Web Server&rdquo; template and making a few changes to it.\nFirstly, launch the Certification Authority MMC, locate &ldquo;Certificate Templates&rdquo;, right-click and select &ldquo;Manage&rdquo;\n\nNext, locate the &ldquo;Web Server&rdquo; template, right-click and select &ldquo;Duplicate Template&rdquo;\n\nI called my new template &ldquo;Script Authentication&rdquo;\n\nAnd you need to ensure that you &ldquo;Allow private key to be exported&rdquo;. Once done, apply those changes.\n\nWe then need to publish the new template to ensure that it can be used when requesting a new certificate. Right-click &ldquo;Certificate Templates&rdquo;, select &ldquo;New&rdquo; and then &ldquo;Certificate Template to Issue&rdquo; and select your newly created template from the list\n\nOnce done, you should be able to create and submit an advanced certificate request using the newly created template directly on your CA. You are not required to complete all the fields, but it is useful to give your certificate a descriptive name. I called mine &ldquo;PowerShell Automation&rdquo;.\n\nOnce you have the installed the certificate, you can export it (don&rsquo;t forget the private key) for use on other machines.\n\nI recommend storing it in a safe place and not marking the private key as exportable when moving it around, in this way you have some control over which machines can actually decrypt the password in your script.\n\nHere&rsquo;s what my certificate looks like\n\nI decided to store my certificate in the computer store, it probably doesn&rsquo;t matter where you store it but you would need to update the following PowerShell cmdlets appropriately. If you are going to have multiple service accounts executing your script, you need to ensure that all these accounts have permission to read the private key. This is done by right-clicking the certificate, selecting &ldquo;All Tasks&rdquo; and then &ldquo;Manage Private Keys&rdquo;.\nWe can use the Get-ChildItem cmdlet to locate our certificate:\n[powershell]Get-ChildItem Cert:\\LocalMachine\\My | Where-Object {$_.Subject -like \"CN=PowerShell Automation*\"}[/powershell]\nNext, I need to encrypt my password. To do this, I define the password as a variable, encode it and then encrypt the encoded password using my certificate&rsquo;s public key:\n[powershell]\n$Cert = Get-ChildItem Cert:\\LocalMachine\\My | Where-Object {$_.Subject -like \"CN=PowerShell Automation*\"}\n$Password = 'MyPassword'\n$EncodedPwd = [system.text.encoding]::UTF8.GetBytes($Password)\n$EncryptedBytes = $Cert.PublicKey.Key.Encrypt($EncodedPwd, $true)\n$EncryptedPwd = [System.Convert]::ToBase64String($EncryptedBytes)\n[/powershell]\n\nNow that I have the encrypted password, I can store it in my script and decode it using my certificate&rsquo;s private key each time the script is executed. To do this, I pretty much reverse the process:\n[powershell]\n$EncryptedPwd = \"ts32rCLLdZl3/6wINHtLD6bQO65ub&hellip;.. \"\n$EncryptedBytes = [System.Convert]::FromBase64String($EncryptedPwd)\n$DecryptedBytes = $Cert.PrivateKey.Decrypt($EncryptedBytes, $true)\n$DecryptedPwd = [system.text.encoding]::UTF8.GetString($DecryptedBytes)\n[/powershell]\nYou can build this into any scripts you have that currently require credentials, it works great for automating Office 365/Exchange Online scripting. To illustrate this, I put together a quick (and dirty!) script that can be used to provide an automated daily &ldquo;Top Mail Recipient&rdquo; report via email. This script can be scheduled to run daily and it will connect to Exchange Online, generate a list of the top mail recipients and email that report to the address you specify. It&rsquo;s not very useful as it is, but it does show how easily you could automate things using PowerShell and serves as a great example for certificate password encryption.\n[powershell]\n# Function to create report email\nfunction SendReport{\n $Msg = New-Object Net.Mail.MailMessage\n $Smtp = New-Object Net.Mail.SmtpClient($ExchangeServer)\n $Msg.From = $FromAddress\n $Msg.To.Add($ToAddress)\n $Msg.Subject = \"Top Mail Recipient Report for $Date\"\n $Msg.Body = $EmailBody\n $Msg.IsBodyHTML = $true\n $Smtp.Send($Msg)\n}\n# Define local Exchange server info for message relay. Ensure that any servers running this script have permission to relay.\n$ExchangeServer = \"yourexchange.domain.com\"\n$FromAddress = \"Office 365 Reports \"\n$ToAddress = \"you@yourdomain.com\"\n# Some basic HTML styling\n$Header = \"\n\n\"\n# Connect to Exchange Online\n# First decrypt the password using the certificate\n$Cert = Get-ChildItem Cert:\\LocalMachine\\My | Where-Object {$_.Subject -like \"CN=PowerShell Automation*\"}\n$EncryptedPwd = \"ts32rCLLdZl3/6wINHtLD6bQO65ubeQ3sHj9zXbhsaQDjihQmdyoja+iL0NGXQX0DicQdXWQRu+P8dSy96ux1tLQR9ZT8WPRq8rHsR3gNXDmipCK/4CHoc5Ki7nbMKUSReprtIrnwjlXZNBocTzurBQ+LtAHvAYipD37AXVjjpwwwqud5HCXk+E4OrJGe+yIx/87neRAunqdKvyuaxUYaxeBdx2R/hpLZhxywinjjVMx+0N2RNk7H3fBEite7uuANcAg+ElAssi4DAQYYDOviIrvbjdpKogKcevAh5xEx4Wm2WBzM5XqXmj1O9TUzB9BOiUVQhDwwqCcUpb2bTNW7g==\"\n$EncryptedBytes = [System.Convert]::FromBase64String($EncryptedPwd)\n$DecryptedBytes = $Cert.PrivateKey.Decrypt($EncryptedBytes, $true)\n$DecryptedPwd = [system.text.encoding]::UTF8.GetString($DecryptedBytes) | ConvertTo-SecureString -AsPlainText -Force\n# Then define Credentials and create session\n$Username = \"account@yourdomain.onmicrosoft.com\"\n$Credential = New-Object System.Management.Automation.PSCredential ($Username,$DecryptedPwd)\n$Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://outlook.office365.com/powershell-liveid/ -Credential $Credential -Authentication Basic -AllowRedirection\nImport-PSSession $Session\n# Generate report data\n$Date = Get-Date -DisplayHint Date\n$EmailBody = Get-MailTrafficSummaryReport -Category TopMailRecipient | select @{expression={$_.C1};label=&rdquo;User&rdquo;}, @{expression={$_.C2};label=&rdquo;Item Count&rdquo;} | ConvertTo-HTML -head $Header -body \"Top Mail Recipient Report\"\n# Send report\nSendReport\n[/powershell]\nHere is an example of what the final result looks like:\n\n",
      tags: [],
      id: 53
    });
    

    index.add({
      title: "Mail Protection Reports for Office 365",
      category: null,
      content: "One of the great things about Office 365 is how flexible the service is, it caters to those organizations who are looking for a service that just works out of the box as well as those who are looking to get stuck in there and really take things to the next level. A perfect example of this is a recent experience I had with one of my customers. This particular customer was looking to do some specific email reporting and after discussing their options, I thought it would be a good idea to put together this post.\nThere are a number of options available when it comes to reporting in Office 365. Firstly, the Office 365 admin center provides a number of pre-configured reports and while these are gorgeous looking reports, they may not always provide the level of detail you are looking for. You also have the option of rolling your own with the Office 365 Reporting web service but this requires some coding and depending on your requirements may end up being overkill. There is however a great option that falls nicely in the middle of these in the form of an Excel based reporting workbook called &ldquo;Mail Protection Reports for Office 365&rdquo;. This reporting workbook isn&rsquo;t new, I remember first using it in a demo for an EOP session I presented at Office 365 Ignite in Sydney, Australia in late 2013 so it has been around for a while, but I&rsquo;m surprised how little press it gets.\nThe workbook allows you to query specific date ranges and you can then filter and customize how the information is displayed. It provides spam, malware, transport rule and DLP reporting. Here are some examples:\n   \nThe reporting workbook ended up being a perfect fit for their specific scenario. It is really simple to use and doesn&rsquo;t require the use of PowerShell or any custom coding. You can download the Mail Protection Reports for Office 365 workbook here.\n",
      tags: [],
      id: 54
    });
    

    index.add({
      title: "The new(ish) Outlook for Mac (for Office 365 subscribers)",
      category: null,
      content: "I&rsquo;ve been dying to take the new Outlook for Mac (for Office 365 subscribers) for a test drive ever since I saw the announcement late last year. Having used both Entourage and Outlook for Mac 2011 in the past, I was excited to see what improvements the new version would bring. Let&rsquo;s be honest, as good as they were, both the previous iterations were miles behind the Windows version of Outlook (which I live in daily). \n \n \nWhile I haven&rsquo;t spent an extended period of time using the new Outlook for Mac, I have to say I actually love it so far and I think it is safe to say that Outlook for Mac is no longer the poor cousin. I am really looking forward to the release of the next Office for Mac!\nThe new Outlook for Mac is currently only available to Office 365 commercial customers, Office 365 Home, Office 365 Personal and Office 365 University subscribers while the release of the next version of Office for Mac is currently planned for the second half of 2015.\n",
      tags: [],
      id: 55
    });
    

    index.add({
      title: "Exchange Updates &ndash; December 2014",
      category: null,
      content: "Earlier today Microsoft announced the release of Exchange 2013 CU7, Exchange 2010 SP3 RU8 and Exchange 2007 SP3 RU15. In addition to fixes for customer reported issues and minor feature improvements they also include a security update to address elevation of privilege vulnerabilities in these versions of Exchange. More information about the vulnerabilities can be found in Microsoft Security Bulletin MS14-075. Tony Redmond has also written a great post about Exchange 2013 CU7 here.\nThe updates can be downloaded at the following links:\n\nExchange Server 2013 Cumulative Update 7\nUM Language Packs for Cumulative Update 7\nExchange Server 2010 SP3 Update Rollup 8\nExchange Server 2007 SP3 Update Rollup 15\n\n",
      tags: [],
      id: 56
    });
    

    index.add({
      title: "Script: Fix-ProxyAddress.ps1",
      category: null,
      content: "I recently blogged about the \"MigrationPermanentException: The target mailbox doesn't have an SMTP proxy matching 'company.mail.onmicrosoft.com'.\" error message that occurs when attempting to perform a remote mailbox move for a user that doesn&rsquo;t have the correct SMTP proxy address. I put together a script to help simplify the process of adding the relevant SMTP proxy address to effected users.\nOnce launched, the script will prompt for your tenant routing domain in the format 'company.mail.onmicrosoft.com' and will search for all mailboxes in the organization that do not have an email address policy applied. A new SMTP proxy address will be added to all mailboxes without an email address policy. The proxy address will be based on the alias of the primary SMTP address and the routing domain entered, e.g if the primary SMTP address is john.smith@company.com and the routing domain entered is company.mail.onmicrosoft.com the resulting proxy address will be john.smith@company.mail.onmicrosoft.com.\nRequirements: This script has been tested and is known to work with Exchange 2010 and Exchange 2013.\nUsage: There are no parameters or switches, simply execute the script:\n[shell].\\Fix-ProxyAddress.ps1[/shell]\nExecution Policy: The script has been digitally signed and will run just fine under a \"RemoteSigned\" execution policy.\nScreenshots:\n\n\n\nDownload: I have published it to the TechNet Gallery, it can be downloaded by clicking here...\n",
      tags: [],
      id: 57
    });
    

    index.add({
      title: "MigrationPermanentException: The target mailbox doesn't have an SMTP proxy matching 'company.mail.onmicrosoft.com'.",
      category: null,
      content: "One of the most common error message I find when performing mailbox moves to Office 365 &ndash; Exchange Online is the &ldquo;MigrationPermanentException: The target mailbox doesn't have an SMTP proxy matching 'company.mail.onmicrosoft.com'.&rdquo; error:\n \nThe error message is pretty descriptive and is caused when the mailbox being moved doesn&rsquo;t have a proxy address that matches the routing domain. In an Exchange hybrid deployment, the hybrid configuration wizard updates the on-premises email address policies to ensure that all mailboxes have the relevant SMTP proxy address added. This should work fine except in instances when for whatever reason a mailbox or group of mailboxes are not being updated by an email address policy. Typically because the &ldquo;Automatically update email addresses based on the email address policy applied to this recipient&rdquo; has been manually removed:\n \nThere are a couple of ways to fix this, you could just enable the email address policy for those particular mailboxes, but the risk with that option is that it may have been removed for a particular reason. Email address policies are additive only, so while an email address policy will not remove or overwrite an email address, it may change the default SMTP address.\nOr, you may want to simply add the relevant SMTP proxy address for those mailboxes, this can easily be done via PowerShell. I have published a PowerShell script to simplify this process, check it out on the TechNet Gallery.\n",
      tags: [],
      id: 58
    });
    

    index.add({
      title: "My session at SharePoint Conference.ORG 2014",
      category: null,
      content: "I had a great time attending and presenting at SharePoint Conference.ORG yesterday. I really enjoyed the great mixture of business, user experience and technical sessions. I presented a &ldquo;Getting started with Office 365&rdquo; session and as promised I am making my slide deck available.\n\n[slideshare id=40574145&amp;doc=gettingstartedwithoffice365-141021225449-conversion-gate01]\nSlides also available on slideshare\nFor more information about SharePoint Conference .ORG check out http://www.sharepointconference.org/ or on twitter: @SPC_ORG\n",
      tags: [],
      id: 59
    });
    

    index.add({
      title: "Script: Connect-EXO.ps1 - Connect to Exchange Online using remote PowerShell",
      category: null,
      content: "I recently came across an old script I wrote to simplify connecting to Exchange Online using remote PowerShell and thought I&rsquo;d polish it up a little and release it in case it could help make life easier for someone else.\nThis page will be updated whenever new features are added to the script..\nThis script features a GUI that will prompt for your tenant credentials and then connect to various Office 365 services using remote PowerShell. The current version of the script allows connectivity to:\n\nExchange Online\nAzure Active Directory\nOffice 365 Security &amp; Compliance Center&nbsp;\n\nRequirements:\nThe script will work natively in PowerShell 2.0+\nUsage:\nThere are no parameters or switches, simply execute the script:\n[shell].\\Connect-EXO.ps1[/shell]\nExecution Policy:\nThe script has been digitally signed and will run just fine under a \"RemoteSigned\" execution policy.\nScreenshots:\n\n\nDownload:\nI have published it to the TechNet Gallery, it can be downloaded by clicking here...\n",
      tags: [],
      id: 60
    });
    

    index.add({
      title: "Do you have a pre-Exchange 2013 SP1 Hybrid or are you using free/busy federation? Update your Federation Trust on Sept 23!",
      category: null,
      content: "If your organization has an Exchange Hybrid deployment that is not running on Exchange 2013 SP1 or later you may want pay attention. On September 23, 2014, Microsoft will be making a certificate change to the Microsoft Federation Gateway which could affect you.\nThis change could also impact those who are sharing free/busy information between two different on-premises organizations. If you are already running Exchange 2013 SP1 then you are in luck as this task will be automated for you and you are not required to take any action. For those using older versions of Exchange, it is very important that you update your Federation Trust as failing to do so will result in loss of free/busy and mailtip functionality. Microsoft released the following post that provides more information as well as the recommended actions that should be taken, I strongly recommend paying attention to this if you are not on the latest version of Exchange 2013.\n",
      tags: [],
      id: 61
    });
    

    index.add({
      title: "Office 365 Workstation Readiness",
      category: null,
      content: "As cloud services and Office 365 in general continue to gain popularity, I find myself talking to more and more organizations who are looking to make use of these services. One of the challenges I come up against most often is the issue of workstation readiness and how many organizations tend to overlook the importance or simply glance over that section in the enablement plan. One of the great things about Microsoft Online Services is the rapid innovation and how quickly new features and brought to market. Unfortunately this also seems to catch many organizations off-guard.\nI&rsquo;m sure we can all agree that a workstation refresh project for even a small customer is a big undertaking and I&rsquo;ve seen many Office 365 projects stall for a very long time due to workstation readiness and/or workstation refresh projects. As always, a thorough analysis and due diligence is required to ensure that all workstations in the fleet meet the published minimum requirements in order to ensure the best possible user experience. I&rsquo;ve seen a whole lot of old and out of date information floating around so I thought I would put together a quick post to spell out the current requirements. In the past, there was a complex table that listed specific updates required by specific software versions and due dates, but thankfully Microsoft has recently simplified this list. In order to provide the best user experience, Office 365 is designed to work with:\n\nThe current or immediately previous version of Internet Explorer or Firefox, or the latest version of Chrome or Safari.\nAny version of Microsoft Office in mainstream support.\n\nThe above list and additional information is published here. Using this guidance, the current workstation readiness requirements are:\n\nInternet Explorer 10 or 11 (The current or immediately previous version of Firefox, or the latest version of Chrome or Safari -&nbsp; I never keep track of those because they change so frequently!)\nMicrosoft Office 2010 or 2013 \n\nStill using Internet Explorer 8 or 9? How about Microsoft Office 2007? These versions are no longer officially supported by Microsoft and although Microsoft does not recommend using these older browsers and clients, the service won&rsquo;t deliberately prevent these browsers and clients from connecting, but the user experience cannot be guaranteed in the longer term. \nI am a firm believer that projects fail because of end-user perception, if users have a degraded experience they are likely to overlook all the cool new features and functionality you are providing. No matter how quickly you can pilot, deploy and migrate to Office 365, I strongly suggest spending some time analyzing your current workstation fleet to to ensure that your users have the best possible user experience.\n",
      tags: [],
      id: 62
    });
    

    index.add({
      title: "Microsoft Office 365 MVP!",
      category: null,
      content: "Today was a good day! It stared out in Music City &ndash; Nashville, Tennessee, I went for an early morning run and was getting ready to kick-off my first project since relocating to the U.S a few weeks ago when, just after 8am I received an email informing me that I had been presented with a 2014 Microsoft MVP Award for my contribution to Office 365 technical communities during the past year.\nI am extremely honoured to receive this award and join the MVP community, a community which I have long respected and admired.\n\nThanks to everyone reading my blog for all your comments and to everyone interacting on social media and in person at conferences and events. I look forward to continued contribution and to sharing my passion with you all.\n",
      tags: [],
      id: 63
    });
    

    index.add({
      title: "Online Migration Tools - Comparing MigrationWiz and Dell On Demand Migration",
      category: null,
      content: "I recently needed to migrate my own personal Office 365 tenant to another Office 365 tenant and even though I only have a few fairly small mailboxes, I decided to use online migration tools to ease the migration and I thought it would be a good idea to put together a little comparison between two of the leading solutions, MigrationWiz and Dell (formerly Quest) On Demand Migration.\nThe truth is, migration tools aren&rsquo;t new and many of today&rsquo;s players in this market have been around for a some time. Cloud adoption however has driven innovation in the market and migration toolsets have changed in recent years. Online migration tools allow organizations to migrate their data between email platforms without having to install or maintain any migration software on-premises. From an IT professional perspective, the configuration is far simpler and because you are typically using a web browser to initiate and manage the migration you are now free to do it from wherever you want (the train in my case!) using whatever device you have available. At a high level, it is a fairly simple process which typically involves the configuration of source and destination connectors (with all the required permissions of course) and the solution will extract, convert and ingest your data for you. If either your source or target mail infrastructure is located on-premises, you would need to ensure that remote connectivity is correctly configured as well.\nFor this comparison, I used exactly the same source mailbox and migrated the content to two new target mailboxes (one for each tool) in a new Office 365 tenant. Both tenants (source and destination) were located in North America and the migrations did not run simultaneously. The source mailbox contained the following:\n\nNumber of folders = 38\nNumber of items = 26255\nTotal mailbox size = ~1.94 GB\n\n\nIntroduction and features:\nMigrationWiz has been around for a few years now and was the first online migration tool I used. I have successfully used MigrationWiz several times and migrated users from Domino/Lotus Notes and Exchange to Exchange or Office 365/Exchange Online. One of the great things about MigrationWiz is the amount of supported source and target platforms.\n\n\n\n\n\nSupported sources\n\n\nSupported targets\n\n\n\n\nAmazon S3\nGoogle Apps/Gmail\nIMAP\nMicrosoft Exchange (2003+)\nMicrosoft Office 365\nMicrosoft Office 365 China\nNovell GroupWise\nPOP\nVMware Zimbra Server\nIBM Lotus Notes\n\n\nAmazon S3\nGoogle Apps/Gmail\nIMAP​\nMicrosoft Exchange (2007+)\nMicrosoft Office 365\nMicrosoft Office 365 China\n\n\n\n\n\nFor more detailed information about the platforms currently supported by MigrationWiz, click here.\n\nI should also mention that migrations from Domino/Lotus Notes require a small &ldquo;Lotus Extractor&rdquo; to be installed on-premises. The extractor should be installed on a workstation and not your Domino servers themselves. MigrationWiz are also in the process of launching a new migration portal which is currently in beta and will support a couple of new migrations, namely:\n\nPublic Folder migrations\nStorage migrations\n\n\nThese options look really promising, however I haven&rsquo;t personally tested them (yet!). A list of items not migrated by MigrationWiz can be found here.\nDell On Demand Migration for Email is a relative newcomer to the online migration tools market, however I&rsquo;m sure we can all agree that they (Quest Software) really set the standard for migration tools in general for a long time. I haven&rsquo;t personally used Dell On Demand for any production migrations but have been meaning to try it out for some time now. Dell On Demand supports the following platforms:\n\n\n\n\nSupported sources\n\n\nSupported targets\n\n\n\nGoogle Apps\nIMAP​\nLotus Notes\nMicrosoft Exchange (2000+)\nMicrosoft Office 365\nNovell GroupWise\nPOP\nSunONE/iPlanet\nWindows Live Hotmail\nZimbra\nMicrosoft Exchange (2010, 2013)\nMicrosoft Office 365\n\n\n\nDell has published a list of known issues and limitations.\nLicensing and cost:\nOne of the great things about both these tools is that they are licensed on a consumption basis and there is no minimum purchase required. MigrationWiz offers a couple of different license options, with the difference being that a &ldquo;Premium&rdquo; license will allow you to perform multiple migration passes. I usually suggest purchasing the &ldquo;Premium&rdquo; license because this works really well with the &ldquo;seed and cutover&rdquo; type migrations I usually perform with these tools. With MigrationWiz, you purchase you license up front and each successfully migrated mailbox consumes one of those licenses. Their licensing is based on volume so the more licenses you purchase, the more you save. A basic license will cost you $9.99 (USD) while a premium license costs $11.99 (USD).\n\nThe Dell On Demand licensing model is somewhat simpler in the sense that they only have one license type. The difference is that you add your credit card details to the portal and they will bill you monthly for the amount of licenses you consume with each successfully migrated mailbox consuming one license and getting billed accordingly. Dell also appear to add an &ldquo;Australia Tax&rdquo; as the same license costs about 20% more when you pay in AUD, I always think this is a little cheeky, $1 or $2 could really add up if you are buying thousands of licenses. One license will cost you $11.00 (USD).\n\nConfiguration:\nTo configure MigrationWiz, you first create a &ldquo;Mailbox Connector&rdquo; which defines your source and target mailboxes as well as your migration credentials. You have the ability to use administrator credentials or end-user credentials configured per mailbox. If you have neither of these available, MigrationWiz also provides the ability to request credentials from each individual user. This is done via an email with a secure link in which the end-user may provide their credentials directly to the system.\n\nOnce you have created your &ldquo;Mailbox Connector&rdquo; you can import your mailbox list. If you have more than one mailbox to migrate, MigrationWiz provides a few methods of doing this.\n\nI typically use .csv import. You can download a sample import file to get started (see sample below). If you are using administrator credentials for your migration, you only need to populate the &ldquo;Source Email&rdquo; and &ldquo;Destination Email&rdquo; fields. More information about migration flags can be found here. I once did a migration for a customer using end-user credentials where some of the users had commas &ldquo;,&rdquo; in their passwords and needless to say, this didn&rsquo;t work very well with .csv files so be mindful of that.\n\nOnce all your mailboxes have been added, you have the ability to tweak many of the migration settings, like filtering, before beginning the migration process.\n\nYou now have the ability to migrate a few or all of the mailboxes you have imported. You will also be able to monitor the migration statistics while the migration is running. The MigrationWiz documentation is really helpful as well, for example if you need more information about migration credentials, see this link\nThe Dell On Demand configuration process is very similar, you start by creating a &ldquo;Migration Plan&rdquo; which defines your source and target mailboxes as well as your credentials. You have the ability to use administrator credentials or end-user credentials and the tool allows you to increase the number of concurrent mailbox migrations by adding additional administrator credentials. Each administrator can migrate 10 target mailboxes concurrently.\n\nThe next step is to import your mailboxes, this can be done via a .tsv file. A sample file is also provided for reference.\n\nThe final configuration step allows you to tweak the migration options\n\nYou are now ready to start migrating!\nMigration Velocity:\nAs a consultant, one of the most common questions I get asked is &ldquo;How long will my migration take?&rdquo;. Unfortunately, this is a very difficult question to answer and the reality is, even with thorough testing and analysis, it is difficult to accurately predict how long a migration will take as every environment is different and migration velocity depends on so much more than just your network speeds. About 6 months ago, I helped a customer complete a migration from Exchange 2003 in one region to Exchange 2010 in another. They had a very tight deadline and it was a hard cut-off so there was no pushing the deadline. I did I whole bunch of calculations based on their source data size, connectivity, etc and in my mind there was no way we would be able to get all the data migrated in time so we started to prepare the business for that. We decided to use MigrationWiz for the migration and we ended up completing the entire migration with 4 full days to spare. Because we were prepared for the worst possible case, the entire team looked really good when we were able to pull it off successfully. I&rsquo;m glad it didn&rsquo;t end up going the other way and it just goes to show that there is always a small unknown factor that could change the amount of time taken for a migration to complete successfully.\nIt is usually a good idea to perform some test migrations using mailboxes that accurately represent those found in your environment. Using data from those migrations will go a long way to helping you predict your migration velocity. It is really handy to use some pilot user mailboxes for this because you will be able to perform multiple passes later on and not consume any additional licenses. MigrationWiz provides some guidance and a basic calculator here.\nThe results of the test migrations performed for this post are as follows:\n\n\n\n\n\nMigrationWiz\n\n\nDell On Demand\n\n\n\nDuration\n16 hrs, 23 min\n11 hrs, 0 min\n\n\nItems Processed\n26118\n26286\n\n\nErrors\n0\n13\n\n\n\nThe statistics above were taken from each migration tool. There are some discrepancies with the amount of items processed and the Dell tool reported some failures. Looking at the target mailbox used for the Dell On Demand migration, we see:\n\nMigrationWiz provides a whole bunch of information about the migration, including some detailed statistics:\n\nDell On Demand provides an overview of the migration with some detailed logging:\n\nI am perplexed by the large difference in migration duration. These migrations were run on random days of the week at roughly the same time so I&rsquo;m not sure if it is a coincidence or not. I might re-do the MigrationWiz one sometime and see if it changes the duration.\nReporting:\nMigrationWiz provides some nice charts at a mailbox level as well as some .csv reports at connector level for those who like to create their own reports in Excel.\n\nDell On Demand provides a summary and a migration details report which includes a .csv file containing all the errors that were encountered during the migration. The reports menu is &ldquo;conveniently&rdquo; hidden on the bottom right-hand side of the dashboard.\n\nDocumentation:\nMigrationWiz has heaps of useful documentation, the knowledgebase is located here: https://migrationwiz.zendesk.com/forums and it seems they are moving their content to a SharePoint based library located here: https://community.bittitan.com/kb/SitePages/Knowledge%20Base.aspx?product=MigrationWiz\nDell On Demand has a user guide which is published here: http://documents.software.dell.com/On%20Demand%20Migration%20for%20Email/1.6/User%20Guide/\nIn Summary:\nI think both are excellent tools which provide a wide range of options. Dell On Demand is targeted towards those organizations who are migrating to Microsoft Exchange while MigrationWiz supports other target platforms, like the ability to archive to Amazon S3. MigrationWiz has also recently added the ability to perform Public Folder and Storage migrations. Dell On Demand appears to have outperformed MigrationWiz when it comes to migration velocity, however I do find the MigrationWiz documentation to be superior.\n",
      tags: [],
      id: 64
    });
    

    index.add({
      title: "How to perform a manual synchronisation with AADSync",
      category: null,
      content: "I recently posted about the preview (CTP) of Azure Active Directory Sync Services (AADSync). There are a number of differences between AAADSync and DirSync, one of these being that the &ldquo;DirSyncConfigShell.psc1&rdquo; shell previously used to perform a manual synchronisation is not longer available. Instead, we can now use &ldquo;DirSyncClientCmd.exe&rdquo; which is located in &ldquo;C:\\Program Files (x86)\\Windows Azure AD Connection&rdquo;\n\nThe syntax is really straightforward, you can perform either an &ldquo;initial&rsquo; or &ldquo;delta&rdquo; synchronisation, e.g:\n[shell]DirSyncClientCmd delta[/shell]\n\n",
      tags: [],
      id: 65
    });
    

    index.add({
      title: "Using AD FS &ldquo;Alternate Login ID&rdquo; with Office 365",
      category: null,
      content: "As Office 365 adoption continues to grow and more organisations are starting to take advantage of identity federation. One of the most common issues I&rsquo;ve seen over the last couple of years when helping my clients adopt Office 365 services is the disconnect between user principal name (UPN), sAMAccountName (The user name typically used at logon) and the &lsquo;mail&rsquo; attribute in Active Directory. There are many reasons for this and I won&rsquo;t go into that in this post, but it is quite common to see one of the following scenarios:\n\nsAMAccountName = JSmith, UPN = JSmith@internal.local, Mail = John.Smith@domain.com\nsAMAccountName = ID123456, UPN = ID123456@internal.local, Mail = John.Smith@domain.com &ndash; I&rsquo;ve seen this scenario quite often when working with .gov and .edu clients.\n\nIn the past, the typical recommendation is to add the public domain to the UPN suffix list and change the UPN for each user to match their email address. This causes much less confusion for end users as you won&rsquo;t need to try and explain the different between their UPN and their email address even though they both appear to be the same.\n*Update: I'd like to call out that implementing \"Alternate Login ID\" with an Exchange Hybrid deployment is not a good idea. Microsoft has the following warning posted on the TechNet wiki.\n\nThe April 2014 Windows Server 2012 R2 Update (KB 2919355) includes a new feature called &ldquo;Alternate Login ID&rdquo; which will allow you to configure an alternate attribute to be used to identify a user object in Active Directory. In other words, you can now use a different attribute, for example &lsquo;mail&rsquo; during login instead of UPN.\nThis is great news for those organisations who use of employee ID or payroll numbers as their domain user names. As always, there are a few things to consider. In order for the authentication request to succeed, the attribute configured as the alternate login ID must satisfy the following requirements:\n\nThe attribute must be indexed.\nThe attribute must be in the global catalog.\nThe attribute must be a well-formed SMTP address and conform to the UPN rules outlined here.\nThe attribute must have a single value.\nThe CanonicalName attribute on the user object must be accessible to the service account that is used for AD FS.\nThe value of the alternate login ID attribute must be unique across all the forests that AD FS is configured to use when enabling this feature.\n\nThe configuration process is really simple as well, for example let&rsquo;s assume we already have AD FS 3.0 implemented with Office 365. My test environment is configured as follows:\n\nInternal AD domain name: lab365.com.au &ndash; NOT configured in Office 365\nPublic (SMTP) domain name: o365testlab.com &ndash; This domain is also configured in Office 365\nsAMAccountName = ID123456, UPN = ID123456@lab365.com.au, Mail = John.Smith@o365testlab.com\n\nWe would like to allow our users to log in using their email addresses (&lsquo;mail&rsquo; attribute) instead of their UPN.\n\n\nIt is important to note that if you are not using a routable UPN suffix, you will most likely want to pre-configure the correct SMTP and SIP addresses for your user accounts before you synchronise them. This can be done via the &ldquo;proxyAddresses&rdquo; attribute of the user account:\n\nOnce the user has been synchronised to Azure AD and assigned the relevant licenses in Office 365 it should look something like:\n\nTo configure AD FS, the first thing to do is install the April 2014 Windows Server 2012 R2 Update (KB 2919355), this can easily be done via Windows Update:\n\nWarning: There is a known issue with the April 2014 Windows Server 2012 R2 Update (KB 2919355) that may effect you if you are using Windows Server Update Services. Be sure to read KB 2959977 before installing this update in your environment. As always, planning and testing is very important!\nNext, update the AD FS configuration by running the following PowerShell cmdlet on any of the federation servers in your farm, starting with the primary AD FS server in your farm, obviously you would need to adjust the &ldquo;AlternateLoginID&rdquo; and &ldquo;LookupForests&rdquo; parameters to suite your particular requirements:\n[powershell]Set-AdfsClaimsProviderTrust -TargetIdentifier \"AD AUTHORITY\" -AlternateLoginID mail -LookupForests lab365.com.au[/powershell]\nNext, we need to update one of our AD FS claims rules. We locate the &ldquo;Microsoft Office 365 Identity Platform&rdquo; relying party trust and edit issuance transform rule number 1:\n\nThe new rule should look like this:\n\nLastly, we need to update our DirSync attribute flow to ensure the correct attribute is synchronised. Run the miisclient.exe which can be located in \"C:\\Program Files\\Windows Azure Active Directory Sync\\SYNCBUS\\Synchronization Service\\UIShell&rdquo;. Select the &ldquo;Management Agents&rdquo; tab, right-click to view the properties of &ldquo;Active Directory Connector&rdquo;. Under &ldquo;Configure Attribute Flow&rdquo;, expand &ldquo;Object Type: user&rdquo; and find the &ldquo;Data Source Attribute&rdquo; of &ldquo;,sAMAccountName,userPrincipalName&rdquo;. To edit it:\n\nChange the &ldquo;Mapping Type&rdquo; from &ldquo;Advanced&rdquo; to &ldquo;Direct&rdquo;\nSelect the appropriate attribute (&ldquo;mail&rdquo; in my case) as the &ldquo;Data source attribute&rdquo;.\n\nEnsure that the &ldquo;Metaverse attribute&rdquo; is set to &ldquo;userPrincipalName&rdquo; and click &ldquo;Edit&rdquo; and then &ldquo;OK&rdquo; to save your changes.\n\nOnce you have completed a successful synchronisation, you will be able to log into the Office 365 portal using your email address as login attribute.\n\n\nI&rsquo;d like to conclude this post with the following.. just because something is possible, it doesn't mean it should be done. Unless you have a very specific requirements and/or constraints, I would recommend using UPN as your login attribute even if this means having to go through the process of changing all your user UPNs. In most environments this change will have little or no effect on other systems and may be the best approach.\nFor more information on Alternate Login ID, see:\n\nConfiguring Alternate Login ID\nUsing Alternate Login IDs with Azure Active Directory\n\n",
      tags: [],
      id: 66
    });
    

    index.add({
      title: "Azure Active Directory Sync Services - Kicking the &ldquo;AADSync&rdquo; tyres",
      category: null,
      content: "Windows Azure Active Directory Sync (DirSync) has become synonymous with Office 365 in recent years and while DirSync isn&rsquo;t a requirement, I haven&rsquo;t seen any organisations consuming Office 365 services without it. In simple terms, DirSync can be used to synchronise local Active Directory objects to a Windows Azure Active Directory instance which is in turn leveraged by Office 365. After an initial synchronisation, DirSync runs on a schedule (typically, every three hours) to synchronise changes from the on-premises directory to the cloud instance.\nThe recent addition of password synchronisation to DirSync has made it even more useful and has been one of the many improvements to the tool (initially 32bit only!) which was released a few years ago. Unfortunately, DirSync still has some limitations especially when it comes to multi-forest scenarios. To help address the complexities associated with multi-forest&nbsp; environments, Microsoft recently announced Azure Active Directory Sync Services (AADSync) which is currently in preview. AADSync is intended to significantly simplify the configuration required to synchronise multi-forest&nbsp; environments.\nI thought I&rsquo;d take AADSync for a test drive and see what it is all about. At this point I should also mention that it is currently a preview (CTP) release and is not supported in production environments. There preview also has a few limitations:\n\nAADSync preview can only use SQL Express LocalDB.\nPasswordSync and password write-back are not currently supported.\nHybrid Exchange configuration is not currently supported.\n\nThe pre-requisites are really simple, you will need the following installed on Windows Server 2008, 2008 R2, 2012 or 2012 R2:\n\n.NET 3.5 and .NET 4.5.\nPowerShell 3.0.\n\nThe installer will automatically install the Microsoft Online Services Sign-In Assistant (msoidcli_64) which is really convenient as you can now be confident you will have the correct version installed.\nAs previously mentioned, this is a preview release and therefore the installation wizard is not yet strongly signed. It is therefore important that strong name signing is turned off on the server. The AADSync tool will NOT run if you do not perform this step, instead you will receive the following &ldquo;DirectorySyncTool has stopped working&rdquo; error with &ldquo;Problem Event Name: APPCRASH&rdquo;\n\nTo turn off strong name signing, simply use the included &ldquo;sn.exe&rdquo; utility and issue the following command:\n[shell]sn -Vr *[/shell]\n\nFor more information about strong name signing and the sn.exe utility, see the following links:\n\nStrong-Named Assemblies\nSn.exe (Strong Name Tool)\n\nThe installation process is pretty simple as one would expect, before starting the process it is helpful to have the following information to hand:\n\nService account in AD (default read permissions will be sufficient)\nAn Azure Active Directory tenant (Office 365 for example)\nService account in your Azure AD (Global Administrator role required)\n\n\n\nYou will notice the option to add multiple forests. For more information about the multi-forest scenarios supported, see AADSync Scenario Overview. If you configure AADSync to join multiple forests, the default configuration will assume the following:\n\nA user will have only one enabled user account and login information is taken from this forest.\nA user will have only one Exchange mailbox.\nThe data quality for a user is best in the forest where Exchange is located.\nIf an Exchange mailbox is found, common user attributes are taken from this forest.\n\n\nYou can configure join rules which map to the supported scenarios mentioned above. In a single forest scenario, the default selection will create all users as individual objects in Azure AD and objects will not join in the metaverse. You also have the option to select the immutable attribute. It is important to note that the attribute selected must not change during the lifetime of the object, even if the object is moved between domains in a forest or between forests. If you are unsure, you are probably better off not changing the default selection.\n\n\n\n\nOnce completed, it successfully synchronised the 3000 accounts in my lab AD in about 25mins. The &ldquo;DirSyncConfigShell.psc1&rdquo; shell is not longer available and seems to have been replaced by &ldquo;DirectorySyncClientCmd.exe&rdquo;. I noticed a new PowerShell module which is great. \n[powershell]Get-Command -Module PowerShellConfig[/powershell]\n\n[powershell]Get-SynchronizationRule | Select Name, Direction[/powershell]\n\nI also noticed a new &ldquo;Synchronization Rules Editor&rdquo;\n\nMany of these configuration options are probably best left at their defaults unless you have a specific requirement or scenario. I expect to see more documentation become available closer to or at release, but in the meantime you can find the current official documentation here.\n",
      tags: [],
      id: 67
    });
    

    index.add({
      title: "Lync for Mac 2011 &ndash; &ldquo;Lync was unable to sign in..&rdquo;",
      category: null,
      content: "##Update##\nSince writing the post, I have been able to obtain a copy of the hotfix described in KB2926055 and I can confirm that it does fix this issue.\nI recently came across an interesting issue when attempting to log into Lync Online using Lync for Mac 2011. This was a newly installed an updated version of Lync for Mac 2011, version 14.0.7 (131205) to be exact. At first I thought I&rsquo;d made a typo with my password but after a couple of attempts I knew something else was wrong. I tried a couple of other Lync accounts and still kept receiving the &ldquo;Lync was unable to sign in. Please verify your logon credentials and try again. If the problem continues, please contact your support team.&rdquo; error message.\n\nI tried using manual server configuration as suggested in the &ldquo;Troubleshoot sign in issues with Lync for Mac 2011 in Lync Online&rdquo; article, but that didn&rsquo;t make any difference either. I then tried using a different Mac with Lync for Mac version 14.0.6 and that one was able to log in without any issues. After digging into the client logs, we saw the following entry:\n04/08/2014|20:48:55.286 25A:B0115000 WARN&nbsp; :: GetNewWebTicket: \"Got new web ticket already expired: Current time=1396954135, expire time=0\"\nIt seems Lync for Mac 2011 tries to use a web ticket that is expired. After a bit of searching around, we found Article ID: 2927775 &ldquo;Can't sign in or see contact pictures in Lync for Mac 2011 when system time zone is set to UTC+8 or an earlier time zone&rdquo; which exactly describes the issue which occurs because Lync for Mac 2011 calculates the expiration time of a web ticket based on an incorrect time zone.&nbsp; I was able to confirm this by changing my time zone settings which resulted in my client immediately being able to log in.\n\nOnce you have successfully logged in, you can change your time zone back to the correct configuration and you will still be able to log in. Unfortunately, this workaround does not persist across reboots or hibernations.\nArticle ID: 2926055 &ldquo;Description of the Microsoft Lync for Mac 2011 14.0.7 hotfix&rdquo; describes a hotfix that should resolve this issue, unfortunately you need to contact Microsoft Customer Support Services to obtain this hotfix and I haven&rsquo;t been able to obtain it yet. I have logged the appropriate service request and will update this post once I have tested it.\nWith the correct DNS configuration, I haven&rsquo;t found the need to use manual server configuration as suggested in numerous support articles. I find that the default configuration works just fine.\n\nI also wanted to thank for my colleague, Lync MCM Aidan Freeman for helping me troubleshoot this issue.\n",
      tags: [],
      id: 68
    });
    

    index.add({
      title: "Warning added to Exchange 2013 SP1 description page",
      category: null,
      content: "Yesterday I wrote a post noting the lack of any warning on the Exchange 2013 SP1 download or description page about the bug that affects environments that make use of third-party or custom-developed transport agents. Tony Redmond also published a similar post on windowsitpro.com. I noticed earlier today that Microsoft have updated the relevant page with a note to acknowledging the bug:\n\nThanks Tony Redmond and Microsoft for making that happen! My comments about thorough planning and testing before deploying SP1 in your production environment still apply!\n",
      tags: [],
      id: 69
    });
    

    index.add({
      title: "Step away from that Exchange 2013 SP1 update!",
      category: null,
      content: "The Exchange Team announced the release of Exchange 2013 SP1 in late Feb and while SP1 introduced some great new features and functionality like Windows Server 2012 R2 support, it didn&rsquo;t take long for customers to start reporting transport issues after the update. To their credit, Microsoft responded quickly to address these issues and released KB 2938053. The issue affected environments that make use of third-party or custom-developed transport agents, typically in the form of anti-virus or disclaimer software.\nAll good then? Well, yes and no.. If you were affected by the issue you can now download the relevant PowerShell script that corrects a formatting error in the configuration files that govern the transport extensibility built into Exchange Server 2013 and issue will be resolved. If you are about to update your Exchange 2013 environment to SP1 you should note that this fix has not been included in the SP1 download and a permanent fix for this will only be delivered in Exchange Server 2013 CU5. There also doesn&rsquo;t appear to be any warning about this issue on the any of the SP1 pages on the Microsoft website so if you make use of any third-party software or custom-developed transport agents you will break your Exchange environment if you apple the SP1 update. \nIt is important to be aware of any applications running on your Exchange servers that may be making use of transport extensibility and as always I recommend thorough planning and testing before deploying SP1 in your production environment. \nFor more information about the issue, see KB 2938053\nTony Redmond has also written a great, in-depth article about this on windowsitpro.com\n",
      tags: [],
      id: 70
    });
    

    index.add({
      title: "How to find Office 365 Support Phone Number",
      category: null,
      content: "Every now and then I have a need to contact Office 365 support in order to help a customer resolve a particular issue. Logging a support request is easily done via the &ldquo;Support&rdquo; menu in the Office 365 admin portal, however it usually takes me a while to find a a contact telephone number for Office 365 support. The support engineers always have phone numbers listed in their email signatures, however these are rarely local numbers.\nEarlier today, I was once again in a position where I needed to call Office 365 support and since I had to call from my mobile phone, an international number just wasn&rsquo;t going to work. I finally found this link buried in some support documentation and thought I would post it here in order to help someone else out and spare myself the effort next time I need it.\nhttp://virtualchat.support.microsoft.com/client/default.aspx?siteid=32ECF580-B446-44E5-8B4D-25F0AFE07779&amp;scope=S&amp;query=Support%20phone%20number\n\n",
      tags: [],
      id: 71
    });
    

    index.add({
      title: "I&rsquo;ll be at MEC 2014 #IAMMEC",
      category: null,
      content: "Only a couple of months to go before the Microsoft Exchange Conference 2014 (MEC) in Austin (March 31 - April 2). I&rsquo;ll be attending and I am really looking forward to catching up with everyone in the community. This event truly is worth getting to - I'll prove it, I'm travelling from Australia! The first 100 sessions have already been posted here. For more info, check out http://www.iammec.com/\n\nLet me know if you are also planning to attend, it would be great to catch up!\n",
      tags: [],
      id: 72
    });
    

    index.add({
      title: "Configure Mailbox Regional Settings",
      category: null,
      content: "I recently completed a small migration for a customer using the MigrationWiz online migration tools. This wasn&rsquo;t the first time I&rsquo;ve used these tools, but it was the first time I&rsquo;ve actually provisioned new destination mailboxes myself. I used PowerShell with a .csv file as input to automate the process of creating each mailbox, granting the correct level of access to the migration account as well as performing a few other tasks that were relevant to the particular migration.\nOnce I started the migration I was confused for a second when I received the following error message: &ldquo;Connection did not succeed. Try again later.&rdquo; The associated MigrationWiz knowledgebase article contained a few suggestions, but none of them applied to my particular situation. When trying to log into one of the test mailboxes, I noticed that it asked me to set my preferred language and time zone.. which is expected:\n\nOnce I had set these, I was able to connect and migrate data to that mailbox as expected. Obviously, I didn&rsquo;t want to manually configure these settings for each mailbox and was able to use PowerShell and the Set-MailboxRegionalConfiguration cmdlet to do this for all the relevant mailboxes. Here is a very simple script that will use a .csv as input and set the regional settings for all aliases. It can easily be modified to use some other input too:\n[powershell]#The users.csv should contain a Alias colum, eg\n#Name,Alias,Email,Whatever\n$Users = Import-Csv .\\users.csv\nForeach ($User in $Users){\n   $Alias = $User.Alias\n   $Language = \"en-NZ\"\n   $DateFormat = \"d/MM/yyyy\"\n   $TimeFormat = \"h:mm tt\"\n   $TimeZone = \"New Zealand Standard Time\"\n   Set-MailboxRegionalConfiguration -Identity $Alias -Language $Language -DateFormat $DateFormat -TimeFormat $TimeFormat -TimeZone $TimeZone\n}[/powershell]\nThe easiest way to find your desired settings it to look at a correctly set mailbox using the Get-MailboxRegionalConfiguration cmdlet:\n\n",
      tags: [],
      id: 73
    });
    

    index.add({
      title: "Office 365 Fast Track Network Analysis",
      category: null,
      content: "Back in 2011 I posted about the Microsoft Online Services Internet Connection Performance Test which was a tool that helped measure response times, bandwidth, and overall connection quality in preparation for consuming Microsoft Online services. The tool disappeared without warning after a while and was never replaced. A few months ago now it seems a new tool was made available, however I seem to have missed the announcement and only recently came across it. The Office 365 Fast Track Network Analysis tool is a similar web based tool that performs various connectivity tests and presents the results in a easy to read report. It looks very similar to the old speedtest.microsoftonline.com tool, but performs a few more tests:\n\nTo access the tool, simply visit the URL appropriate to your region:\n\nFor North America use: http://na1-fasttrack.cloudapp.net/\nFor Asia Pacific use: http://ap1-fasttrack.cloudapp.net\nFor Europe, Middle East and Africa use: http://em1-fasttrack.cloudapp.net/ \n\n",
      tags: [],
      id: 74
    });
    

    index.add({
      title: "Migrate Legacy Public Folders to Exchange Online &ndash; Part 2",
      category: null,
      content: "In part 1 we briefly looked at the architectural changes made to modern public folders in Exchange 2013 as well as some of the things to you may want to consider as you prepare to migrate you public folders to Exchange Online. In this post we will step through the actual migration process in detail.\nLet&rsquo;s firstly take a look at the migration scripts. I typically place all these scripts in the same folder, c:\\pfmigration for example. You should have the following scripts downloaded:\n\nExport-PublicFolderStatistics.ps1 - This script creates a .csv file that contains a folder name-to-folder size mapping.\nPublicFolderToMailboxMapGenerator.ps1 - This script uses the mapping file to create a public folder-to-mailbox mapping file which is also a .csv file.\nExport-MailPublicFoldersForMigration.ps1 - This script exports the mail-enabled public folder objects from the on-premises organization&rsquo;s Active Directory into a .xml file.\nImport-MailPublicFoldersForMigration.ps1 - This script imports the mail-enabled public folder objects into Exchange Online.\n\nNote: These scripts also have support files with a .psd1 extension, it is important that these support files are placed in the same folder.\nBefore starting the migration process, you should confirm that there are no existing public folder migration requests in Exchange Online. These would need to be removed before you can continue, but it is important to first understand why there are already there before removing them. You can easily see if there are any existing request by running the following cmdlet in Exchange Online:\nGet-PublicFolderMigrationRequest | Get-PublicFolderMigrationRequestStatistics -IncludeReport | Format-List\n\nThe first step in the migration process is to ensure that mail-flow to mail-enabled public folders will continue to work. The steps required to do this will depend on your configuration. If you already have an Exchange Hybrid configured (as I do), you will most likely not need to do anything as the Hybrid Configuration Wizard will take care of this step.\nNext it is time to start using the migration scripts. We start with the Export-PublicFolderStatistics.ps1 script to create our name-to-folder size mapping file. This script is run on the legacy public folder server:\nExport-PublicFolderStatistics.ps1&nbsp;  \n\nOnce we have our size mapping file, we can run the PublicFolderToMailboxMapGenerator.ps1 script to create the public folder-to-mailbox mapping file which is used to calculate the correct number of public folder mailboxes that will be required in Exchange Online. This script is run on the legacy public folder server:\nPublicFolderToMailboxMapGenerator.ps1   \n\n\nNote: The  parameter is used to size your public folder mailboxes in Exchange Online. In my example I have used 10 GB (or there about!) Public folders in Exchange Online can be a maximum of 50 GB, however I would recommend leaving enough room for growth. \nI was having a discussion with a colleague of mine last week about public folder migration, more specifically how to selectively migrate only certain public folders. In the interest of full disclosure, I have not tested this (yet!), but in theory it should work. If you were to edit the size mapping file in Excel, you will notice that it contains two columns: &lsquo;FolderName&rsquo; and &lsquo;FolderSize&rsquo;. Remove all the entries for folders that you don&rsquo;t want to migrate before running the PublicFolderToMailboxMapGenerator.ps1 script and complete the rest of the process as documented. If you have tried this and have some feedback, let me know. I hope to be able to test it soon.\nMoving on.. once we have our mapping files created, we should export our mail enabled public folders on our legacy public folder server:\nExport-MailPublicFoldersForMigration.ps1 \n\n\nNext, we can connect to Exchange Online and create our new public folder mailboxes. The first public folder mailbox that is created will be the primary hierarchy mailbox and it must be created in &lsquo;HoldForMigration mode&rsquo;. This public folder mailbox should also be excluded from the serving hierarchy so that the public folders won&rsquo;t be available to Exchange Online users.\nNew-Mailbox -PublicFolder  -HoldForMigration:$true -IsExcludedFromServingHierarchy:$true\n\nWe should also import our mail enabled public folders:\nImport-MailPublicFoldersForMigration.ps1 \n\n\nWe are now ready to submit the migration request, but before we do, let&rsquo;s gather all the required information for the New-PublicFolderMigrationRequest cmdlet:\nFirst we need our Outlook Anywhere hostname and authentication method:\nGet-OutlookAnywhere | Format-List Identity, ExternalHostName, IISAuthenticationMethods\n\nWe also need the LegacyExchangeDN of the administrator mailbox:\nGet-Mailbox  | Format-Table LegacyExchangeDN\n\nLastly, we need the ExchangeLegacyDN of the legacy public folder server:\nGet-ExchangeServer &ndash;Identity  | Format-Table ExchangeLegacyDN\n\n\nGiven the length of the cmdlet and parameters, I recommend using variables. Using the information we have gathered, we can easily do this:\n$OAHostname = \n$Csv = Get-Content c:\\PFMigration\\pf2mbx.csv -Encoding Byte\n$OnPremCred = Get-Credential\n$Rmldn = \n$Rpfsldn = \n\nWe can then run the New-PublicFolderMigrationRequest cmdlet using these variables. You&rsquo;ll know that the command started successfully when the migration request reaches a status of &lsquo;Queued&rsquo; or &lsquo;InProgress&rsquo;:\nNew-PublicFolderMigrationRequest -OutlookAnywhereHostName $OAHostName -CSVData $Csv -RemoteCredential $OnPremCred -RemoteMailboxLegacyDN $Rmldn -RemoteMailboxServerLegacyDN $Rpfsldn -AuthenticationMethod \n\n\nOnce the migration request kicks off it will copy the public folder data and will continue running until it reaches 95% at which point it will auto suspend the request. We can monitor the progress using the Get-PublicFolderMigrationRequest and Get-PublicFolderMigrationRequestStatistics cmdlets:\nGet-PublicFolderMigrationRequest | Get-PublicFolderMigrationRequestStatistics -IncludeReport | Format-List Status, SourceServer, SourceVersion, BytesTransferred, ItemsTransferred, PercentComplete, Message\n\n\nIn order to complete the migration request, we need to arrange downtime or a service outage as there will be period while the last bit of data is transferred where public folders will be unavailable to end users. The amount of downtime depends on how much new content has been generated since the migration was suspended. In large environments with a lot of changing content, I would recommend running the Resume-PublicFolderMigrationRequest cmdlet. This cmdlet can be run as often as required and will merely copy any new content and auto suspend at 95%, this will reduce the amount of downtime required.\nOnce we have scheduled a service outage and informed out end users, we need to lock the legacy public folder environment in order to prevent any further changes:\nSet-OrganizationConfig &ndash;PublicFoldersLockedForMigration $true\n\n\nNext we need to allow the migration request to complete, we do this by removing &lsquo;PreventCompletion&rsquo;:\nGet-PublicFolderMigrationRequest | Set-PublicFolderMigrationRequest -PreventCompletion $false\n\nWe can now resume the migration request and this time it will run through to completion and not auto suspend at 95%:\nGet-PublicFolderMigrationRequest | Resume-PublicFolderMigrationRequest\n\nWe monitor the request as before to verify that it has completed successfully:\nGet-PublicFolderMigrationRequest | Get-PublicFolderMigrationRequestStatistics -IncludeReport | Format-List Status, SourceServer, SourceVersion, BytesTransferred, ItemsTransferred, PercentComplete, Message\n\nOnce we are happy that the migration has completed successfully, we allow the hierarchy to be served:\nGet-Mailbox -PublicFolder | Set-Mailbox -PublicFolder -IsExcludedFromServingHierarchy $false\n\n\nThe final set in the process is to set the migration as complete in the legacy environment:\nSet-OrganizationConfig -PublicFolderMigrationComplete $true\n\nIt is possible to roll back the migration, however I would like to mention a few really important points about rolling back:\n\nThe roll back process will not copy any changed data back to the legacy environment, this should be considered when deciding to roll back. It would be a really bad idea to try and roll back a change heavy environment after 3 weeks.\nRoll back will obviously require the original public folder databases to be online, I therefore recommend dismounting these for a period of time after the migration just in case you need them. This process is a lot more difficult if you delete the databases and then try and roll back.\n\nFor more information on the migration process, see the following article on TechNet:\n\nMigrate Legacy Public Folders to Exchange Online\n\n",
      tags: [],
      id: 75
    });
    

    index.add({
      title: "Migrate Legacy Public Folders to Exchange Online &ndash; Part 1",
      category: null,
      content: "I&rsquo;ve been meaning to get this series published for some time now. I can&rsquo;t believe it is almost 2 months since TechEd Australia 2013! During my session, I briefly covered modern public folders and how to migrate them to Exchange Online. My aim is to build on that session with a couple of posts that run through the entire process of migrating legacy public folders to Exchange Online. This first post will provide an overview of modern public folder architecture as well as some of the planning and preparation required prior to the migration.\nI&rsquo;m sure by now everyone is aware that in Exchange 2013 public folders were re-engineered using mailbox infrastructure to take advantage of the existing high availability and storage technologies of the mailbox database. Public folder architecture uses specially designed mailboxes to store both the public folder hierarchy and content. This also means that there is no longer a public folder database and high availability for the public folder mailboxes is provided by a DAG. Let&rsquo;s briefly look at the new architecture:\nThe main component of public folders are the public folder mailboxes, which can reside in one or more mailbox databases. Public folder mailboxes can be either &lsquo;Primary&rsquo; or &lsquo;Secondary&rsquo;. The primary hierarchy mailbox is the 1 writable copy of the public folder hierarchy. The public folder hierarchy is copied to all other public folder mailboxes, but these secondary copies are read-only copies. The public folder hierarchy contains the folders&rsquo; properties, organizational information and tree structure. Public folder content can include email messages, posts, documents, and eForms. The content is stored in the public folder mailbox but isn&rsquo;t replicated across multiple public folders mailboxes. All users access the same public folder mailbox for the same set of content. \n&nbsp;\n\nBecause there is only 1 writable copy of the hierarchy, it is necessary to synchronize changes to other mailboxes when they are made. Hierarchy synchronization takes place as follows (as illustrated in the diagram above):\n\nLet&rsquo;s say for example a client connects to a secondary public folder mailbox to access content (Folder 5) and\nThen that client creates a new public folder (Folder 6 in the example)\nThe request will be proxied to the primary public folder mailbox where it is written to public folder hierarchy\nPublic folder hierarchy synchronisation is triggered immediately to content mailbox\nThe public folder hierarchy is updated on all public folder mailboxes. This takes place after 15 mins for mailboxes with connected users and after 24 hrs for mailboxes with no connected users.\n\nIn order to move legacy public folders to Exchange Online, you need at least Exchange 2007 SP3 RU1 or Exchange 2010 SP3 and there are a few other considerations you may want to take note of:\n\nThere is no coexistence between legacy and modern public folders, the migration is a all at once &lsquo;cutover&rsquo; migration\nAll mailboxes must be on Exchange 2013 and/or Exchange Online prior to migration\nMigrations are PowerShell based using scripts, there is no migration wizard or GUI\nWhile a Exchange Hybrid Deployment is not required, it does make things easier as you do not have to manually configure message routing for mail-enabled public folders\nPublic folders are migrated using Outlook Anywhere, therefore Outlook Anywhere must be published to the internet and enabled on all legacy public folder servers\nEWS clients such as Entourage 2008 EWS Edition and Outlook for Mac 2011 with mailboxes on Exchange 2013 will not be able to access legacy public folders\nPublic folders that include a Backslash (&ldquo;\\&rdquo;) in their names are not supported\n\nYou should also ensure that you have the correct permissions:\n\nIn Exchange Online, you need to be a member of the &lsquo;Organization Management&rsquo; role group\nIn Exchange 2010, you need to be a member of the &lsquo;Organization Management&rsquo; or &lsquo;Server Management&rsquo; RBAC role groups.\nIn Exchange 2007, you need to be assigned the &lsquo;Exchange Organization Administrator&rsquo; role or the &lsquo;Exchange Server Administrator&lsquo; role. You should also be assigned the &lsquo;Public Folder Administrator&rsquo; role and local Administrators group for the target server.\n\nAs previously mentioned, the migration is done via PowerShell. There are a few scripts that should be downloaded, these will be used during the various stages of the migration. Be sure to download the following:\n\nMicrosoft Exchange 2013 Public Folders Migration Scripts\nMicrosoft Exchange 2013 Public Folders Directory Sync Support Scripts\n\nFinally, when preparing for a public folder migration to Exchange Online, I would highly recommend that public folders are first analyzed and classified. It is not uncommon to see public folder structures that were implemented in the early days of Exchange more than 10 years ago and are now no more than a dumping ground for old data. Often these hierarchies where designed to match an organization structure or meet business requirements that no longer exist. Exchange has come a long way since then and by taking a good look at your public folder use cases, you may find that there are better and more efficient ways to do things today.\nIn part 2 we&rsquo;ll will run through the migration process.\n",
      tags: [],
      id: 76
    });
    

    index.add({
      title: "My Session at TechEd Australia 2013",
      category: null,
      content: "In case you missed my session at TechEd Australia last week the session recording and slide deck is available on Channel 9 or by clicking here: http://cgoo.se/18TNT8Y\nI&rsquo;m currently working a series of posts about Public Folder migration to Exchange Online. I touched on it during the session, but will be publishing more details in the series so look out for it soon.\n",
      tags: [],
      id: 77
    });
    

    index.add({
      title: "Critical Security Bulletin for Exchange Server (MS13-061)",
      category: null,
      content: "##Update 30 Aug 2013##\nThe MS13-061 security update has been re-released for Exchange Server 2013, the download links below have been updated.\n##Update 15 Aug 2013##\nThe MS13-061 security update for Exchange Server 2013 has been pulled as it seems to cause an issue with the Content Index for mailbox databases. If you have already installed this update see KB2879739 for information on how to resolve this. This issue does not occur in Exchange 2010 or Exchange 2007.\nA few hours ago Microsoft released a critical security update for all supported editions of Microsoft Exchange Server 2007, 2010, and 2013. This security update addresses vulnerabilities that exist in the WebReady Document Viewing and Data Loss Prevention features of Exchange that could allow remote code execution in the security context of the transcoding service on the Exchange server if a user previews a specially crafted file using Outlook Web App. For detailed information, see Microsoft Security Bulletin MS13-061\nMicrosoft recommends that customers apply the update immediately. The update can be downloaded at the following links:\n\nUpdate Rollup 11 for Exchange Server 2007 SP3\nUpdate Rollup 7 for Exchange Server 2010 SP2\nUpdate Rollup 2 For Exchange 2010 SP3\nSecurity Update For Exchange Server 2013 CU1\nSecurity Update For Exchange Server 2013 CU2\n\n",
      tags: [],
      id: 78
    });
    

    index.add({
      title: "How to access Exchange Admin Center (EAC) in Exchange 2013 during coexistence",
      category: null,
      content: "Perhaps you are planning your on-premises upgrade to Exchange 2013 or you&rsquo;ve just introduced the first Exchange 2013 server into your existing Exchange 2010 environment. Welcome to coexistence! Hopefully by now you already know that the Exchange Admin Center (EAC) is the web-based management console in Microsoft Exchange Server 2013 and it replaces the Exchange Management Console (EMC) and the Exchange Control Panel (ECP), which were the two interfaces used to manage Exchange Server 2010.\nSo how do you access the EAC? Well.. if you had just installed a fresh new Exchange 2013 org you would simply navigate to /ecp\">https:///ecp in your browser. In a coexistence scenario however, doing that would redirect you to Exchange 2010 ECP and you would probably see something like this (once logged in):\n\nThe reason for this is that your mailbox is probably still located on an Exchange 2010 server. You now have two options:\n\n\nMove your mailbox to Exchange 2013 and try again, or\n\n\nUse the following URL: /ecp?ExchClientVer=15\">https:///ecp?ExchClientVer=15&nbsp;\n\n\nYou should now see the Exchange 2013 Admin Center which will look something like this:\n\nYou are now able to continue configuring Exchange 2013 via the EAC. \nRead more about the EAC here\n",
      tags: [],
      id: 79
    });
    

    index.add({
      title: "I&rsquo;ll be speaking at TechEd Australia 2013",
      category: null,
      content: "Mario Tevanian (Microsoft) and I will be presenting a &ldquo;Exchange 2013 Hybrid Deployments&rdquo; session at TechEd Australia 2013 (3-6 September, Gold Coast) The session will provide an overview of the complete range of migration options that are available when migrating to Exchange Online and discuss the new Exchange 2013 hybrid configuration wizard. Did you know that public folders are now supported in Exchange Online? Come and learn more about modern public folders and how to migrate them. In this session we also share some notes from the field and highlight the recommended approach and best practices you should consider as you plan to migrate your existing Exchange environment to Exchange Online. \nRoom and time slot details are not available yet, but I&rsquo;ll share them as soon as I know what they are. The session code is: EXL314. See you there! \n\n",
      tags: [],
      id: 80
    });
    

    index.add({
      title: "Reverse Proxy for Exchange Server 2013 using IIS ARR",
      category: null,
      content: "Microsoft Application Request Routing (ARR) is a proxy-based routing module for IIS that forwards HTTP requests to content servers based on HTTP headers, server variables, and load balance algorithms. After my recent posts on reverse proxy servers and Exchange Server I received a few emails about using ARR as a reverse proxy for Exchange Server. The Exchange Team recently released some guidance on how to achieve this on their blog for those of you who are interested in this setup, here is a link to the post.\n",
      tags: [],
      id: 81
    });
    

    index.add({
      title: "Exchange Server and the Reverse Proxy - Part 2",
      category: null,
      content: "In March this year I wrote a post entitled &ldquo;Exchange Server and the Reverse Proxy&rdquo;. I had many similar conversations with peers and customers about the topic, and at the time my intention was twofold:\n\nQuestion the &lsquo;old school&rsquo; notion that Exchange services published to the internet are only secure if a reverse proxy is used;\nProvide a high-level list of potentially suitable solutions for customers planning new deployments who felt they still needed a reverse proxy.\n\nI&rsquo;ve received many comments and emails about that post and have been planning to put together this follow-up for some time now so it was a happy coincidence when the ever entertaining (and deceptively brilliant!) Greg Taylor recently posted about the same topic on the Exchange Team blog. I&rsquo;m sure he won&rsquo;t mind me &lsquo;borrowing&rsquo; some of this content, it is not my intention to take anything out of context so feel free to read this entire post here. A couple of things that really stand out in his post are:\n&ldquo;Here are some interesting Exchange-related facts to help further cement the idea I&rsquo;m eventually going to get to.\n\nWe do not require traffic to be authenticated prior to hitting services in front of Exchange Online.\nWe do not do any form of pre-authentication of services in front of our corporate, on-premises messaging deployments either.\nWe have spent an awfully large amount of time as a company working on securing our code, writing secure code, testing our code for security, and understanding the threats that exist to our code. This is why we feel confident enough to do #1 and #2.\nWe have come to learn that adding layers of security often adds little additional security, but certainly lots of complexity.\nWe have invested in getting our policies right and monitoring our systems.&rdquo;\n\n\n&ldquo;Do I think everyone should throw out that TMG box they have today and go firewall commando? No. not at all. I think they should evaluate what it does for them, and, if they need it going forward. If they do that, and decide they still want pre-auth, then find something that can do it, when the time to replace TMG comes. \nYou could consider it a sliding scale, of choice. Something like this perhaps;&rdquo;\n\n\nThe recent release of Windows Server 2012 R2 Preview brings with it the new Web Application Proxy role. Web Application Proxy is a new Remote Access role service in Windows Server 2012 R2 Preview that provides reverse proxy functionality for web applications inside your corporate network to allow users on any device to access them from outside the corporate network. Web Application Proxy pre-authenticates access to web applications using Active Directory Federation Services (AD FS), and also functions as an AD FS proxy. My esteemed colleague Marc Terblanche has put together a couple of great posts on the Kloud Solutions blog about the Web Application Proxy role, check them out here:\n\nWindows 2012 R2 Preview Web Application Proxy &ndash; Exchange 2013 Publishing Tests\nPublish Lync 2013 with 2012 R2 Preview Web Application Proxy\n\nI also wanted to post an update on the Apache/mod_proxy solution I mentioned in my previous post. Free time (aka lab time) has become somewhat limited lately so I haven&rsquo;t been able iron out all the issues with the solution yet, but I recently came across an open source project that looks very promising. The guys at Vulture seem to have created exactly what I was trying to do in a much more elegant way. They&rsquo;ve put together a web application firewall using open source components like Apache and mod_security and have even added a configuration web gui to it. Vulture does pre-authentication using a number of authentication providers and also provides other features like load balancing. I have not tested it myself (yet!) but if this interests you, check it out here: http://www.vultureproject.org/ &ndash; The documentation is in French but seems to translate reasonably well..\n",
      tags: [],
      id: 82
    });
    

    index.add({
      title: "Exchange 2013 CU2 Released!",
      category: null,
      content: "Ross Smith IV announced the release of Exchange Server 2013 RTM Cumulative Update 2 (CU2) on the Exchange Team blog earlier today. \nIn addition to bug fixes, Exchange 2013 RTM CU2 introduces enhancements in the following areas:\n\nPer-server database support - increased from 50 to 100 databases \nOWA Redirection - adds single sign-on when FBA is used on source and target\nHigh Availability - introduces the new \"DAG Management Service\"\nImprovements to Managed Availability \nCmdlet Help - introduces Update-ExchangeHelp cmdlet to update local Shell help \nOWA Search Improvements \nMalware Filter Rules - introduces the &ndash;MalwareFilterRule cmdlets\n\nHe also announced that the Exchange Product Group is in the final validation stages to support Windows Azure for Witness Server placement. There has been much talk about leveraging Windows Azure for things like Witness Servers lately, so this is quite an exciting announcement for many organizations.\nExchange 2013 CU2 does include schema changes so I highly recommend reading the upgrading/deploying section before attempting to implement it. The download is available here.\n",
      tags: [],
      id: 83
    });
    

    index.add({
      title: "Remote Connectivity Analyzer&ndash;Message Analyzer",
      category: null,
      content: "If you often use the Remote Connectivity Analyzer tool (https://www.testexchangeconnectivity.com/) you may have noticed the &ldquo;Message Analyzer&rdquo; tab that was added recently. I noticed it a while back but never gave it much thought until I have troubleshooting&nbsp; a mail flow problem for a customer today so I thought I would write up this quick post about it.\nSMTP message headers contain a lot of valuable information about origins of a message and how it eventually made it to the intended destination. The Message Analyzer displays SMTP message header information in a easy to read format.\nTo use the Message Analyzer, simply copy the SMTP message header from a message and paste it into the tool:\n&nbsp;\n\nOnce you click &ldquo;Analyze headers&rdquo; the header information will be displayed in a table\n&nbsp;\n\n",
      tags: [],
      id: 84
    });
    

    index.add({
      title: "Sizing Exchange 2013 Deployments",
      category: null,
      content: "The Exchange Team recently released some great guidance on how to size Exchange 2013 deployments. I think this is a really comprehensive post and as expected, the guidance is in favour of multi-role deployments. There is no &ldquo;calculator&rdquo; spread sheet out yet, however we should see one released soon. Read the full post here\n",
      tags: [],
      id: 85
    });
    

    index.add({
      title: "Exchange 2013 CU1 Released!",
      category: null,
      content: "Following the release of Exchange 2010 SP3 in February, the Exchange Team have announced the release of Exchange Server 2013 Cumulative Update 1 (CU1). CU1 does include some new features, including *some* access Public Folder content through Outlook Web App but I think it is fair to say that legacy coexistence is the reason everyone has been waiting for CU1. CU1 is the minimum version of Exchange 2013 required for on-premises coexistence with supported legacy Exchange Server versions, but, before you steam ahead and install it I think it is important to understand all the caveats of coexistence so be sure to check out the Planning and Deployment documentation. Scott Schnoll put together a great post about the high availability changes in Exchange 2013 CU1 which is also worth reading.\nThe Exchange 2013 CU1 release notes are available here and you can download it here\n",
      tags: [],
      id: 86
    });
    

    index.add({
      title: "Exchange Server and the Reverse Proxy",
      category: null,
      content: "Ever since Microsoft announced that Forefront Threat Management Gateway (TMG) 2010 will be discontinued, I have had many customers ask me &ldquo;What should we use as a reverse proxy for Exchange?&rdquo;. This question has sparked many heated debates among colleagues and customers alike. To be fair, this announcement may have come as a huge shock to many people, but I think deep down many of us expected it to happen sooner or later.. TMG was a great product and really became the de facto standard for reverse proxying Exchange (and Lync, etc) and thinking back to all the Exchange deployments I have been involved with over the years, it is fair to say that most of them made use of ISA/TMG as a reverse proxy in some way. It worked well, but sadly all good things come to an end.\nSo, lets get back to the question.. &ldquo;What should we use as a reverse proxy for Exchange?&rdquo; I&rsquo;ve been thinking about this for a while and I don&rsquo;t believe there is a magical silver bullet solution that will work for everyone and I urge my customers to think it through and make an informed decision. Do you even need a reverse proxy for Exchange? This is where things get heated.. but hear me out.. there are those who have been talking about the death of the DMZ for some time now. I remember attending a Tech-Ed session back in 2008 where Steve Riley talked about this and Deb Shinder has also blogged about this topic in the past. I&rsquo;m not saying get rid of your firewall, but what I am saying is that perhaps you no longer need to use a reverse proxy to secure connections to your Exchange servers and this is something that should be thought about. My first response to the &ldquo;What should we use as a reverse proxy for Exchange?&rdquo; question is &ldquo;Do you still need a reverse proxy?&rdquo; and 99% of the time the answer I get back is &ldquo;Yes, because it is insecure not to&rdquo;. Perhaps it used to be, but is that statement still true? Every environment is different and every organisation has different needs and requirements. My intention with this post is to help you ask the right questions and make an informed decision.\nOne of the great things about being a consultant is that I get to work with many different types of customers and see many different types of environments and typically the decision to implement a reverse proxy is driven by one or both of the following factors:\n\nApplication Hardening - The concept of application hardening has been around for some time now and there is a lot of information floating around about it. The question we need to ask is: does Exchange (the CAS role in particular) need to be hardened? The reality is that times have changed and both Windows Server and Exchange have matured and are hardened by default. Exchange CAS was designed to be internet facing so there really is no need for a reverse proxy in order to secure it anymore. Sure, using a reverse proxy is useful if you wish to implement third party two factor authentication or have other very specific requirements, but will your Exchange implementation be less secure without one? probably not.\nSecurity Policy - Security policy is much more complex and as you would expect, these policies come in many flavours! One thing most of them have in common is that they restrict traffic from passing through an entire zone or prevent services on the internal network from being accessed directly from the internet, i.e traffic cannot pass directly through the DMZ to the internal network, and must first terminate in the DMZ. In the past, the solution was to implement ISA/TMG as a reverse proxy in the DMZ. We already know that Exchange does not need any further hardening, so technically there is no need for this, but while technology matures relatively quickly security policies rarely keep up so it is fairly common to have this type of out-dated policy that dictates the use of a reverse proxy. Sometimes the remnants of this type of security policy are still visible long after the policy has evolved &ndash; I did some work with a customer recently who had a policy like this in the past and over time as their network grew they made decisions based on this policy that have resulted in a few technical constraints that are now causing some headaches. Typically, these security policies are similar to the diagram below:\n\n\nThere is something else to consider and that is performance. Often due to the mission critical nature of DMZ infrastructure and its various dependencies, this infrastructure is not upgraded or refreshed as regularly as other infrastructure so you end up building on infrastructure that was never intended to deal with the load that is now being placed on it. A classic example of this is an environment I saw a while back &ndash; this particular organisation was in the process of refreshing their messaging platform and had just made a significant investment in a highly available Exchange environment only to go and use the ageing 32-bit only ISA 2006 infrastructure in their DMZ as a reverse proxy because connections to Exchange needed to be &ldquo;secured&rdquo;.\nSo what&rsquo;s answer then? Well.. I think it is important to first understand what your requirements are. Are you currently using TMG? why change? Mainstream support for TMG will continue into 2015 with extended support through 2020. Are you looking to implement a reverse proxy because you think it will make Exchange more secure? If so, perhaps you need to rethink your approach. Are you looking for a TMG replacement because your security policy dictates the use of a proxy server and you really have no choice in the matter? Here are three options:\n\nF5 BIG-IP Access Policy Manager (APM)&nbsp; - Many organisations have already invested in BIG-IP LTM devices to load balance Exchange. It makes sense to leverage this infrastructure, you&rsquo;ll have the added benefit of infrastructure consolidation if you move the reverse proxy functionality to your BIG-IP devices. More info here\nKEMP LoadMaster Edge Security Pack (ESP) - I have always been a big fan of the KEMP LoadMaster devices and KEMP is currently working on their Edge Security Pack which will help provide some TMG functionality and compliment their already excellent offering. These devices already provide excellent value for money and my understanding is that the ESP will be a free upgrade for most customers. ESP is not publically available yet but I think it is worth looking at. More info here\nApache HTTP Server with mod_proxy - No, your eyes are not deceiving you, it is possible to use apache as a reverse proxy. I am not making any claims about the supportability of the solution or saying that it is an enterprise ready option, and just because it is possible to do it does not mean you should. I have seen many attempts at this solution in the past so I am currently working on a post that will provide a guide on how to go about setting it all up as well as explain the limitations and pitfalls of the solution. I hope to post more about it soon.\n\nI&rsquo;m sure there are many other equally suitable solutions, but my intention was to mention some of the ones I have worked with or tested. Each of these also have different pricing and scalability options so they will appeal to a wide range of different organisations.\n",
      tags: [],
      id: 87
    });
    

    index.add({
      title: "iOS 6.1.2 Software Update - Fixes Exchange calendar bug",
      category: null,
      content: "Looks like Apple finally released an update to fit the exchange calendar bug\n&nbsp;\n\n",
      tags: [],
      id: 88
    });
    

    index.add({
      title: "Apple iOS 6.1 devices causing increased resource consumption in Exchange Server 2010",
      category: null,
      content: "Update: iOS 6.1.2 resolves this problem\nI have see a lot of reports lately about the Apple iOS 6.1 bug effecting organisations using Exchange 2010. The problem appears to occur when a user using a Apple device (iPad, iPhone, etc) with iOS 6.1 responds to or edits a single instance of a recurring calendar event, this causes excessive log growth and a significant increase in memory and CPU resource consumption in turn causing server performance to be affected. Both Microsoft and Apple have released support articles for this bug, but at the time of writing it has not been fixed.\nIf you do currently have a large iOS device fleet, I would suggest advising your users against upgrading their devices until this is resolved. If you are already experiencing resource problems on your Exchange servers, I strongly suggest using either a custom throttling policy for iOS 6.1 users or blocking iOS 6.1 users completely. For more information on these workarounds, see the following Microsoft support article.\n",
      tags: [],
      id: 89
    });
    

    index.add({
      title: "Exchange 2010 SP3 Released!",
      category: null,
      content: "A few moments ago the Microsoft Exchange Team announced the availability of Exchange 2010 SP3. I can&rsquo;t remember any other service pack that has been as eagerly anticipated as this one, mostly because SP3 will allow coexistence with Exchange 2013 which was released late last year. Unfortunately, it appears that customers wanting to introduce Exchange Server 2013 into their existing Exchange 2010 environment will have to wait just a little longer for the release of Exchange 2013 CU1, or at least that is how I interpret the following release note on the Exchange Team Blog:\nNOTE: Exchange 2010 SP3 allows Exchange 2010 servers to coexist with Exchange 2013 CU1, which is also scheduled to be released in Q1 2013. Customers can test and validate this update in a representative lab environment prior to rolling out in their production environments as an important coexistence preparatory step before introducing Exchange Server 2013 CU1.\n\nThis service pack also resolves numerous issues, a list of these can be found here.\nTo download Exchange 2010 SP3, click here.\n",
      tags: [],
      id: 90
    });
    

    index.add({
      title: "Exchange 2013 Server Role Architecture",
      category: null,
      content: "In case you missed it, the evolution of hardware has caused an architectural change in Exchange 2013.. gone are the 5 Exchange server roles that we have all come to know and love since Exchange 2007. In Exchange 2013 things are a lot more simple with only two server roles, namely, the Client Access server role and the Mailbox server role. Don&rsquo;t let the familiar names fool you though, there is nothing familiar about these roles. In Exchange Server 2013 there are two basic building blocks &ndash; the Client Access array and the Database Availability Group (DAG). Each provides a unit of high availability and fault tolerance that are decoupled from one another. Client Access servers make up the CAS array, while Mailbox servers comprise the DAG.\n\nRoss Smith did a great job (obviously!) of introducing the new Exchange 2013 role architecture during the technical keynote at MEC 2012 last year.. if you have not already seen it, I highly recommend you watch it here. He also recently publish the following post of the Exchange team blog that covers the same topic.\n",
      tags: [],
      id: 91
    });
    

    index.add({
      title: "Lync Online 2013 Remote PowerShell",
      category: null,
      content: "As we are all aware, the next wave of Office 365 is currently in preview and will be available soon. One of the expected (and long awaited) new features is the ability to administer Lync Online via PowerShell, this is something that is lacking in the current release. I was recently working with a customer who are preparing for to transition several thousand users to Lync Online and this got me curious about remote PowerShell and Lync Online 2013. Since there is no documentation available yet for the upcoming release, I thought I would share my initial findings.\nBefore I go any further I should mention that at the time of writing this I am testing with a Office 365 Preview tenant and as with all things still in development, it is possible (likely even) the the final release will behave differently. I also want the mention that remote PowerShell does not work with Lync Online on an Office 365 Preview tenant (see details below) so I am sharing this information purely for those who might be interested in how it may or could work in future &ndash; I will of course update this post once the next wave of Office 365 has been released.\nMy discovery came after I installed the Lync 2013 administrative tools on my laptop, I was browsing around the modules folder when I noticed it had installed a module called &ldquo;LyncOnlineConnector&rdquo; which is not imported by default.\n&nbsp;\n\n&nbsp;\nSo as any curious geek would, I thought I would play around a little.. I imported the module and took a look at the cmdlets available.\n&nbsp;\n\n&nbsp;\nOnce imported, the &ldquo;LyncOnlineConnector&rdquo; module contains a &ldquo;New-CsOnlineSession&rdquo; cmdlet which according to the help file is used to set up a remote session to Lync Online.\n&nbsp;\n\n&nbsp;\nIf you attempt to run the cmdlet, you receive the following error: \"Remote Windows PowerShell session creation is restricted by tenant Windows PowerShell policy\". This leads me to believe that remote PowerShell is currently restricted on Office 365 Preview tenants. \n",
      tags: [],
      id: 92
    });
    

    index.add({
      title: "How to check your Office 365 tenant version?",
      category: null,
      content: "Ever wondered what version of Exchange your tenant is provisioned on? Michael Van Horenbeeck has written quick post on how to determine this. I think this will be really handy in the near future so I wanted to share it. \nYou can check the version by issuing the following cmd via powershell:\nGet-OrganizationConfig | ft AdminDisplayVersion,IsUpgradingOrganization\n\nMichael has some great information in his post that can be found here so be sure to check it out.\n",
      tags: [],
      id: 93
    });
    

    index.add({
      title: "Exchange 2007 & 2010 problems after installing KB2506146 or KB2506143",
      category: null,
      content: "Microsoft recently released&nbsp;KB2506146&nbsp;and&nbsp;KB2506143&nbsp;as optional updates depending on your which server version you are running (2008 SP2 or 2008 R2 SP1)\nThe update includes&nbsp;Windows Management Framework 3.0 and more specifically PowerShell 3.0 which is not supported on either Exchange 2007 or Exchange 2010. There have been reports of it causing issues with the installation of rollups&nbsp;resulting in an error code of &ldquo;1603&rdquo; appearing in the event log.\nIt is recommended that&nbsp;Windows Management Framework 3.0 should not be installed on servers running either Exchange 2007 or Exchange 2010. Uninstalling&nbsp;Windows Management Framework 3.0 reportedly fixes the issues.\n",
      tags: [],
      id: 94
    });
    

    index.add({
      title: "Controlling ActiveSync device access on Exchange 2013",
      category: null,
      content: "I previously blogged about controlling ActiveSync device access on Exchange 2010 and Exchange Online and thought I would follow-up with quick post on how to accomplish the same results on Exchange 2013. For this post, I will create the same policy as before..&nbsp; a device policy to quarantine any iPad devices. The use case for this scenario is that an organisation may for example allow users to choose whatever mobile phone they would like to use but block the use of iPads because these are not devices issued by the company. By quarantining a device, we can easily see who is attempting to use such a device, how many are out there and even decide to create a new policy specific to these devices.\nTo create a device policy, we need to access the &ldquo;Mobile Device Access&rdquo; option under the &ldquo;Mobile&rdquo; menu item in EAC. It should look something like this:\n\nClicking the &ldquo;Edit&rdquo; button will allow you to edit various settings. As you can see, I have decided to be permissive and allow all devices unless they are managed by a rule. You can select a distribution group or administrative account that will receive quarantine notification emails. You also have the option to add any custom or organisation specific text that will be included in the email notification sent to users when their device is blocked or quarantined.\n\nWe then click &ldquo;+&rdquo; under &ldquo;Device Access Rules&rdquo; at the bottom of the page to define our new rule. Here we can browse a list of all the devices and device families that have recently connected to our Exchange environment. Device family is a grouping of similar devices, in our case for example if we choose a Device family of &ldquo;iPad&rdquo; we can then decide to only apply this rule to iPad2 models or &ldquo;All models&rdquo; by selecting the appropriate device type. Lastly, we select our ABQ action:\n\nOnce we have clicked &ldquo;Save&rdquo; we should see the new device access rule listed under &ldquo;Device Access Rules&rdquo;\n\nOnce we have created the access rule, if any users attempt to connect using an iPad, they will be listed under &ldquo;Quarantines Devices&rdquo;\n\nUsers will receive a notification email similar to the following if they try to connect using an iPad:\n\n",
      tags: [],
      id: 95
    });
    

    index.add({
      title: "Microsoft Lync Basic 2013",
      category: null,
      content: "Microsoft recently released Lync Basic 2013, a slimmer version of the Lync client that provides all the basic functionality available in the full version of Lync 2013. Some of the notable missing features in the basic client are advanced call features such as team ring, call forwarding, simultaneous ring, voice mail, call park, call delegation, response groups, and remote call control.\nAs usual for all things Lync related, my friend Greig Sheridan has a full write-up on his blog.\n",
      tags: [],
      id: 96
    });
    

    index.add({
      title: "Controlling ActiveSync device access on Exchange 2010 and Exchange Online",
      category: null,
      content: "I am often surprised by how few customers know about or use ActiveSync device access rules (or ABQ for short) in Exchange 2010 when everyone seems to have the requirement to some degree or another. I see a growing trend to use third party products to do what Exchange can and has been able to do natively for a while now so I thought I would put together this post to go through some of the functionality offered by ABQ.\nBefore I continue, I would like to highlight the following two things:\n\nDevice access rules (ABQ) should not be confused with or is not intended to replace ActiveSync policies which are used to enforce things like device passwords, device encryption, etc. (click here for more on ActiveSync policies)\nEverything described in this post also applies to Exchange Online\n\nDepending on your requirements, you may decide to take a restrictive approach where you only allow a small set of tested and supported devices or be more permissive and only block/quarantine problematic devices. For this post, I will create a device policy to quarantine any iPad devices. The use case for this scenario is that an organisation may for example allow users to choose whatever mobile phone they would like to use but block the use of iPads because these are not devices issued by the company. By quarantining a device, we can easily see who is attempting to use such a device, how many are out there and even decide to create a new policy specific to these devices.\nDuring the connection process, Exchange will follow a logical set of rules to determine the access state of each device and will either allow, block or quarantine the device based on the outcome. The sequence of challenges includes the following steps:\n\nIs the device authenticated? If not, challenge for the correct credentials. Otherwise, go on to the next step.\nIs Exchange ActiveSync enabled for the current user? If not, return an \"access restricted\" error to the device. Otherwise, go on to the next step.\nAre the policy enforcement criteria met by the current mobile device? If not, block access. Otherwise, go on to the next step.\nIs this device blocked by a personal exemption for the user? If so, block access. Otherwise, go on to the next step.\nIs this device allowed by a personal exemption for the user? If so, grant full access. Otherwise, go on to the next step.\nIs this device blocked by a device access rule? If so, block access. Otherwise, go on to the next step.\nIs this device quarantined by a device access rule? If so, quarantine the device. Otherwise, go on to the next step.\nIs this device allowed by a device access rule? If so, grant full access. Otherwise, go on to the next step.\nApply the default access state per the Exchange ActiveSync organisational settings.\n\nThe device policy that I am going to create will be applied at Step 7. To create a device policy, we need to access the &ldquo;ActiveSync Access&rdquo; options under &ldquo;Phone &amp; Voice&rdquo; settings in the ECP. It should look something like this:\n\nClicking the &ldquo;Edit&rdquo; button will allow you to edit various settings. As you can see, I have decided to be permissive and allow all devices unless they are managed by a rule. You can select a distribution group or administrative account that will receive quarantine notification emails. You also have the option to add any custom or organisation specific text that will be included in the email notification sent to users when their device is blocked or quarantined. \n\nWe then click &ldquo;New&rdquo; under &ldquo;Device Access Rules&rdquo; at the bottom of the page to define our new rule. Here we can browse a list of all the devices and device families that have recently connected to our Exchange environment. Device family is a grouping of similar devices, in our case for example if we choose a Device family of &ldquo;iPad&rdquo; we can then decide to only apply this rule to iPad2 models or &ldquo;All models&rdquo; by selecting the appropriate device type. Lastly, we select our ABQ action.\n\nOnce we have clicked &ldquo;Save&rdquo; we should see the new device access rule listed under &ldquo;Device Access Rules&rdquo;\n\nOnce we have created the access rule, if any users attempt to connect using an iPad, they will be listed under &ldquo;Quarantines Devices&rdquo;\n\nUsers will receive a notification email similar to the following if they try to connect using an iPad. Note the custom text entered previously (red box)\n\nOne last thing to mention is that you do have the ability to make a personal exception for a specific user if needed, so for example if you have an executive who is adamant about wanting to use his/her iPad of if you decide after some time to test iPads this can be done without affecting anyone else. As always, full documentation can be found on TechNet\n",
      tags: [],
      id: 97
    });
    

    index.add({
      title: "Exchange 2013 is RTM!",
      category: null,
      content: "Earlier today Exchange 2013 reached RTM status. This is a very exciting announcement and means that coding and testing is now complete. General availability is planned for the first quarter of 2013. In addition to Exchange, the new Office, SharePoint, and Lync have also reached RTM. For more information on the announcement, click here.\n",
      tags: [],
      id: 98
    });
    

    index.add({
      title: "Exchange 2013 - Introducing The Exchange Administration Center",
      category: null,
      content: "If you&rsquo;ve decided to get you hands dirty with the Exchange 2013 Preview, the first thing you probably noticed when clicking on the start menu after installation is this:\n&nbsp; \nYour eyes are not deceiving you, there is no shortcut to for the Exchange Management Console (EMC)&hellip; the reason for this is simple, it&rsquo;s not there! Exchange 2013 bids farewell to the EMC that we have come to love since Exchange 2007 and introduces a new management interface called the Exchange Administration Center (EAC). EAC is the new web-based management console in Microsoft Exchange Server 2013 and it allows administrators to manage on-premises, online, or hybrid Exchange deployments. As one would expect, EAC makes use of roles based access control to ensure that specialist or support users are able to perform only the specific tasks which are assigned to them.\n\noh, before I forget, I should mention that all names in the screenshot are randomly generated fakes!\n",
      tags: [],
      id: 99
    });
    

    index.add({
      title: "MEC 2012 - The lost conference!",
      category: null,
      content: "I can&rsquo;t believe how quickly this year has gone, it is almost time for me to start packing my bags for another trip..&nbsp; I'll be attending the Microsoft Exchange Conference 2012 (MEC) in Orlando, September 24th-26th. I am really looking forward to this great opportunity to learn about the product from the engineers who built it. There will be more than 100 sessions, some of the topics that will be covered in breakout sessions, keynotes and hands-on labs include:\n\nExchange Server 2013 Architecture\nSecurity and Protection in the new Exchange\nConfiguring built-in Anti-Malware/Anti-Spam protection\nSetting up Data Loss Prevention policies\nCompliance, eDiscovery and Archiving in the new Exchange\nExchange Server 2013 Manage Availability and Monitoring\nUnified Messaging in Exchange Server 2013\nExchange Server 2013 Deployment and Exchange Server 2010 Coexistence\nMoving to the cloud with Exchange Online and Office365\n\nLet me know if you are also planning to attend, it would be great to catch up!\n\n",
      tags: [],
      id: 100
    });
    

    index.add({
      title: "Greig&rsquo;s handy tools for Lync",
      category: null,
      content: "My friend and colleague Greig Sheridan recently released a couple of handy client side tools for Lync. I think they are both really great and thought I would plug them for him! The first of these is called &ldquo;Profiles for Lync&rdquo;. Profiles for Lync is a multi-user account management application for Lync which allows you to easily switch between Lync profiles, this is really handy if you often connect to multiple Lync environments.\n\n&nbsp;\nHis most recent tool is called &ldquo;Elyza&rdquo;. Elyza is a auto-responding &amp; remote control bot for Lync and has become my new demo buddy.. you never have to give her any notice, she is always available to chat to you.\n\nTo check out these handy tools, follow the links below:\n\n\nProfiles for Lync\n\n\nElyza\n\n\n",
      tags: [],
      id: 101
    });
    

    index.add({
      title: "A new look..",
      category: null,
      content: "After more than 2 years of the same I have decided to give my blog a new look. It is very much a work in progress for now, but hopefully it does not look too bad! I have once again decided against implementing any form of CSS or styling in my RSS feed as I think keeping it simple is the best approach for RSS.\n",
      tags: [],
      id: 102
    });
    

    index.add({
      title: "Say EHLO to Exchange 2013!",
      category: null,
      content: "I am very excited to let you all know that Microsoft has made the preview release of Exchange 2013 available for download.\nThis release has been highly anticipated, for more information about the Exchange 2013 preview, click here. In addition, the Office 2013 preview was also announced. Exchange 2013 preview documentation has also been updated on TechNet.\nWatch this space for news and information about what you can expect to see in Exchange 2013!\n\n",
      tags: [],
      id: 103
    });
    

    index.add({
      title: "Exchange Hybrid Multi-namespace Autodiscover Configuration",
      category: null,
      content: "I came across an interesting issue when using the Exchange Hybrid Configuration Wizard in a multi-namespace environment recently. Autodiscover was configured and working correctly for Outlook and EAS clients but the wizard would not complete successfully and would generate the following error: &ldquo;Federation information could not be received from the external organization&hellip;&rdquo; as seen below:\n\nAfter some investigation, I discovered that this problem was related to Autodiscover. Typically in an on-premises Exchange 2010 deployment, there are a number of different ways to configure Autodiscover when using multiple namespaces. These are:\nOption 1 - Single SSL Certificate that is valid for all DNS names (SAN Certificate)\nPros:\n\nRequires only one certificate.\nRequires only 1 public IP.\n\nCons:\n\nCost of additional DNS names in the SAN certificate could be expensive.\n\nOption 2 - Single-name SSL Certificate with DNS SRV Lookup\nPros:\n\nRequires only 1 public IP.\nRequires 1 single-name SSL certificate.\n\nCons:\n\nNot all DNS hosting providers support DNS SRV records.\nOutlook users may be prompted.\nOutlook 2007 required client-side hotfix.\n\nOption 3 - Single-name SSL Certificate with HTTP redirect\nPros:\n\nRequires 1 single-name SSL certificate.\n\nCons:\n\nRequires 2 public IPs\nRequires a second IIS site or ISA/TMG\n\nWhile these will all work and have their pros and cons, I would usually always use &lsquo;option 1&rsquo; listed above unless there is a good reason not to. In this particular instance, the Autodiscover was configured using &lsquo;option 3&rsquo; and even though Autodiscover worked fine for clients, the Hybrid Configuration Wizard did not seem to like this configuration.\nThe Office 365 documentation does not go into a great amount of detail about multi-domain Autodiscover configuration and says: &ldquo;Configure the Autodiscover public DNS records for your existing SMTP domains to point to an on-premises Exchange 2010 SP2 Client Access server&rdquo; which is technically what had been done. The reason this caused a problem is because unlike Outlook or EAS clients, Office 365 does not use the Autodiscover discovery process and instead makes a direct connection to https://autodiscover.domain.com/autodiscover/autodiscover.svc/wssecurity for each domain being used and does not obey the web redirect that had previously been configured.\nIn order to solve this problem, we purchased a new SAN certificate and reconfigured Autodiscover as described in &lsquo;option 1&rsquo;. In short, this is the only way to configure Autodiscover if you plan to implement an Exchange Hybrid Deployment. Additionally, if you are not using split DNS and have an internal DNS zone that is different to your external DNS (eg. domain.local), you need to ensure that the relevant external Autodiscover records are resolvable internally as well.\nAs a side note, if you are using ISA/TMG to publish EWS/Autodiscover, you need to create a separate rule without authentication delegation for the following paths:\n\n/ews/mrsproxy.svc\n/ews/exchange.asmx/wssecurity\n/autodiscover/autodiscover.svc/wssecurity\n/autodiscover/autodiscover.svc\n\n",
      tags: [],
      id: 104
    });
    

    index.add({
      title: "Remote Move Request: Exception has been thrown by the target of invocation",
      category: null,
      content: "If you have a Exchange Hybrid deployment configured and attempt to create a new remote move request you may receive an &rdquo;Exception has been thrown by the target of invocation&rdquo; error similar to the one below.\n\nHere are a few things you can check in order to help troubleshoot this error:\n\nHave you enabled MRSProxy? \nHave you correctly set the EWS &ldquo;External URL&rdquo; (WebServicesVirtualDirectory)? \nDo you have a certificate installed that contains the DNS name used in the&#160; EWS &ldquo;External URL&rdquo;? \nAre you entering the correct FQDN in the MRSProxy field of the new remote move request wizard? \nAre you using TMG/ISA to publish EWS? If so, ensure that you are not using authentication delegation on the following paths:\n\n/ews/mrsproxy.svc \n/ews/exchange.asmx/wssecurity \n/autodiscover/autodiscover.svc/wssecurity \n/autodiscover/autodiscover.svc \n\n\nAre you seeing &ldquo;405&rdquo; errors in the IIS log on the Exchange Hybrid server? If so, see KB2626696 \n\n",
      tags: [],
      id: 105
    });
    

    index.add({
      title: "Exchange 2010 Voicemail Preview for en-AU (and other languages)",
      category: null,
      content: "One of the downsides of using Exchange 2010 voicemail is that if you live in an English speaking country other than the United States (en-US) you have to set your Exchange language pack to en-US if you would like to make use of the Exchange voice mail preview feature. This has been a source of constant debate around our office as we have quite a multinational team. There are a few of us who don&rsquo;t actually mind the American sounding prompts/greetings/etc.. but then there are those who do. In a attempt to keep everyone happy my friend and colleague Greig Sheridan decided to investigate and found quite a neat workaround.\nBasically, what he has done is set the Default language of the Dial Plan to en-US, and then changed EVERY other reference to the language back to en-AU. The end result is that the only time you hear a greeting in the American accent is when you dial the Subscriber Access number, before you&rsquo;ve logged-in. Read all about it on his blog. For a direct link to the post, click here.\n",
      tags: [],
      id: 106
    });
    

    index.add({
      title: "Updating hybrid configuration failed with error 'Subtask CheckPrereqs execution failed",
      category: null,
      content: "I came across this error recently while running the Hybrid Configuration Wizard on Exchange 2010 SP2. It caught me out a little and as it turns out the fix is quite simple. It seems the wizard does not recognise certificates that begin with anything other than &ldquo;CN=&rdquo;. In my particular case I was being tripped up by a certificate beginning with &ldquo;E=&rdquo;. What made this even more confusing was that the certificate causing the problem was installed, but completely unrelated and not actually the one I was using to configure my Hybrid Exchange environment.\n\nIt seems this is a known bug and was fixed in Update Rollup 1 for Exchange Server 2010 Service Pack 2. I can confirm that after installing the update, it all worked as expected.\nFor more info and to download Update Rollup 1 for Exchange Server 2010 Service Pack 2, click here\n",
      tags: [],
      id: 107
    });
    

    index.add({
      title: "Discover and import .pst files into Exchange Server or Exchange Online",
      category: null,
      content: "The Microsoft Exchange team recently released Microsoft Exchange PST Capture which allows you to search for .pst files on computers in your organization and then import those files to mailboxes in both on-premises Exchange servers and Exchange Online.\n\nPST Capture was initially developed by ISV partner, Red Gate, and was recently acquired by Microsoft. After some further development and testing, it can now be downloaded for free here. PST Capture is comprised of the following components:\n\nPST Capture Central Service: The Central Service maintains the list of all PST files found in your organization and manages the data as it&rsquo;s moved to the Exchange servers or Exchange Online. \nPST Capture Agent: Discovery of the PST files is performed by PST Capture agents that are installed on computers in your organization. The agents also send the PST files they find to the host computer when an import operation is started on the PST Capture Console. \nPST Capture Console: The PST Capture Console is the interface you use to configure PST searches, specify the target mailboxes for PST files, and track the status of PST import operations and reports. You can also use the console to import PST files stored on network attached storage (NAS) devices, on which you can&rsquo;t install PST agents. \n\n&#160;\n\nFor more information on Microsoft Exchange PST Capture see this TechNet article\nTo download Microsoft Exchange PST Capture click here\n",
      tags: [],
      id: 108
    });
    

    index.add({
      title: "Decoding Lync&rsquo;s Client-Side Error Messages",
      category: null,
      content: "Some of Lync&rsquo;s Client-side error messages don&rsquo;t really explain the reason for the failure. Luckily my friend Greig Sheridan has started to compile a very handy list of these on his blog.\nIf you ever spend time troubleshooting Lync client side error messages, I would definitely recommend that you check it out. Here&rsquo;s a link: \nhttps://greiginsydney.com/decoding-lyncs-client-side-error-messages/\n",
      tags: [],
      id: 109
    });
    

    index.add({
      title: "Exchange 2010 &ldquo;Anonymous Relay&rdquo; Receive Connector",
      category: null,
      content: "In almost every environment I have ever seen there are usually some devices and/or systems that need to send email and typically these will require some SMTP server to relay these messages. More often than not these also do not have the ability to authenticate to the relaying host.\nHow do we deal with these in Exchange? I have seen some pretty silly solutions and the default answer seems to be &ldquo;Just allow anonymous users on the default connector&rdquo;. This is not true and is actually quite a dangerous thing to do, so my advice is DON&rsquo;T. In fact, I would go so far as to say, don&rsquo;t ever touch the default connector. The correct way is to create a new receive connector and allow relay from only the devices that are required to use this connector.\nAllowing anonymous relay is serious and requires thought and planning. If could be exploited by spammers and IMHO should not be configured on internet-facing servers.\nSo lets say that we have three devices that need to relay anonymously, their IPs are 10.0.0.30, 10.0.0.31 and 10.0.0.32. First we need to create a new receive connector:\nNew-ReceiveConnector -Name \"Anonymous Relay Connector\" -Usage Custom -PermissionGroups AnonymousUsers -Bindings 10.0.0.20:25 -RemoteIpRanges 10.0.0.30-10.0.0.32 &ndash;Banner \"220 Anonymous Relay Connector\"\nNext we need to to grant relay permission to anonymous connections on the new Receive connector:\nGet-ReceiveConnector -Identity \"Anonymous Relay Connector\" | Add-ADPermission -User \"NT AUTHORITY\\ANONYMOUS LOGON\" -ExtendedRights \"Ms-Exch-SMTP-Accept-Any-Recipient\"\nWhat happens if you have multiple servers and would like to duplicate your receive connector settings. Say for example you have two Exchange servers and you have a receive connector on a server called EXHUB01 that allows 100 devices to relay. You would now like to create the same connector on EXHUB02. Instead of manually adding each address, you could do this:\nNew-ReceiveConnector \"Anonymous Relay Connector\" -Server EXHUB02 -Usage Custom -PermissionGroups AnonymousUsers -Bindings 10.0.0.21:25 -RemoteIPRanges ( Get-ReceiveConnector \"EXHUB01\\Anonymous Relay Connector\" ).RemoteIPRanges -Banner \"220 Anonymous Relay Connector\"\nDon&rsquo;t forget to grant relay permission to anonymous connections on the new Receive connector:\nGet-ReceiveConnector -Identity \"EXHUB02\\Anonymous Relay Connector\" | Add-ADPermission -User \"NT AUTHORITY\\ANONYMOUS LOGON\" -ExtendedRights \"Ms-Exch-SMTP-Accept-Any-Recipient\"\n",
      tags: [],
      id: 110
    });
    

    index.add({
      title: "Exchange 2010 Service Pack 2 (SP2)",
      category: null,
      content: "Just in case you missed it, Exchange 2010 SP2 was released earlier this month. The following features and functionality has changed since Service Pack 1 for Exchange 2010:\n\nHybrid Configuration Wizard \nAddress Book Policies \nCross-Site Silent Redirection for Outlook Web App \nMini Version of Outlook Web App \nMailbox Replication Service \nMailbox Auto-Mapping \nMulti-Valued Custom Attributes \nLitigation Hold\n\nI wanted to call out a couple of these that I have been eagerly awaiting:\nHybrid Configuration Wizard     Exchange 2010 SP2 introduces the Hybrid Configuration Wizard which provides you with a streamlined process to configure a hybrid deployment between on-premises and Office 365 Exchange organizations. Hybrid deployments provide the seamless look and feel of a single Exchange organization and offer administrators the ability to extend the feature-rich experience and administrative control of an on-premises organization to the cloud.\nCross-Site Silent Redirection for Outlook Web App    In Exchange 2010 SP1, there was three types of redirection for OWA in Exchange 2010 on-premises:\n\nManual Redirection \nTemporary Manual Redirection \nLegacy Silent Redirection (for Exchange 2003/2007)\n\nWith Exchange 2010 SP2, you can enable a silent redirection when a Client Access server receives a client request that is better serviced by a Client Access server located in another Active Directory site. This silent redirection can also provide a single sign-on experience when forms-based authentication is enabled on each Client Access server.\nFor more information about what&rsquo;s new in Exchange 2010 SP2, click here\nTo download Exchange 2010 SP2, click here\n",
      tags: [],
      id: 111
    });
    

    index.add({
      title: "Microsoft Online Services Internet Connection Performance Test",
      category: null,
      content: "This handy little tool has been around for some time now but I&rsquo;ve found that it does not seem to be very well known so I thought I would write up a quick post.\nThis performance tool tests your Internet connection to a Microsoft Online Services data center and measures the response times, bandwidth, and overall connection quality. The results can help you evaluate your network configuration for potential use with Microsoft Online Services.\n\n\nFor America use http://speedtest.microsoftonline.com\nFor Asia Pacific use http://speedtest.apac.microsoftonline.com\nFor Europe, Middle East and Africa use http://speedtest.emea.microsoftonline.com\n",
      tags: [],
      id: 112
    });
    

    index.add({
      title: "Jetstress Error: The MSExchange Database or MSExchange Database ==> Instrances performance counter category isn't registered",
      category: null,
      content: "I recently came across this error while using Jetstress to test and validate the performance of their Exchange storage. I was running the tool on Windows Server 2008 R2 and I don&rsquo;t recall ever seeing this before. After finding what is actually an easy fix, I thought I would&#160; write up this post just in case this has anyone else baffled. The entire error was:\nEnsure that you&rsquo;re running the application as a member of built-in Administrators security group.\nThe MSExchange Database or MSExchange Database ==> Instrances performance counter category isn't registered.\n\n\nThe admin account I was using is a member of the domain admins security group so I assumed I had the correct permissions but went away and checked just to be sure. I also checked to make sure that the domain admins group was a member of the local built-in Administrators security group, which it was. After spending a few minutes thinking about it, I thought I would try running Jetstress &ldquo;as an administrator&rdquo; (right-click the shortcut and select &ldquo;Run as administrator&rdquo;\nThat solved the problem.\n\nI have since checked the Jetstress installation in my Exchange 2010 Lab which also runs on Windows Server 2008 R2 and this step is not required there, it works fine by just clicking the Jetstress shortcut (no right-click required). Not really worth spending time investigating the cause as it may just be a once-off occurrence, but at least it is now documented.\n",
      tags: [],
      id: 113
    });
    

    index.add({
      title: "Tech-Ed Australia To Go: Moving Email from On Premise Into the Cloud",
      category: null,
      content: "Toby and I talking about our &ldquo;Microsoft Office 365: From Simple Migration to a Hybrid Environment&rdquo; session at At Tech-Ed Australia 2011.\n\n\nToby and I talking about our session at At Tech-Ed Australia 2011\n\n&nbsp;\nIf you missed it, the recorded session and slides are available for download here: http://cgoo.se/ndiUkE\n",
      tags: [],
      id: 114
    });
    

    index.add({
      title: "Chris&rsquo;s Blog - Now mobile friendly :)",
      category: null,
      content: "This post is slightly off-topic compared to my regular posts, but its something I&rsquo;ve been thinking about for some time now and has been one of those things sitting on my to do list that always gets trumped by something more important. \nWhile my blog has never been inaccessible from mobile devices, I have never really put much thought or effort into improving the experience for mobile users. I was recently reading some interesting statistics on the explosive growth of mobile internet usage and that prompted me to do something about it. These statistics are probably best summarised by this:\n\nYou will now be able to access all the same content from your mobile device in a much more mobile friendly manner. And just because I am a geek I&rsquo;ve even added a .mobil domain name so you&rsquo;ll also be able to access it at http://cgoosen.mobi\nI also wanted to share this great video that goes into some smartphone mobile marketing statistics. Don&rsquo;t worry.. I don&rsquo;t ever intend on introducing ads or marketing of any kind here, I just think the stats are interesting.\n\n\n\n \nInforgraphic source\n",
      tags: [],
      id: 115
    });
    

    index.add({
      title: "Microsoft \"Future of productivity\"",
      category: null,
      content: "I recently saw this at Tech-Ed Australia and finally managed to track it down so I could share it. I think it&rsquo;s such a great video and just excites me about the \"future of productivity\".\n\n\n\n",
      tags: [],
      id: 116
    });
    

    index.add({
      title: "Tech-Ed Australia 2011 &ndash; Must see sessions",
      category: null,
      content: "After an interesting and somewhat different keynote, Tech-Ed 2011 has officially kicked off. While everyone is enjoying a few cold ones, I thought I would take the time to tell you about some of the sessions I am excited about attending this year.\nThere are many great speakers at Tech-Ed this year, these are just some of the sessions I plan to attend.\n\nEXL310: \"Upgrading to Exchange 2010: Notes from Field\" with Colin Lee and Sofiane Behraoui\nEXL309: \"Microsoft Lync 2010: How to go big with voice\" with Brendan Carius and Selvan Loganathan\nOFS-OFC309: \"From Zero to Productivity with Office 365\" with Ben Walters, Chris Oconnor and Lee Hickin\nEXL303: \"Exchange Server 2010: High Availability Concepts\" with Scott Schnoll\nEXL304: \"Load Balancing with Microsoft Exchange Server 2010\" with Andrew Ehrensing\n\nThen of course there is my session with Toby Knight, EXL-OFC311: &ldquo;Microsoft Office 365: From Simple Migration to a Hybrid Environment&rdquo; we will be in Arena 1B at 5 PM tomorrow&hellip; we&rsquo;ve got some great schwag so make sure you stop by!\n",
      tags: [],
      id: 117
    });
    

    index.add({
      title: "Exchange 2010 &ldquo;You must close all dialog boxes before you can close Exchange Management Console&rdquo;",
      category: null,
      content: "I&rsquo;ve seen this error around a few times over the last while but have never really paid too much attention to it:\n\nIt seems it only occurs in the management console if you have IE9 installed on your Exchange 2010 SP1 server. Previously the recommendation was to uninstall IE9 or just live with it. I recently installed Update Rollup 5 for Exchange 2010 SP1 in my lab environment and it seems to have fixed this error. \nObviously I would recommend thorough testing before deploying any updates in production, but I thought it would be worth mentioning that it does seem to fix this error as well.\n",
      tags: [],
      id: 118
    });
    

    index.add({
      title: "Exchange 2010 remote mailbox move to Office 365 &ldquo;Microsoft Exchange Critical Error&rdquo;",
      category: null,
      content: "I&rsquo;ve been having a problem with remote mailbox moves to Office 365. The move completes successfully and everything works ok, but it always generates the following error:\n&ldquo;Could not load type 'Microsoft.Exchange.MailboxReplicationService.RequestPriority'&hellip;&rdquo;\n\nI&rsquo;ve seen this mentioned a few times on the Office 365 community forums and some of my colleagues are also seeing this. The good news is that after installing Update Rollup 5 for Exchange 2010 SP1 this error no longer appears.\n",
      tags: [],
      id: 119
    });
    

    index.add({
      title: "Update Rollup 5 for Exchange Server 2010 Service Pack 1",
      category: null,
      content: "Earlier today the Exchange team announced the release of Update Rollup 5 for Exchange Server 2010 Service Pack 1. Update Rollup 5 for Exchange Server 2010 SP1 resolves the issues that are described in the following Microsoft Knowledge Base articles:\n\n2275156 - The inline contents disposition is removed when you send a \"Content-Disposition: inline\" email message by using EWS in an Exchange Server 2010 environment\n2499044 - You cannot save attachments in an email message by using OWA if the subject line contains special characters in an Exchange Server 2010 environment\n2509306 - Journal reports are expired or lost when the Microsoft Exchange Transport service is restarted in an Exchange Server 2010 environment \n2514766 - A RBAC role assignee can unexpectedly run the Add-ADPermission command on an Exchange Server 2010 server that is outside the role assignment scope \n2529715 - Slow network or replication issues after you change the number of virus scanning API threads in Microsoft Exchange Server 2010\n2536704 - Mailbox users who are migrated by using ILM 2007 cannot use the Options menu in OWA in an Exchange Server 2010 environment\n2537094 - French translation errors occur when you edit a response to a meeting request by using OWA in an Exchange Server 2010 SP1 environment\n2554604 - A RBAC role assignee can unexpectedly manage certificates that are outside the role assignment scope in an Exchange Server 2010 environment\n2555800 - You cannot use the GetItem operation in EWS to retrieve properties of an email message in an Exchange Server 2010 environment \n2555850 - You cannot delete a mailbox folder that starts with a special character in its name by using Outlook in an Exchange Server 2010 environment \n2556096 - The columns in the .csv logging file are not lined up correctly when you perform a discovery search on a mailbox in an Exchange Server 2010 environment\n2556107 - The columns in the .csv logging file are not lined up correctly when you perform a discovery search on a mailbox in an Exchange Server 2010 environment \n2556133 - A device that uses Exchange ActiveSync cannot access mailboxes in an Exchange Server 2010 environment \n2556156 - Extra.exe crashes when it performs RPC activity checks against an Exchange Server 2010 server \n2556352 - \"ChangeKey is required for this operation\" error message in Outlook for Mac 2011 in an Exchange Server 2010 environment\n2556407 - Certain client-only message rules do not take effect on email messages that are saved as drafts in an Exchange Server 2010 environment\n2559926 - \"There are no items to show in this view.\" error message when you try to view a folder by using Outlook in an Exchange Server 2010 environment\n2572958 - The \"Test-OutlookConnectivity -Protocol HTTP\" command fails with an HTTP 401 error in an Exchange Server 2010 environment\n\nFor more information, click here\nTo Download, click here\n",
      tags: [],
      id: 120
    });
    

    index.add({
      title: "Exchange Server Version and Update Rollup Build Numbers",
      category: null,
      content: "Have you ever had to figure out what version of Exchange a build number is referring to or vice versa? There is a very handy TechNet article that lists every build number and release date since Exchange 4.0.837 (Exchange Server 4.0 Standard Edition, June 11 1996)\nBhargav Shukla also has a great script that can be used to find Exchange 2007 and Exchange 2010 build numbers in your environment.\n",
      tags: [],
      id: 121
    });
    

    index.add({
      title: "Microsoft Tech-Ed Australia 2011",
      category: null,
      content: "\nIt&rsquo;s almost time to head to the Gold Coast for Tech-Ed 2011. I will be tweeting and blogging from the conference as usual. I will also be speaking this year so if you are attending, be sure to come over and say hi. \nMicrosoft&rsquo;s Toby Knight and I will be presenting session EXL311 entitled &ldquo;Microsoft Exchange and Microsoft Office 365: From Simple Migration to a Hybrid Environment&rdquo;. Whether you&rsquo;re looking to migrate all of your mailboxes to the cloud or planning to run a hybrid environment, this is the session for you. We will cover how and when to take advantage of the Simple Exchange Migration which supports migrating existing Exchange on-premise customers who want to move all of their mailboxes to the cloud with full data fidelity. You will also learn how rolling out an Exchange 2010 server in your current Exchange environment prepares you for seamless integration with Exchange Online. Whether you are piloting a few users or moving a large part of your workforce to the cloud, we give you the technical details on Exchange-to-cloud integration that you need to be successful.\nThe session is currently scheduled for Wed, 31 Aug at 5 PM. See you there!\n",
      tags: [],
      id: 122
    });
    

    index.add({
      title: "Microsoft Certified Master | Exchange Server 2010",
      category: null,
      content: "During the month of June I was fortunate enough to attend the Microsoft Certified Master rotation at Microsoft in Redmond, Washington. \nI am delighted to announce that after a very long month of waiting for the results of the final &ldquo;qual lab&rdquo;, I passed and have earned the Microsoft Certified Master | Exchange Server 2010 certification.\nThe MCM program differentiates itself through expert-led training. The curriculum is    developed in conjunction with Microsoft product engineering teams and delivered by industry-renowned instructors and practiced experts within their fields of discipline. Instructors use their numerous years of experience to ensure that students receive authoritative information on the successes and challenges of applying course concepts to real-world customer situations. I knew it would be challenging, but when day 1 ended up being 17 hours long we all knew we would be in for more than we could have ever imagined.\nIn order to successfully pass and be able to call yourself an MCM you need to get through 3 very difficult theory exams and then face the beast, otherwise known as the &ldquo;qual lab&rdquo;. Without going into it in too much detail, it is a very intense 3 weeks. How intense? read Bojan Nenadic&rsquo;s Blog\nI have to say thanks to all my rock star instructors and classmates.. I am humbled and truly grateful to have shared this experience with you all.\n",
      tags: [],
      id: 123
    });
    

    index.add({
      title: "Moving from BPOS to Office365 &ndash; &ldquo;550 5.4.1 Relay Access Denied&rdquo;",
      category: null,
      content: "With the recent launch of Office365 I was very excited at the thought of moving my existing BPOS account to a new Office365 tenant. I signed up, removed my &ldquo;cgoosen.com&rdquo; domain from my BPOS account and went through the process of adding it to Office365. I thought the whole process was going really well until I tested it by sending myself an email from another external account. I immediately received a &ldquo;550 5.4.1 Relay Access Denied&rdquo; error which seemed a little strange. After some research on the Office365 Community forums I realised that this seems to be a common issue with people moving a domain from BPOS to Office365.\nI ended up calling Microsoft Customer Support and after some trial and error here is how I fixed it.\nThe first thing you need to do is use PowerShell to connect to your Office365 tenant, make sure you have the correct versions of Windows PowerShell and Windows Remote Management (WinRM) installed and configured on your computer. If you are running Windows 7 or Windows Server 2008 R2, you don't have to install anything. If you are running anything else, see the link at the bottom of the post. By default, PowerShell&rsquo;s execution policy is set to &ldquo;Restricted&rdquo; that means that scripts won&rsquo;t run so before we try to connect, we need to change that. Open PowerShell and execute the following cmdlets:\nGet-ExecutionPolicy &ndash; verify that it is set to &ldquo;Restricted&rdquo;\nLets change it to &ldquo;RemoteSigned&rdquo;. PowerShell will now run any scripts that you write yourself and scripts downloaded from the Internet only if those scripts have been signed by a trusted publisher:\nSet-ExecutionPolicy RemoteSigned\n\nNow we are ready to connect to our Office365 tenant. Execute the following cmdlets:\n$LiveCred = Get-Credential\nEnter your Office365 admin credentials in the dialog\n\n$Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://ps.outlook.com/powershell/ -Credential $LiveCred -Authentication Basic -AllowRedirection\nImport-PSSession $Session\nOnce connected you, execute the following cmdlets:\nSet-AcceptedDomain -Identity \"yourdomain.com\" -OutboundOnly $True\nSet-AcceptedDomain -Identity \"yourdomain.com\" -OutboundOnly $False\nYou may need to allow around 40mins for replication, after that you should be able to receive mail again without the &ldquo;550 5.4.1 Relay Access Denied&rdquo; error.\nIf you are using running anything other than Windows 7 or Windows Server 2008 R2, see this link for information on Install and Configure Windows PowerShell.\nFor more information about connecting to Office365 via PowerShell, click here.\n",
      tags: [],
      id: 124
    });
    

    index.add({
      title: "Exchange Server Deployment Assistant Update",
      category: null,
      content: "One of my favourite tools is the Exchange Server Deployment Assistant. The Deployment Assistant asks you some questions about your particular Exchange environment and, based on your answers, it provides a checklist with instructions that are designed to help you deploy Exchange 2010 quickly and easily. Each step has a huge amount of valuable information to guide you through your deployment.\nThe Exchange Team recently announced that they have updated the Deployment Assistant to include a rich coexistence scenario for organizations interested in maintaining some users on-premises with Exchange 2010 and some users hosted in the cloud by Microsoft Office 365 for enterprises. This information is only available in English at this time and requires Exchange Server 2010 Service Pack 1 (SP1).\nThe Exchange Server Deployment Assistant can be found here.\n\n",
      tags: [],
      id: 125
    });
    

    index.add({
      title: "Do you still use Public Folders?",
      category: null,
      content: "The Exchange Team are looking to learn a bit more about your public folder topologies and usage scenarios. They have created an anonymous survey that asks about things like usage scenarios, folder management habits or thought process around public folder data organization.\nIf you have 15 minutes to spare, I&rsquo;m sure they will appreciate it! The survey can be found here.\n",
      tags: [],
      id: 126
    });
    

    index.add({
      title: "Exchange 2007 Service Pack 3 Update Rollup 3 re-released!",
      category: null,
      content: "I recently posted about an issue with Exchange 2007 SP3 RU3 that could result in database corruption. The Exchange Servicing team has fixed the reported issue with RU3 and is making new version of RU3 available to customers, version 08.03.159.002, (KB2530488). They strongly advise that all customers install this newly released version of Microsoft Exchange Server 2007 SP3 Update Rollup 3 and to discard any prior version of RU3 (KB2492691) which they may have.\nUpdate Rollup 3 Installation Guidance:\nCustomers with RU3 already installed within your Exchange environment\nIt is not necessary for you to uninstall the existing RU3 within your environment. The new RU3 package can be installed over the top of the existing package installed on your servers.\nCustomers with previous SP3 RU&rsquo;s installed within your Exchange environment\nYou can simply install the new version of the RU3 package.\nGeneral RU Installation Guidance:\nNote for deployments that leverage Forefront Security for Exchange: For those of you running Forefront Security for Exchange perform these important steps from the command line in the Forefront directory before and after this rollup's installation. Without these steps, Exchange services for Information Store and Transport will not start back up. You will need to disable Forefront via \"fscutility /disable\" before installing the patch and then re-enable after the patch by running \"fscutility /enable\" to start it up again post installation.\n",
      tags: [],
      id: 127
    });
    

    index.add({
      title: "Potential for database corruption after installing Exchange 2007 SP3 RU3",
      category: null,
      content: "I recently posted about the availability of Update Rollup 3 for Exchange 2007 SP3 and Exchange 2010 SP1 and then followed up by posting about an issue impacting some customers which have RIM BlackBerry devices connecting to Exchange 2010 SP1 with RU3.\nOver the weekend, the Exchange Product Group was made aware of an issue which may lead to database corruption if you are running Exchange 2007 Service Pack 3 with Update Rollup 3. \nThe issue was introduced in Exchange 2007 SP3 RU3 by a change in how the database is grown during transaction log replay when new data is written to the database file and there are no available free pages to be consumed and is of specific concern in two scenarios: \n\nWhen transaction log replay is performed by the Replication Service as part of ensuring the passive database copy is up-to-date and/or \nWhen a database is not cleanly shut down and recovery occurs. \n\nWhen this issue occurs, the following similar events are logged in the Application Event log of the Mailbox server:\n\nEvent Type: Error        Event Source: ESE         Event Category: Logging/Recovery         Event ID: 454         Description: Microsoft.Exchange.Cluster.ReplayService (12716) Recovery E20 SG1\\DB1: Database recovery/restore failed with unexpected error -4001. \nEvent Type: Error        Event Source: MSExchangeRepl         Event Category: Service         Event ID: 2097         Description: The Microsoft Exchange Replication Service encountered an unexpected Extensible Storage Engine (ESE) exception in storage group 'SG1\\DB1'. The ESE exception is a read was issued to a location beyond EOF (writes will expand the file) (-4001) (). \nEvent Type: Error        Event Source: MSExchangeRepl         Event Category: Service         Event ID: 2095         Description: Log file D:\\logs\\SG1\\E200006AFAE.log in SG1\\DB1 could not be replayed. Re-seeding the passive node is now required. Use the Update-StorageGroupCopy cmdlet in the Exchange Management Shell to perform a re-seed operation \n\n\nWhile only a small number of customers have been affected to date, the Product Group believe the risk is significant enough that they are recommending all customers to uninstall Exchange 2007 SP3 RU3 on all Mailbox Servers and Transport servers. Uninstalling the rollup will revert the system back to the previously installed version. They have also removed the Exchange 2007 SP3 RU3 download from the Microsoft Download Center and from Microsoft Update until we are able to produce a new version of the rollup.\nIt is strongly recommended that the below actions are taken to ensure that no data loss or outage is experienced.\nFor environments leveraging CCR and/or Standby Continuous Replication (SCR) \nIf you note the listed events in your environment the following steps must be taken in order to restore your high-availability configuration: \n\nRollback the CCR Mailbox server hosting the passive database copies and any SCR target Mailbox servers to the previously installed version (e.g., Exchange 2007 SP3 RU2) by uninstalling RU3. \nRe-seed all database copies on the CCR Mailbox server and any SCR target Mailbox servers hosting the passive database copies. \nVerify the database copy status is healthy for all passive copies. \nPerform a switchover and rollback the remaining CCR Mailbox server to the previously installed version (e.g., Exchange 2007 SP3 RU2). \n\nIf you are not seeing these events in your continuous replication enabled environment, we recommend the following steps: \n\nRollback the CCR Mailbox server hosting the passive database copies and any SCR target Mailbox servers to the previously installed version (e.g., Exchange 2007 SP3 RU2) by uninstalling RU3. \nPerform a switchover and rollback the remaining CCR Mailbox server to the previously installed version (e.g., Exchange 2007 SP3 RU2). \n\nFor environments leveraging Single Copy Clusters (SCC) \n\nRollback passive nodes within the SCC environment to the previously installed version (e.g., Exchange 2007 SP3 RU2) by uninstalling RU3. \nPerform a switchover and rollback the remaining SCC Mailbox server nodes to the previously installed version (e.g., Exchange 2007 SP3 RU2). \nRestore and recover any damaged databases leveraging a last known good backup. \n\nFor environments leveraging standalone Mailbox servers \n\nRollback the standalone Mailbox servers to the previously installed version (e.g., Exchange 2007 SP3 RU2) by uninstalling RU3. \nRestore and recovery any damaged databases leveraging a last known good backup. \n\nFor Hub Transport and Edge Transport servers \n\nRollback the standalone transport servers to the previously installed version (e.g., Exchange 2007 SP3 RU2) by uninstalling RU3. \nRecover damaged mail.que databases by following the steps in Working with the Queue Database on Transport Servers. \n\n",
      tags: [],
      id: 128
    });
    

    index.add({
      title: "BPOS/Office 365 and BlackBerry",
      category: null,
      content: "Microsoft recently announced that they are in the process of updating pricing for the Hosted BlackBerry Service for Exchange Online to make it available free of charge. From the 16th of March 2011, BlackBerry mobile e-mail for new Exchange Online customers is now free through the Business Productivity Online Suite (BPOS).&#160; For existing customers, a further announcement is expected later this month on how to take advantage of this change.\nIn addition, Hosted BlackBerry service will be available for free with Office 365 after it launches later this year.\n",
      tags: [],
      id: 129
    });
    

    index.add({
      title: "Update Rollup 3 for Exchange 2010 &ndash; Download disabled",
      category: null,
      content: "There have been reports of an issue impacting some customers which have RIM BlackBerry devices connecting to Exchange 2010 SP1 with RU3. The product team are working with RIM to identify the exact scenarios, narrow down the root cause of the problem and identify a suitable resolution for it. During this time the download page for Update Rollup 3 has been disabled.\nIf you are seeing duplicate messages being delivered when an email is sent from a BlackBerry device and you have RU3 installed within your Exchange 2010 environment, contact Microsoft Support for assistance in troubleshooting the issue you&rsquo;re experiencing.\nIt is recommended at this time that everyone hold off deploying RU3 until they have identified and resolved the issues. If you have already deployed RU3 and you are not seeing any issues within your environment, leave RU3 in place at this time.\n",
      tags: [],
      id: 130
    });
    

    index.add({
      title: "Update Rollup 3 for Exchange 2007 SP3 and Exchange 2010 SP1",
      category: null,
      content: "The Exchange CXP team recently released Update Rollup 3 for Exchange Server 2007 SP3 and Exchange Server 2010 SP1 to the Download Center. Release via Microsoft Update will occur on March 22nd 2011.\nThese updates contain a number of customer reported and internally found issues since the release of RU2. Both updates resolve a number of issues, in particular for Exchange 2010 it resolves more than 40 issues.\nFor a detailed list of these issues, visit the following links:\n\nUpdate Rollup 3 for Exchange 2007 SP3\nUpdate Rollup 3 for Exchange 2010 SP1\n\nUpdate Rollup 4 for Exchange Server 2007 SP3 and Exchange Server 2010 SP1&#160; is currently scheduled to release in May 2011.\nAs always, those of you running Forefront, be sure you perform these important steps from the command line in the Forefront directory before and after this rollup's installation process. Without these steps, Exchange services for Information Store and Transport will not start back up. You will need to disable ForeFront via \"fscutility /disable\" before installing the patch and then re-enable after the patch by running \"fscutility /enable\" to start it up again post installation.\nTo download these updates, visit the following links:\n\nUpdate Rollup 3 for Exchange 2007 SP3\nUpdate Rollup 3 for Exchange 2010 SP1\n\n",
      tags: [],
      id: 131
    });
    

    index.add({
      title: "Upgrading from Windows 1.0 to Windows 7",
      category: null,
      content: "This one is slightly off topic, but I thought I would share it nonetheless. I recently came across a post about someone who upgraded through every version of Windows from 1.0 to 7.\nWhat is truly impressive about this is that there is some 20 years of application compatibility to be witnessed. Here is the very impressive video:\n\n\n\nThe first thing I noticed when I watched this was that the author never installed Windows ME. I have since found his &ldquo;FAQ&rdquo;:\n1) Why Didn't you Install ME?     Since Windows ME cannot be upgraded to 2000, I chose to install 2000 straight from 98 as it was chronologically the next release. I might do an \"alternate history\" version to see what going from 98 to ME to XP looks like.      2) Did Doom 2 and Monkey Island work in Windows 7?      Yes. Sorry I didn't point that out explicitly in the video.      3) Can you do the same thing with Mac OS?      I don't know enough about Mac OS to be able to say, and I would not be the best person to do that experiment as I have never been a Mac user.      4) Where are you from?      Scotland.\n\n",
      tags: [],
      id: 132
    });
    

    index.add({
      title: "Exchange support for Windows Server 2008 R2 SP1",
      category: null,
      content: "Last week the Windows Server team announced the Release to Manufacturing (RTM) of Windows Server 2008 R2 Service Pack 1 (SP1), along with Windows 7 SP1. On February 16, both will be available to current customers of the Windows Volume Licensing program, as well as subscribers to Microsoft Developer Network (MSDN) and TechNet. On February 22, both will be available to all customers through Windows Update and will also come preinstalled on new servers ordered.\n\"Is Exchange supported running on Windows Server 2008 R2 SP1?\" The Exchange team have confirmed that the following versions of Exchange are supported to run on Windows 2008 R2 SP1 (the RTM version of SP1): \n\nExchange 2010 SP1\nExchange 2010 RTM\nExchange 2007 SP3\n\nThere are a couple of things to note:\n\n Exchange 2007 was not supported to run on Windows 2008 R2 at all before Exchange 2007 SP3.\nWindows 2008 R2 SP1 includes all the hotfixes required to install Exchange 2010 SP1 so if you're installing Exchange 2010 SP1 on a server running Windows 2008 R2 SP1, you don't need to install these hotfixes separately.\n\n",
      tags: [],
      id: 133
    });
    

    index.add({
      title: "Exchange 2010 SP1 IPD released",
      category: null,
      content: "The solution accelerators team has released a new Infrastructure Planning and Design (IPD) guide for Microsoft Exchange Server 2010 with SP1.\nThis guide provides actionable guidance for designing an Exchange Server 2010 infrastructure. The guide&rsquo;s step-by-step process gives a straightforward explanation of the key steps required for a successful implementation. It can help you reduce planning time and costs, and ensure a successful rollout of Exchange Server 2010. The Exchange Server 2010 Guide includes the following content: \n\nStep 1: Define the Business and Technical Requirements\nStep 2: Define the Instances of Exchange Server 2010\nStep 3: Design the Mailbox Server Infrastructure\nStep 4: Design the Client Access Server Infrastructure\nStep 5: Design the Hub Transport Server Infrastructure\nStep 6: Design the Edge Transport Server Infrastructure\nStep 7: Design the Unified Messaging Server Infrastructure\nStep 8: Define the Active Directory Domain Services Requirements\n\n \nFor more information and to download the Exchange 2010 SP1 IPD, click here\n",
      tags: [],
      id: 134
    });
    

    index.add({
      title: "Windows Phone 7 &ndash; My thoughts..",
      category: null,
      content: "I don&rsquo;t often have much to say about mobile devices.. it is a frequently discussed topic amongst my friends and colleagues though and everyone generally has their own opinion.\nI spent the last month testing a Windows Phone 7 device, The LG E900 to be exact. Before I share my thoughts with you, perhaps I&rsquo;ll give you a little background. I use an iPhone, and I make no excuses for the fact that I love my iPhone. Before you start hurling abuse my way (this is a Microsoft centric blog after all, right?) I should mention that I have probably tried every Windows Mobile device out there, from the very first HP Ipaq&rsquo;s, WM 2003 through to WM 6.5 but at the end of the day it was the iPhone that really changed the way I use a mobile device.\n \nWindows Phone 7 &ndash; In short, I think its good.. certainly better than all previous Windows devices I have used. It&rsquo;s responsive and quick and visually the interface is very slick. I like how it brings your contacts and Facebook together. What I did not like was how it requires a live ID to setup the phone and then automatically syncs those contacts to your phone as well.. no biggie, except you can&rsquo;t disable this so if you are like me and don&rsquo;t want your live ID contacts to sync to your phone, you need to ensure that your live ID is not your hotmail account. It does email and calendar well, but that is to be expected.\nA few other things I don&rsquo;t like.. no cut and paste (and yes, I know the early iPhones never had cut and paste either, but we are supposed to be progressing here..) There is no OCS/Lync client available for Windows Phone 7.. I honestly can&rsquo;t believe that but I&rsquo;ve been unable to find one.\nWindows Phone 7 devices only support a subset of all Exchange ActiveSync mailbox policy settings so if you have Windows Phone 7 devices in your organization, they will experience synchronization problems if certain Exchange ActiveSync mailbox policy properties are configured. To allow Windows Phone 7 devices to synchronize with an Exchange mailbox, either set the AllowNonProvisionableDevices property to true or only configure the following Exchange ActiveSync mailbox policy properties:\n\nPasswordRequired\nMinPasswordLength\nIdleTimeoutFrequencyValue\nDeviceWipeThreshold\nAllowSimplePassword\nPasswordExpiration\nPasswordHistory\nDisableRemovableStorage\nDisableIrDA\nDisableDesktopSync\nBlockRemoteDesktop\nBlockInternetSharing\n\nAnother thing I found is that Microsoft appear to have dropped support for SMS sync with Exchange Server 2010.\nIn summary, I think Windows Phone 7 is a great step up from previous versions of Windows devices.. but I don&rsquo;t think its quite there yet.. the app community is nowhere near as large that for the iPhone or even Android. I don&rsquo;t see this as a enterprise device, it seems to be more consumer centric and does not really compete that well against the likes of the iPhone which is after all a consumer device. If you are currently making use of the enterprise features in WM 6.5 you may be disappointed with Windows Phone 7. I look forward to seeing further development in this space.\n",
      tags: [],
      id: 135
    });
    

    index.add({
      title: "Exchange 2010 Online Archive support in Outlook 2007",
      category: null,
      content: "It&rsquo;s been a long time coming.. Earlier this year it was announced that Exchange 2010 online archive support for Outlook 2007 would be coming. The good news is that it is finally here!\nThe December 2010 Cumulative Update for Office 2007 will allow users with Outlook 2007 to access their Exchange 2010 online archives. Organizations with Outlook 2007 deployed can now benefit from Exchange 2010 archiving and retention. There are a few BUT&rsquo;s though.. the following functionality is not supported in Outlook 2007:\n\nSearch across primary and archive mailboxes: When a user searches the primary mailbox, and selects All Mailbox Items, Outlook does not search the archive mailbox. Similarly, when the user searches the archive mailbox, the primary mailbox is not searched. \nArchive policies: In Outlook 2007, users can't use personal tags (also known as archive policies) to move items to the archive mailbox. Any default archive policies for the mailbox continue to be applied. Users can use Outlook Web App to see or apply archive policies. Archive policies are retention policy tags with the Move to Archive action. Organizations can use the Default Archive and Retention Policy, or apply custom retention policies to a mailbox. The policies can include a default policy tag (DPT) to move items from the primary mailbox to the archive mailbox, and personal tags which users can apply to messages or folders to move them to archive.\n\n",
      tags: [],
      id: 136
    });
    

    index.add({
      title: "Scott Schnoll on Backup Strategy in Exchange 2010",
      category: null,
      content: "This is a slightly old interview with Microsoft&rsquo;s Scott Schnoll where he talks about backup strategy in Exchange 2010. While some customers may find this to be an outrageous concept, he talks about how Exchange 2010 database replication can address most, if not all of the reasons you would traditionally backup Exchange using legacy backup technologies.\n\n\nEvery organisation has different requirements, the challenge is balancing these requirements while we embrace new technologies and evolve the way we think about things.\n",
      tags: [],
      id: 137
    });
    

    index.add({
      title: "Exchange Server Deployment Assistant &ndash; Coexistence Scenario",
      category: null,
      content: "I previously posted about the Exchange Server Deployment Assistant. The Deployment Assistant asks you some questions about your particular Exchange environment and, based on your answers, it provides a checklist with instructions that are designed to help you deploy Exchange 2010 quickly and easily. Each step has a huge amount of valuable information to guide you through your deployment.\nThis great tool has recently been enhanced to include rich coexistence information for those interested in maintaining some users on-premises and some users hosted by Microsoft Office 365 for enterprises in the cloud. As of now, the available scenario is targeted solely at those organizations with a current Exchange 2003 on-premises implementation, but additional scenarios for supporting Exchange 2007 and Exchange 2010 will be coming soon.\n \nThe Exchange Server Deployment Assistant can be found here Be sure to bookmark it!\n",
      tags: [],
      id: 138
    });
    

    index.add({
      title: "Exchange 2010 Mailbox Role Calculator and SPECint2006 Rate Value",
      category: null,
      content: "I often talk about the Exchange 2010 Mailbox role calculator, I&rsquo;m sure everyone uses it (everyone should be using it!) during the planning phases of any Exchange 2010 deployment. If you have no idea what I am talking about, click here now!\nThere is an area on the input tab where you define the number of processor cores that will have deployed for each mailbox server within your primary and secondary data centres, as well as, enter the SPECint2006 rate value for the system you have selected. The SPECint2006 rate value often causes some confusion so I thought I would write this post to try and clarify what to enter in the SPECint2006 rate value field.\nIn previous versions of the Exchange 2010 Mailbox role calculator (prior to 12.8) you had to enter the &ldquo;Adjusted Megacycles / Core&rdquo; which meant that you needed to normalise your server platform against the baseline platform -Intel Xeon x5470 3.33GHZ processors (2x4 core arrangement) and enter that value. To get to this value, you had to find your rate value and then use the following formula to calculate the &ldquo;Adjusted Megacycles / Core&rdquo; value: \n \nIn version 12.8, the field name has changed to &ldquo;SPECint2006 Rate Value&rdquo; which means you no longer need to normalise your server platform against the baseline platform and you merely enter the rate value. \nTo find the rate value, go here, click on &ldquo;Results&rdquo;, highlight &ldquo;CPU2006&rdquo; and then select &ldquo;Search CPU2006 Results&rdquo;. Under &ldquo;Available Configurations&rdquo;, select &ldquo;SPECint2006 Rates&rdquo; and click Go. Under &ldquo;Simple Request&rdquo;, enter the search criteria (e.g. Processor matches x5550) and find the server and processor you are planning to deploy and take note of the result value. \nFor example, let's say you are deploying a Dell PowerEdge M710 8-core server with Intel x5550 2.67GHz processors (2670 Hertz); the SPECint_rate2006 results value is 240, simply go back to the Exchange 2010 Mailbox role calculator and select &ldquo;8&rdquo; in the &ldquo;Processor Cores / Server&rdquo; field and enter &ldquo;240&rdquo; in &ldquo;SPECint2006 Rate Value&rdquo; field. Easy, huh?\n",
      tags: [],
      id: 139
    });
    

    index.add({
      title: "Outlook Anywhere and Wildcard Certificates",
      category: null,
      content: "Exchange 2007 brought about a change in the way Exchange uses certificates and introduced us to the concept of a Unified Communications Certificate which makes use of Subject Alternative Names (SAN). While this is the recommended way to secure Exchange services, every now and then I come across a customer that already owns a wildcard certificate for their entire domain (eg. *.cgoosen.com) and would like to use this certificate instead.\nOne of the problems with wildcard certificates is that they don&rsquo;t always play nicely with Outlook Anywhere. If the principle name on the certificate is not the same as the mail server FQDN Outlook may not authenticate correctly. When testing Outlook Anywhere connectivity with Exchange Server Remote Connectivity Analyzer (ExRCA) you may see something like this:\n \nAdditional Details would be similar to this:\nThe certificate common name *.domain.com doesn't validate against the mutual authentication string that was provided: msstd:mail.domain.com\nThe easiest way to correct this problem is to use Autodiscover to send the correct principle name to your Outlook clients. Use the Exchange Management Shell to configure Autodiscover settings by using the Set-OutlookProvider cmdlet\nYou can check the existing configuration by issuing the Get-OutlookProvider cmdlet\nThe command should look something like this:\nSet-OutlookProvider -Identity EXPR -CertPrincipalName msstd:*.domain.com\n\n",
      tags: [],
      id: 140
    });
    

    index.add({
      title: "Jetstress Field Guide",
      category: null,
      content: "I&rsquo;m often asked by my customers and colleagues about Jetstress. While I always recommend that Jetstress be used to validate their storage design during an Exchange implementation, I&rsquo;ve never really seen any good documentation to refer them to. Until now that is! \nNeil Johnson from MCS has recently published a great whitepaper that explains the process and requirements for validating an Exchange storage solution prior to releasing an Exchange deployment into production. His whitepaper explains how Jetstress works, how to plan for and perform a test, and how to automate the process. His whitepaper, &ldquo;Jetstress Field Guide&rdquo;, can be used with any version of Exchange.\nDownload it here\n",
      tags: [],
      id: 141
    });
    

    index.add({
      title: "Rollup, Rollup!",
      category: null,
      content: "The last month has seen the release of Update Rollup 1 for Exchange 2007 SP3 and Update Rollup 1 for Exchange 2010.\nFor a full list of the fixes included in Update Rollup 1 for Exchange 2007 SP3, see KB2279665\nFor a full list of the fixes included in Update Rollup 1 for Exchange 2010 SP1, see KB2407028\nNote for Forefront Protection for Exchange users\nFor those running Forefront Protection for Exchange, be sure you perform these important steps from the command line in the Forefront directory before and after installing this rollup. Without these steps, the Information Store and Transport services will not start.\n\nBefore installing the rollup, disable ForeFront by using the \"fscutility /disable\" command\nAfter rollup installation completes, re-enable ForeFront by running the \"fscutility /enable\" command\n\nDownload Links:\n\nUpdate Rollup 1 for Exchange 2007 SP3\nUpdate Rollup 1 for Exchange 2010 SP1\n\n",
      tags: [],
      id: 142
    });
    

    index.add({
      title: "Forefront TMG error : %%-2146233088",
      category: null,
      content: "Earlier this year I post a 6 part post entitled &ldquo;Securing Exchange 2010 with Forefront Threat Management Gateway (TMG) 2010&rdquo; which covered colocating Exchange 2010 Edge and Forefront TMG 2010 on the same server to create a a single, secure point of entry for all mail related services.\nWhen Exchange 2010 SP1 was released in late August many people started to report seeing the following error in their event log:\n&ldquo;Microsoft Forefront TMG Managed Control service fails to start and the event viewer will contain a message that the service terminated with the following error : %%-2146233088&rdquo;\nThe reason for this is that SP1 removed some of the existing cmdlets, in particular get-antispamupdates which is used by TMG when spam filtering functionality is enabled.\nThe forefront team recently announced the release of Software Update 1 for Forefront TMG 2010 SP1. This update resolves the issue.\nDownload Software Update 1 for Forefront TMG 2010 SP1 here\n",
      tags: [],
      id: 143
    });
    

    index.add({
      title: "Exchange 2010 Moving Mail Queue",
      category: null,
      content: "In early 2009 I wrote an post entitled &ldquo;Exchange 2007 SP1 Moving Mail Queue/Transport Dumpster&rdquo;. This post is still one of the most frequently viewed posts on my blog so I thought it was time to post an update for Exchange 2010.\nIn Exchange 2010, the location of the queue database and queue database transaction logs are controlled by the QueueDatabasePath and QueueDatabaseLoggingPath parameters in the EdgeTransport.exe.config application configuration file. This file is located in the C:\\Program Files\\Microsoft\\Exchange Server\\V14\\Bin directory. To change the location of the queue database and queue database transaction logs, simple open this file in Notepad and locate the following values under \n\" />\n\" />\nChange these paths to match your requirements and save the file.\n \nRestart the Microsoft Exchange Transport service for these changes to take effect. Once restarted, you should notice that new Mail.que and Trn.chk files are created at the new QueueDatabasePath location and new Trn.log, Trntmp.log, Trnres00001.jrs, Trnres00002.jrs, and Temp.edb files at the new QueueDatabaseLoggingPath location.\nThere are a few things to note about this process. Firstly, If the target directory doesn't exist, it will be automatically created if the parent directory has the following permissions:\n\n\nNetwork Service: Full Control\n\n\nSystem: Full Control\n\n\nAdministrators: Full Control \n\n\nThe existing queue database and log files are not moved. New files are created at the new location and existing database files are left at the old location. These old files are no longer used.\nIf you would like to change the location of the queue database but reuse the existing queue database files, you must move or copy the database files when the Microsoft Exchange Transport service is stopped.\n",
      tags: [],
      id: 144
    });
    

    index.add({
      title: "Exchange 2010 SP1 Prerequisites",
      category: null,
      content: "I recently posted about the availability of Exchange 2010 SP1 and thought I would provide some feedback about the installation process.\n \nBefore installing SP1 for Exchange 2010, there are several updates and hot fixes that need to be installed first. An important thing to note is that all the Unified Messaging language packs other than US English (en-US) need to be uninstalled before upgrading the Unified Messaging server role. I have split these up then up by server role:\nHub Transport Role Prerequisites:     Microsoft Knowledge Base article 979099     Microsoft Office 2010 Filter Packs\nClient Access Role Prerequisites:     Microsoft Knowledge Base article 982867 *requires a restart    Microsoft Knowledge Base article 979744 *requires a restart    Microsoft Knowledge Base article 983440 *requires a restart    Microsoft Knowledge Base article 977020     Knowledge Base article 979099 \nMailbox Role Prerequisites:     Microsoft Knowledge Base article 979099    Microsoft Office 2010 Filter Packs\nUnified Messaging Role Prerequisites:      Microsoft Unified Communications Managed API, Core Runtime 64-bit    Microsoft Server Speech Platform Runtime 64-bit     Microsoft Knowledge Base article 979099\n",
      tags: [],
      id: 145
    });
    

    index.add({
      title: "Exchange 2010 SP1 is here!",
      category: null,
      content: "In April I posted about some of the new features that will be available in Exchange 2010 SP1. The most notable of these is the ability to provision a user&rsquo;s personal archive to a different mailbox database from their primary mailbox. \nMany people have been eagerly awaiting the release of SP1, the good news is that it is now available for download. For more information, see this Exchange Team Blog entry. \nTo download Exchange 2010 SP1, click here.\n",
      tags: [],
      id: 146
    });
    

    index.add({
      title: "Exchange 2010: The user \"domain\\username\" isn't assigned to any management roles.",
      category: null,
      content: "I was running through the Exchange 2010 installation process earlier today, during the installation process, everything went really smoothly and I only had &ldquo;green ticks&rdquo;!\nOnce done, I opened the Exchange Management Console and saw the following error:\n&lsquo;The following error occurred when searching for On-Premises Exchange server:[myservername.local] Processing data from remote server failed with the following error message: The user \"domain\\username\" isn't assigned to any management roles. For more.... It was running \"Discover-ExchangeServer - USeWIA $true -SupressError $true&rsquo;\n \nIt was rather confusing at first as I had completed the installation using an admin account that was a member of the Enterprise Admins group. Digging a little deeper, saw the following error in the event log:\n \nAfter some further digging, I realised what had happened. A colleague of mine did the AD schema preparation using his admin account a few days ago, during that part of the process, the account being used was automatically added to the &ldquo;Organization Management&rdquo; AD security group. When I then resumed the installation process with my account, I was not a member of this group. To rectify the problem, I had to manually add my account to the &ldquo;Organization Management&rdquo; AD security group.\n\n",
      tags: [],
      id: 147
    });
    

    index.add({
      title: "Gartner positions Microsoft in the Leaders quadrant",
      category: null,
      content: "On the strength of its market position, Microsoft has recently been placed in the Leaders Quadrant in Gartner&rsquo;s Magic Quadrant for Secure E-mail Gateway.\nThe Secure Messaging solution offers customers a hybrid model of in-the-cloud services &ndash; Forefront Online Protection for Exchange &ndash; and on-premises software &ndash; Forefront Protection 2010 for Exchange Server &ndash; to provide defence-in-depth protection.\n\nFor the complete report, click here\n",
      tags: [],
      id: 148
    });
    

    index.add({
      title: "Client Network Requirements in Exchange 2010",
      category: null,
      content: "Client network traffic is area that often generates many questions. This area is frequently the subject of discussion when site consolidation is being discussed which also raises the issues of network cost and sizing.\nWhile there is some information available on how to estimate this client network traffic, this is mostly relevant to Exchange 2007 and Outlook 2007. I am not aware of any changes in Exchange 2010 and Outlook 2010 that will change the client network requirements, so the information below is based on this.\nThe first bit of information you need are user profiles, use the Microsoft Exchange Server Profile Analyzer tool to collect this information if you don&rsquo;t already have it. You can download the Microsoft Exchange Server Profile Analyzer tool from the links provided at the bottom of this page.\n\n\n\n\nProfile\nLight\nMedium\nHeavy\nVery Heavy\n\n\nSent/Day\n5\n10\n20\n30\n\n\nReceived/Day\n20\n40\n80\n120\n\n\nAve Msg Size\n75kb\n75kb\n75kb\n75kb\n\n\nMsgs Read/Day\n20\n40\n80\n120\n\n\nMsgs Del&rsquo;d/Day\n10\n20\n40\n60\n\n\nOWA logon/Day\n2\n2\n2\n2\n\n\n\n\n\nNext we determine how much traffic is generated by each user profile per day. In the table below, all values are in Kilobytes/User/Day. The table separates sending from all other actions which are labelled as aggregate.\n\n\n\n\nProfile\n\nLight\nMedium\nHeavy\nVery Heavy\n\n\n\n\n\n\n\n\n\n\n\nSending\n285\n570\n1,140\n1,710\n\n\nOutlook - Online\nAggregate\n3,765\n7,545\n15,075\n22,605\n\n\n\nTotal\n4,050\n8,115\n16,215\n24,315\n\n\n\n\n\n\n\n\n\n\n\nSending\n390\n780\n1,560\n2,340\n\n\nOutlook - Cached Mode\nAggregate\n1,560\n3,120\n6,240\n9,360\n\n\n\nTotal\n1,950\n3,900\n7,800\n11,700\n\n\n\n\n\n\n\n\n\n\n\nSending\n465\n930\n1,845\n2,775\n\n\nOutlook Anywhere\nAggregate\n1,845\n3,705\n7,410\n11,100\n\n\n\nTotal\n2,310\n4,635\n9,255\n13,875\n\n\n\n\n\n\n\n\n\n\n\nSending\n1,200\n2,400\n4,800\n7,200\n\n\nOutlook Web App\nAggregate\n8,085\n15,930\n31,605\n47,295\n\n\n\nTotal\n9,285\n18,330\n36,405\n54,495&nbsp;\n\n\n\n\nNow that we have these values, how do we use them? The last piece of the puzzle is the formula. The following formula can be used to estimate the network traffic (in KB/Sec) required by your Exchange 2010 clients.\n\nUsing this formula and the data in the above tables, if we wanted to calculate the network requirements for 2,500 heavy users who use Outlook in Cached Mode it would look something like this:\n\n\nNetwork Traffic (KB/Sec) = 677 KB/Sec. To convert this to Mbps:\n\n\nNetwork Traffic (Mbps) = 5.4 Mbps.\nThis formula assumes all these users are in the same time zone, so they do the majority of the work during an 8 hour day.\nThis information is based on the original post from MS Exchange Team blog.\nDownload Microsoft Exchange Server Profile Analyzer (32 bit) here\nDownload Microsoft Exchange Server Profile Analyzer (64 bit) here\n",
      tags: [],
      id: 149
    });
    

    index.add({
      title: "Exchange 2007 SP3 Released!",
      category: null,
      content: "In November last year I mentioned that Windows 2008 R2 support for Exchange 2007 was been announced. The Exchange product team yesterday announced the release of Exchange 2007 Service Pack 3 (SP3). \nSP3 for Exchange 2007 enables Exchange 2007 to be installed on the Windows Server 2008 R2 version of the operating system as well as Windows 7 support for the Exchange management tools. Other enhancements include advanced protection options against e-mail security threats, such as spam and viruses and tools which help manage internal compliance and high availability.\nFor more information about Exchange 2007 SP3, see Microsoft TechNet\nDownload Exchange 2007 SP3 here\n",
      tags: [],
      id: 150
    });
    

    index.add({
      title: "Updates to the Exchange Mailbox Server Role Requirements Calculators",
      category: null,
      content: "The Exchange 2007 and Exchange 2010 Mailbox Server Role Requirements Calculators have recently been updated. If you use either of these tools often, you&rsquo;ll no doubt appreciate how much effort must to into keeping them updated. \nApart from some bug fixes, there have been a few enhancements too, for the Exchange 2010 calculator, these include:\n\nAdded two new columns to the primary datacenter &ldquo;Active Database Configuration / DAG&rdquo; table.&#160; These columns now expose the total number of databases activated in each site after server failure events.&#160; This change was added to expose cross-site database failover events.\nThe calculator now includes an option to activation block secondary datacenter mailbox servers that host HA database copies.&#160; This allows you to design a solution where you can activate the secondary datacenter in the event of a primary datacenter failure mode, or choose to activate a copy in the secondary datacenter manually, but prohibits Active Manager from automatically activating a copy in the secondary datacenter.&#160; \nAdded support for 32-cores.\n\nFor detailed information on these and other enhancements, see the following links:\n\nUpdates to the Exchange 2007 Mailbox Server Role Storage Requirements Calculator\nUpdates to the Exchange 2010 Mailbox Server Role Requirements Calculator\n\nTo download the revised version, click here for Exchange 2007 and here for Exchange 2010\n",
      tags: [],
      id: 151
    });
    

    index.add({
      title: "Exchange Humor.. Epic Awesomeness!",
      category: null,
      content: "I was looking around the attachments section of the MS Exchange Team blog earlier trying to find an older version of the Exchange 2010 Mailbox Server Role Requirements Calculator when I came across &ldquo;E2010+MBX+Role+Calc+Spoof.xlsx&rdquo; I was curious to see what it was so I downloaded it.. lets just say it was not the version I was looking for, but it made me laugh..\n\n\n",
      tags: [],
      id: 152
    });
    

    index.add({
      title: "Exchange 2010 SP1 beta now available!",
      category: null,
      content: "I recently posted about the new features that will be available in Exchange 2010 Service Pack 1 (SP1). Microsoft have announce the availability of Exchange Server 2010 SP1 Beta. This could be very useful for those currently planning their deployment and looking to have a test some of the new features.\nThe SP1 beta is available to the public and can be downloaded here\n",
      tags: [],
      id: 153
    });
    

    index.add({
      title: "Securing Exchange 2010 with Forefront Threat Management Gateway (TMG) 2010, Part 6 - Publishing Outlook Web App",
      category: null,
      content: "In the first 5 parts of this series, I went through all the steps required to successfully install Forefront Protection 2010 for Exchange Server and Forefront Threat Management Gateway (TMG) 2010 on the same server as your Exchange Server Edge Transport role. I also looked at some basic configuration so we should now be able to send and receive email.\nWhat about external access? TMG 2010 can also securely publish all your Exchange Server related services such as Outlook Web App (OWA), Outlook Anywhere and ActiveSync (EAS).\nIn this final part of the series I&rsquo;ll look at publishing OWA to the internet. While my focus is mainly on OWA, Outlook Anywhere and EAS should also work after very little or no additional configuration. I&rsquo;ll start by creating a new certificate request and then submitting it to certificate authority and then install the issued certificate. I&rsquo;ll then go over how to correctly export the issued certificate and import it on the TMG server. I&rsquo;ll then conclude the series by creating a new &ldquo;Exchange Web Client Access Publishing Rule&rdquo;.\nA few notes before I begin.. When working with certificates, there are two options, I have opted to use my own Enterprise Root CA which has been installed on my domain controller. You are of course welcome to purchase a certificate from a third-party CA, if you decide that this is a better option for you, the basic configuration steps below will not differ all that much, the only difference will be in how you submit the request to the CA. I highly recommend purchasing a UC Certificate for this, please see the following Microsoft TechNet article for more information.\nThis post also assumes that your domain controllers already accept LDAP connections over SSL. To enable this, you need to install a server certificate on each of your domain controllers. The following Microsoft TechNet article may provide some guidance if you need further assistance with this.\nThe first step is to confirm out OWA configuration, this is done by opening the Exchange Management Console, expand &ldquo;Server Configuration&rdquo;, click &ldquo;Client Access&rdquo; and then right-click &ldquo;owa (Default Web Site)&rdquo; and select &ldquo;Properties&rdquo;\n\nIt is also important to change the authentication settings by clicking on the &ldquo;Authentication&rdquo; tab. We need to disable forms based authentication as TMG will be providing this feature. If you keep Exchange forms based authentication enabled your users will be prompted to log into OWA twice.\n\nWe now need to create a certificate request for the certificate that will be used to OWA. This can of course be done from the Exchange Management Shell by making use of the New-ExchangeCertifate cmdlet or by making use of the new wizard included in the Exchange Management Console. To access the wizard, click &ldquo;Server Configuration&rdquo;, select your CAS server and click &ldquo;New Exchange Certificate&rdquo;\n\n&ldquo;Enter a friendly name for the certificate&rdquo;, I usually use the external FQDN here. Click &ldquo;Next&rdquo;\n\nIf you are using a wildcard certificate, you can enter the root domain name here, I have elected not to use a wildcard certificate. Click &ldquo;Next&rdquo;\n\nNext, select your required configuration. Enter your configuration and click &ldquo;Next&rdquo;\n\nReview your certificate domains, I usually enter the server name without a suffix as well, but this is not necessarily required. Ensure that you have your internal, external and both autodiscover names listed and click &ldquo;Next&rdquo;\n\nEnter your organization and location details and click &ldquo;Next&rdquo;\n\nReview your certificate configuration summary and click &ldquo;Next&rdquo;\n\nOnce complete, click &ldquo;Finish&rdquo;\n\nFor those looking to use the Exchange Management Shell to complete this request, the command would look something like this:\nNew-ExchangeCertificate -FriendlyName 'dogfood.cgoosen.com' &ndash;GenerateRequest -PrivateKeyExportable $true -KeySize '2048' -SubjectName 'C=AU,S=\"NSW\",L=\"Sydney\",O=\"cgoosen.com\",OU=\"test lab\",CN=dogfood.cgoosen.com' &ndash;DomainName 'tlex01.testlab.local','dogfood.cgoosen.com','autodiscover.testlab.local','autodiscover.dogfood.cgoosen.com','tlex01' -Server 'TLEX01'\nNow that we have completed out certificate request, it is time to submit this request to a CA. I&rsquo;ll be using my Enterprise Root CA which is installed on my domain controller, so I&rsquo;ll just submit the request opening https://tldc01.testlab.local/CertSrv Click &ldquo;Request a certificate&rdquo;\n\nThen click on &ldquo;advanced certificate request&rdquo;\n\nSince we have already created the certificate request, select &ldquo;Submit a certificate request by using a base-64-encoded CMC or PKCS#10 file, or submit a renewal request by using a base-64-encoded PKCS#7 file&rdquo;\n\nPaste the certificate request in the box provided, select the &ldquo;Web Server&rdquo; template and click &ldquo;Submit&rdquo;\n\nClick &ldquo;Yes&rdquo; to acknowledge the &ldquo;Web Access Confirmation&rdquo;\n\nNext download only the &ldquo;DER encoded&rdquo; certificate.\n\nNow that we have our new certificate, it&rsquo;s time to install it. Once again, click &ldquo;Server Configuration&rdquo; and select your new certificate. Click &ldquo;Complete Pending Request&rdquo;\n\n\nSelect your new certificate and click &ldquo;Complete&rdquo;\n\nOnce completed, click &ldquo;Finish&rdquo;. You have now installed your new certificate.\n\nWe now need to assign services to the certificate, click &ldquo;Server Configuration&rdquo; and select your new certificate. Click &ldquo;Assign Services to Certificate&rdquo;\n\nSelect your CAS server and click &ldquo;Next&rdquo;\n\nEnsure that you have selected &ldquo;Internet Information Services&rdquo; and click &ldquo;Next&rdquo;\n\nReview the configuration summary and click &ldquo;Assign&rdquo;\n\nOnce completed, click &ldquo;Finish&rdquo;\n\nNow that we&rsquo;ve installed the new certificate and assigned services to it, lets give it a quick test internally. My internal URL is https://tlex01.testlab.local/owa\n\nBefore we can import the certificate on the TMG server, you need to export the certificate along with its private key from the CAS server. Open the &ldquo;Certificates&rdquo; MMC and make sure you are viewing the &ldquo;Local Computer&rdquo;. We need to export 2 certificates. The first is the Enterprise Root CA certificate located in the &ldquo;Trusted Root Certificate Authorities&rdquo; store.\n\nThe second certificate is the new exchange certificate we just installed, it should be located in the &ldquo;Personal&rdquo; store.\n\nLets start with the Enterprise Root CA certificate, right-click the certificate and click &ldquo;Export&rdquo;. Click &ldquo;Next&rdquo;\n\nSelect &ldquo;DER encoded binary X.509 (.CER)&rdquo; and click &ldquo;Next&rdquo;\n\nGive it a meaningful and name be sure to note down the location and click &ldquo;Next&rdquo;\n\nReview the settings and click &ldquo;Finish&rdquo;\n\nOnce completed successfully, click &ldquo;Ok&rdquo;\n\nNext we export the exchange certificate along with its private key. right-click the certificate and click &ldquo;Export&rdquo;. Click &ldquo;Next&rdquo;\n\nEnsure that you have selected &ldquo;Yes, export the private key&rdquo; and click &ldquo;Next&rdquo;\n\nEnsure that you have selected &ldquo;Export all extended properties&rdquo; and click &ldquo;Next&rdquo;\n\nYou need to protect the private key by using a password, be sure to remember what password you enter here and click &ldquo;Next&rdquo;\n\nGive it a meaningful and name be sure to note down the location and click &ldquo;Next&rdquo;\n\nReview the settings and click &ldquo;Finish&rdquo;\n\nOnce completed successfully, click &ldquo;Ok&rdquo;\n\nOnce you have those 2 certificates, (ca_cert.cer and cas_cert.pfx if you followed my naming convention) copy them to your TMG server. The log onto the TMG server and open the &ldquo;Certificates&rdquo; MMC and make sure you are viewing the &ldquo;Local Computer&rdquo;. We now repeat the previous process in reverse.\n\nFirst we import the Enterprise Root CA certificate, expand the &ldquo;Trusted Root Certificate Authorities&rdquo; store, right-click &ldquo;Certificates&rdquo; and select &ldquo;Import&rdquo;. Click &ldquo;Next&rdquo;\n\nLocate the certificate and click &ldquo;Next&rdquo;\n\nYou will notice that it will already have the correct location specified, do not change this, just click &ldquo;Next&rdquo;\n\nReview the settings and click &ldquo;Finish&rdquo;\n\nOnce completed successfully, click &ldquo;Ok&rdquo;\n\nWe then import the exchange certificate. Expand the &ldquo;Personal&rdquo; store right-click &ldquo;Certificates&rdquo; and select &ldquo;Import&rdquo;. Click &ldquo;Next&rdquo;\n\nLocate the certificate and click &ldquo;Next&rdquo;\n\nEnter the private key password (you do remember it, right?) Ensure that you have selected &ldquo;Include all extended properties&rdquo; and click &ldquo;Next&rdquo;\n\nThe correct location should already be specified, do not change this, just click &ldquo;Next&rdquo;\n\nReview the settings and click &ldquo;Finish&rdquo;\n\nOnce completed successfully, click &ldquo;Ok&rdquo;\n\nOnce this is done, should should be able to double-click the exchange certificate and check the status. Both certificates should be &ldquo;Ok&rdquo;\n\nThe final step in the process is to create a &ldquo;Exchange Web Client Access Publishing Rule&rdquo;. Open the TMG Management Console, right-click &ldquo;Firewall Policy&rdquo;, select &ldquo;New&rdquo; and then select &ldquo;Exchange Web Client Access Publishing Rule&rdquo;\n\nGive your rule a meaningful name and click &ldquo;Next&rdquo;\n\nSelect your Exchange version and select &ldquo;Outlook Web Access&rdquo;, then click &ldquo;Next&rdquo;\n\nSelect your publishing type and then click &ldquo;Next&rdquo;\n\nSince we will be using SSL, select that option and click &ldquo;Next&rdquo;\n\nEnter your internal site name, only enter the FQDN, there is no need to add HTTP/S or /OWA. Click &ldquo;Next&rdquo;\n\nEnter your public name here, again only the FQDN. Click &ldquo;Next&rdquo;\n\nSelect your web listener, since I don&rsquo;t already have one, I am going to create a new one by clicking &ldquo;New&rdquo;\n\nEnter a meaningful name and click &ldquo;Next&rdquo;\n\nWe will be using SSL and want to require SSL connections from all clients. Click &ldquo;Next&rdquo;\n\nSelect your listener IP address, this should be your external network address. Click &ldquo;Next&rdquo;\n\nClick &ldquo;Select Certificate&rdquo; and then select the exchange certificate we installed in the previously. Click &ldquo;Select&rdquo;\n\nClick &ldquo;Next&rdquo;\n\nNext we look at authentication settings, since our server is not a part of the domain, we are unable to use &ldquo;Windows&rdquo; authentication. Make sure &ldquo;HTML Form Authentication&rdquo; is selected, select &ldquo;LDAP (Active Directory)&rdquo; and click &ldquo;Next&rdquo;\n\nI won&rsquo;t be making use of SSO, make your selection and click &ldquo;Next&rdquo;\n\nWe need to add at least one LDAP server for user authentication, add your domain controllers here, type your domain name and I highly recommend that you make use of LDAP over SSL. Click &ldquo;Next&rdquo;\n\nReview your web listener configuration and click &ldquo;Finish&rdquo;\n\nSelect the web listener you just created and click &ldquo;Next&rdquo;\n\nSelect &ldquo;Basic Authentication&rdquo; and then click &ldquo;Next&rdquo;\n\nThis rule will apply to &ldquo;All Authenticated Users&rdquo;, click &ldquo;Next&rdquo;\n\nReview your configuration and then click &ldquo;Finish&rdquo; to create the rule.\n\nOnce the rule has been created, we need to apply it to TMG, click &ldquo;Apply&rdquo;\n\nYou should now see your rule listed..\n\nNow for the fun part, lets test our configuration. If you visit your external URL, mine is https://dogfood.cgoosen.com/owa you should be presented with a OWA login form. Notice the &ldquo;Secured by Microsoft Forefront Threat Management Gateway&rdquo; banner at the bottom.\nEnter your user name in the format &ldquo;Domain\\user name&rdquo; and your password and click &ldquo;Log On&rdquo; If you have any certificate alerts, you may need to install your Root CA certificate to the &ldquo;Trusted Root Certification Authorities&rdquo; store on your workstation. If you are using an Enterprise Root CA, it uses Group Policy to propagate its certificate to the &ldquo;Trusted Root Certification Authorities&rdquo; store for all users and computers in the domain.\n\nIf everything has been correctly configured, you should be presented with your inbox.\n\nTo summarise, in this final part of the series I created a new certificate request and then submitted it to certificate authority. Once I had downloaded the issued certificate, I installed it on my exchange CAS server and assigned services to it. I then exported the issued certificate and imported it on the TMG server. To complete the process, I created a new &ldquo;Exchange Web Client Access Publishing Rule&rdquo;.\nIn this 6 part series, I went through the process of installing Exchange Server Edge, Forefront Protection 2010 for Exchange Server and TMG 2010 on the same server. Consolidating these services greatly reduces management complexity and overhead.\n",
      tags: [],
      id: 154
    });
    

    index.add({
      title: "Securing Exchange 2010 with Forefront Threat Management Gateway (TMG) 2010, Part 5 - Putting it all together",
      category: null,
      content: "We finally have our consolidated Exchange Server Edge and TMG 2010 server installed, but what now? How do we take advantage of all the great new features? In this part of the series, I&rsquo;ll configure our E-Mail Policy, create a new Edge Subscription and then configure Antivirus and File Filters\nFirstly, we&rsquo;ll configure our E-Mail Policy. If you open the TMG Management Console, select &ldquo;E-Mail Policy&rdquo; and then select &ldquo;Configure E-Mail Policy&rdquo; from the tasks pane.\n\nOn the &ldquo;Welcome to the E-Mail Policy Wizard&rdquo; screen, click &ldquo;Next&rdquo; to continue\n\nOn the &ldquo;Internal Mail Server Configuration&rdquo; screen, add all the Exchange hub servers that you want to forward incoming mail to. You also need to add your accepted domains. Then click &ldquo;Next&rdquo;\n\nFor the &ldquo;Internal E-Mail Listener&rdquo; choose the Internal network. You can also specify which IP to listen on if multiple IPs are available. Click &ldquo;Next&rdquo;\n\nFor the &ldquo;External E-Mail Listener&rdquo; choose to listen on the External network and specify the FQDN that will be presented in HELO and EHLO commands.\n\nEnable spam filtering, virus and content filtering. You also have the option to enable EdgeSync Traffic, you should enable this here as it will create the relevant System Policy to allow port 50636 for communication with the Exchange hub transport server.\n\nClick &ldquo;Finish&rdquo; to complete the e-mail policy wizard\n\nTMG will prompt you to create a System Policy, click &ldquo;Yes&rdquo;\n\nOnce done, click &ldquo;Apply&rdquo; to apply the new E-Mail Policy\n\nNext, we setup a new edge subscription, From the TMG Management console, navigate to &ldquo;E-Mail Policy&rdquo; and in the &ldquo;Tasks&rdquo; plane, click &ldquo;Generate Edge Subscription Files&rdquo;\n\nMake a note of where you save this file. Once complete, copy the edge subscription file to your Hub Transport server.\n\nLog on to your Hub Transport server and open the Exchange Management Console, then expand &ldquo;Organization Configuration&rdquo; and click on &ldquo;Hub Transport&rdquo;. Click &ldquo;New Edge Subscription under the &ldquo;Actions&rdquo; menu.\n\nSelect the appropriate AD site and locate the edge subscription file copied from your TMG server. Click &ldquo;New&rdquo;\n\nOnce the wizard completes successfully, click &ldquo;Finish&rdquo;\n\nExpand &ldquo;Organization Configuration&rdquo;, click on &ldquo;Hub Transport&rdquo; and select the &ldquo;Edge Subscriptions&rdquo; tab. You should now see your edge subscription listed there.\n\nOn your Hub Transport server, ensure that the &ldquo;Microsoft Exchange EdgeSync&rdquo; service is set to automatically start.\n\nOn the Hub Transport server, open the Exchange Management Shell and start edge synchronization by issuing the following cmdlet\nStart-EdgeSynchronization\n\nAfter a few minutes, you should be able to verify that your edge synchronization is working by opening the &ldquo;Exchange Management Shell&rdquo; and issuing the following cmdlet:\nGet-SendConnector\n\nNext, We need to verify the authentication settings on the Receive Connectors.\nOn the Hub Transport server, open the Exchange Management Console and expand to \"Server Configuration\", click on \"Hub Transport\", right click on the \"Default Receive Connector\" and select Properties. On the Authentication tab, verify that TLS and Exchange Server authentication are selected.\n\nOn the TMG server, open the TMG Management console and navigate to \"E-Mail Policy\", right click on the \"Internal_Mail_Servers\" route and select Properties. On the Listener tab, click \"Authentication Settings\" and verify that only TLS and Exchange Server Authentication are selected.\n\nLastly, we can configure Antivirus scanning and file filtering settings. In this example I will enable a 3 antivirus engines and configure file filtering to block .EXE files.\nOn the TMG server, open the TMG Management console, click &ldquo;E-Mail Policy, then select the &ldquo;Virus and Content Filtering&rdquo; tab,\n\nClick &ldquo;Select AV Engines&rdquo; on the Tasks Pane. Select one or more engines from the list. The click &ldquo;OK&rdquo;\n\nNext, click the &ldquo;Enabled&rdquo; link below &ldquo;File Filtering&rdquo;. On the File Filters&rdquo; tab, click &ldquo;Add&rdquo; and then on the General tab give it a meaningful name. You can apply the filter to inbound and/or outbound messages.\n\nOn the File Types tab select Microsoft Windows Executable. Click &ldquo;Apply&rdquo;\n\nConfirm that the filter has been added and click &ldquo;OK&rdquo;\n\n\n\nOnce done, click &ldquo;Apply&rdquo; to apply the settings\n\nTo summarise, in this part of the series I configured my E-Mail Policy/ I then created and verified a new Edge Subscription. I finished off by configuring Antivirus and creating a File Filter to block .EXE files.\nIn the next and final part of this series, I&rsquo;ll look at how to securely publish Outlook Web App.\n",
      tags: [],
      id: 155
    });
    

    index.add({
      title: "Securing Exchange 2010 with Forefront Threat Management Gateway (TMG) 2010, Part 4 - Installing Forefront Threat Management Gateway",
      category: null,
      content: "Here we are, Part 4 of the series. To recap what I have done thus far.. I&rsquo;ve installed the Exchange Server Edge role followed by Forefront Protection 2010 for Exchange Server.\nIn this part I install TMG 2010 and perform some basic configuration. The minimum system requirements for TMG 2010 can be found on Microsoft TechNet.\nTo get started, insert your Forefront Threat Management Gateway 2010 installation media and then select &ldquo;Run Preparation Tool&rdquo;\n\nThis launches the &ldquo;Forefront TMG Preparation Tool&rdquo;, read through the notes on the welcome screen and click &ldquo;Next&rdquo;. Read and accept the License Agreement and click &ldquo;Next&rdquo;\nDepending on your environment, select the appropriate Installation Type. I won&rsquo;t be installing a TMG array so I selected &ldquo;Forefront TMG services and Management&rdquo;. Then click &ldquo;Next&rdquo;\n\nOnce all the prerequisite features have been installed, click &ldquo;Finish&rdquo; to launch the TMG 2010 installation wizard.\n\nClick &ldquo;Next&rdquo; on the welcome screen. Read and accept the License Agreement and click &ldquo;Next&rdquo;\nNext you will be presented with the &ldquo;Customer Information&rdquo; page with the Product Serial Number. Once you have entered the appropriate details, click &ldquo;Next&rdquo; and verify the installation path. Change this as appropriate and click &ldquo;Next&rdquo;\n\nNext we need to define our internal network ranges. Be sure to include all of them there, mine are fairly simple and are all included in the range 172.0.0.0-172.0.0.255.\n\nDuring the installation, some services will be restarted. Acknowledge this warning by clicking &ldquo;Next&rdquo;\n\nClick &ldquo;Install&rdquo; to begin the installation.\n\nOnce the installation has completed successfully, click &ldquo;Finish&rdquo;\n\nCongratulations, you now have TMG 2010 installed. Lets look at some basic configuration. The first time you launch the TMG Management Console, you&rsquo;ll be presented with the &ldquo;Getting Started Wizard&rdquo; The first step is to &ldquo;Configure network settings&rdquo;\n\nClick &ldquo;Next&rdquo; to continue and then select the appropriate network template, you&rsquo;ll want to select &ldquo;Edge Firewall&rdquo; here. It should be noted that the &ldquo;Single network adaptor&rdquo; template has many limitations and will not work in our scenario. Click here to read more about single network adapter limitations. Click &ldquo;Next&rdquo; to continue\n\nEnsure that your LAN or &ldquo;Internal&rdquo; network settings are configured correctly and click &ldquo;Next&rdquo; *note the absence of a &ldquo;Default Gateway&rdquo;\n\nThen, ensure that your Internet or &ldquo;External&rdquo; network settings are configured correctly and click &ldquo;Next&rdquo;\n\nClick &ldquo;Finish&rdquo; to complete the network setup wizard.\n\nThe next step is to &ldquo;Configure system settings&rdquo;\n\nClick &ldquo;Next&rdquo; to continue and then confirm the &ldquo;Host Identification&rdquo; settings, note once again that this server is a member of a workgroup and is not part of the domain. Click &ldquo;Next&rdquo;\n\nClick &ldquo;Finish&rdquo; to complete the system configuration wizard\n\nThe final step is to &ldquo;Define deployment options&rdquo;\n\nClick &ldquo;Next&rdquo; to continue and on the &ldquo;Microsoft Update Setup&rdquo; screen, select the appropriate setting and click &ldquo;Next&rdquo;\n\nActivate the relevant licenses and features and click &ldquo;Next&rdquo;\n\nOn the &ldquo;NIS Signature Update Settings&rdquo; screen, select the appropriate setting and click &ldquo;Next&rdquo; if in doubt, just leave the defaults\n\nWould you like to join the &ldquo;Customer Experience Improvement Program&rdquo;? make your selection and click &ldquo;Next&rdquo; and then decide if you would like to participate in the &ldquo;Microsoft Telemetry Reporting Service&rdquo;, make your selection and click &ldquo;Next&rdquo;\nClick &ldquo;Finish&rdquo; to complete the deployment wizard\n\nYou have now completed the &ldquo;Getting Started Wizard&rdquo;\n\nTo summarise, in this part of the series I installed TMG 2010 and then proceeded to perform some basic configuration. In the next part of the series, I&rsquo;ll configure our email policy and create a new Edge Subscription\n",
      tags: [],
      id: 156
    });
    

    index.add({
      title: "Securing Exchange 2010 with Forefront Threat Management Gateway (TMG) 2010, Part 3 - Installing Forefront Protection for Exchange Server",
      category: null,
      content: "Welcome to Part 3! In the pervious part of the series I looked at the process of preparing a Windows Server 2008 R2 server for installation. I then installed the Exchange Server Edge Transport Transport role.\nIn Part 3 of the series I&rsquo;ll install Forefront Protection 2010 for Exchange Server, the installation is fairly quick and painless so it should not take too long! I recommend checking out the minimum system requirements on Microsoft TechNet.\nTo get started, insert your Forefront Threat Management Gateway 2010 installation media and then select &ldquo;Install Microsoft Forefront Protection 2010 for Exchange Server.\n\nThe first step is to read and accept the License Agreement and click &ldquo;Next&rdquo;. &ldquo;During the installation, it may be necessary to stop and start the following services..&rdquo; read and accept this message by clicking &ldquo;Next&rdquo;\n\nSelect the appropriate installation paths and click &ldquo;Next&rdquo;\n\nEnter any proxy server information (if any) and click &ldquo;Next&rdquo;\n\nDecide if you would like to enable Antispam now or later, these settings can be changed again once installed. Click &ldquo;Next&rdquo;\n\nDecide if you would like to enable Microsoft Update and click &ldquo;Next&rdquo; *note: I have selected to not enable Microsoft Update at this time, depending on your environment, your selection may or may not be the same. It is always recommended to keep your servers up to date.\n\nWould you like to join the &ldquo;Customer Experience Improvement Program?&rdquo; decide and then click &ldquo;Next&rdquo;. Once you have confirmed your settings and click &ldquo;Next&rdquo; to begin the installation\n\nOnce the installation has completed successfully, click &ldquo;Finish&rdquo;\n\nTo summarise, in this part of the series I installed Forefront Protection 2010 for Exchange Server on the same server that already has the Exchange Edge Transport role installed from Part 2.\nIn the next part of the series I&rsquo;ll install Forefront Threat Management Gateway 2010 on the same server.\n",
      tags: [],
      id: 157
    });
    

    index.add({
      title: "Moving to Microsoft Exchange Online is easy&hellip;",
      category: null,
      content: "I recently decided to move my personal domain (cgoosen.com), to Microsoft Exchange Online and I thought it would be appropriate to share my experience. I had previously been using my web hosting providers mail service and when I starting having some unusual mail delivery problems I took that as a sign to do what I have been meaning to do for some time now.\nMicrosoft Exchange Online is Microsoft's own hosted enterprise messaging solution based on Microsoft Exchange Server 2007. There are a number of reasons why I chose Exchange Online instead of just going with an Exchange Server based solution from a Microsoft partner, the main reason is that I anticipate this solution will continue to grow in popularity, especially once it is upgraded to Exchange 2010 and more organizations start making use of &ldquo;Hybrid&rdquo; installations.\nI live in Australia, which meant that I had to purchase my Exchange Online services from Telstra Business instead of going directly to Microsoft. Once I had signed up, I was sent a link to the Microsoft Online admin panel. \n \nAt this point, the only Telstra involvement is that they are billing me around $3.50 US per month more that if I was able to go direct to Microsoft and I personally don&rsquo;t see the value they are adding. Just my opinion!\nOnce I had signed in, I was presented with a list of &ldquo;Tasks I need To Do&rdquo;\n \nThe first step is to &ldquo;Add your domain to Microsoft Online Services&rdquo;. You also need to decided if you would like Exchange Online to be authoritative for your domain or not.\n \nAs you would expect, you need to validate that you actually own that domain, this is done by creating a DNS CNAME record on your primary DNS server. Mine only took a couple of minutes.\n \n \nThe next step is to enable inbound messaging and change your MX record.\n \nThe final step is to create some user accounts and assign services to them. The services available depend on the licenses you have purchased.\n&#160;\nUser accounts can be created manually of if you have a large amount of accounts to create, these can be imported from a .CSV file. There are sample and template .CSV files available for download if you are unsure of the format.\n&#160;\nThe entire process was so simple and I was up and running in less than 30 minutes. I would recommend keeping your existing mailboxes in place for at least 48 hours to allow the new MX record to full replicate.\n",
      tags: [],
      id: 158
    });
    

    index.add({
      title: "Securing Exchange 2010 with Forefront Threat Management Gateway (TMG) 2010, Part 2 - Installing Exchange Server Edge",
      category: null,
      content: "In Part 1 of the series I talked about Forefront Threat Management Gateway (TMG) 2010 and how it allows administrators to consolidate their perimeter infrastructure into a single, secure point of entry for email and other messaging related services.\nIn this part of the series, it&rsquo;s time to start getting our hands dirty so to speak and start the installation process. Microsoft recommends the following installation order:\n\nInstall Active Directory Lightweight Directory Services (AD LDS). \nInstall the Exchange Server Edge Transport Transport role. \nInstall Forefront Protection 2010 for Exchange Server. \nInstall TMG 2010 \n\nIn Part 2, we will start by installing Exchange Server Edge. For more information, on the minimum system requirements, see Microsoft TechNet\nTo get started, I have already installed Windows Server 2008 R2. \n\nIt is important to ensure that you have a Primary DNS suffix set, to set this, \n\nRight-click My Computer, and then click Properties. The System Properties dialog box will appear. \nClick the Computer Name tab. \nClick Change. The Computer Name Changes dialog box will appear. \nClick More. The DNS Suffix and NetBIOS Computer Name dialog box will appear. \nEnter the appropriate DNS suffix for the domain. \nSelect the Change primary DNS suffix when domain membership changes check box. \nClick OK to save the changes, and then click OK to exit the Computer Name Changes dialog box. \nClick OK to close the System Properties dialog box, and then restart the computer for the change to take effect. \n\n&#160;\nThe first step is to install Active Directory Lightweight Directory Services (AD LDS), I have elected to do this via the &ldquo;Add Roles Wizard&rdquo; in &ldquo;Server Manager&rdquo;. If you do not already have .NET Framework 3.5.1 installed, it will prompt you to install this feature as well.\n&#160;\n \nOnce this part of the installation has completed, it is time to install the Exchange Server Edge Transport Role. Once you launch Exchange Server 2010 setup, you can click Step 3 and choose your Exchange language option, I&rsquo;m going to be installing only languages on the DVD. Then click &ldquo;Step 4: Install Microsoft Exchange&rdquo;\n \nRead the introduction window of the setup wizard and click &ldquo;Next&rdquo;. Read and accept the License Agreement and click &ldquo;Next&rdquo; again. Make your selection on the &ldquo;Error Reporting&rdquo; window and Click &ldquo;Next&rdquo;. Select &ldquo;Custom Exchange Server Installation&rdquo; on the &ldquo;Installation Type&rdquo; window, verify the installation path and click &ldquo;Next&rdquo;\n \nOn the &ldquo;Server Role Selection&rdquo; window, select &ldquo;Edge Transport Role&rdquo;\n \nRead about the &ldquo;Customer Experience Improvement Program&rdquo; and make your selection about joining. Then click &ldquo;Next&rdquo;&#160; Verify that all Readiness Checks are successful and click &ldquo;Install&rdquo; to proceed with the installation.\n \nOnce the installation process completes successfully, click &ldquo;Finish&rdquo;\n\nTo summarise, in this part of the series I prepared a Windows Server 2008 R2 server by firstly ensuring that it had a Primary DNS suffix set, and installed Active Directory Lightweight Directory Services (AD LDS) and .NET Framework 3.5.1. I then proceeded to install the Exchange Server Edge Transport Role.\nIn Part 3 I&rsquo;ll install Forefront Protection 2010 for Exchange Server.\n",
      tags: [],
      id: 159
    });
    

    index.add({
      title: "Securing Exchange 2010 with Forefront Threat Management Gateway (TMG) 2010, Part 1 &ndash; The Introduction",
      category: null,
      content: "November 2009 was an exciting time.. not only did I turn another year older, but, Microsoft launched both Exchange Server 2010 and Forefront Threat Management Gateway (TMG) 2010. Both of these products were eagerly awaited and while the new features and great benefits of Exchange Server 2010 have already been (and will continue to be!) discussed, I am excited to talk about how TMG 2010 now allows administrators to consolidate their perimeter infrastructure into a single, secure point of entry for email and other messaging related services.\nWhat is Forefront Threat Management Gateway (TMG) 2010? TMG is essentially the next generation of ISA server (we&rsquo;ve all come to know and love ISA 2006 since it&rsquo;s release in late 2006) but with a few fantastic changes. The first of these is that, as with Exchange Server, it is 64bit only. Other new features include URL Filtering, Web antivirus/anti-malware protection and many more.\nI mentioned earlier in the introduction that TMG 2010 allows administrators to consolidate their perimeter infrastructure into a single, secure point of entry, this is done by combining with a couple of other great technologies. It is now possible to install Exchange Edge, Forefront Protection for Exchange Server (FPES) and TMG 2010 on the same server. Management of the Exchange Server Edge, FPES&#160; and TMG 2010 services are all integrated into the TMG Management console greatly reducing management complexity and overhead.\nIn this 6 part series, I&rsquo;ll go through the process of installing Exchange Server Edge, FPES and TMG 2010 on the same server. The series will consist of the following posts:\n\nPart 1 &ndash; The Introduction \nPart 2 &ndash; Installing Exchange Server Edge \nPart 3 &ndash; Installing Forefront Protection 2010 for Exchange Server \nPart 4 &ndash; Installing Forefront Threat Management Gateway 2010 \nPart 5 &ndash; Putting it all together \nPart 6 &ndash; Publishing Outlook Web App \n\nThis series is intended to be a detailed &ldquo;how to&rdquo; so I&rsquo;ll make use of a lot of screen shots of each of the steps of the process. There are many areas (especially when configuring Exchange Server) where making use of the Powershell or Exchange Management Shell (EMS) may be quicker, but I have opted to use the MMC throughout.\nHere is a brief overview of the environment I&rsquo;ll use throughout this series, the environment is my lab environment. Here is a high level diagram of the environment, I&rsquo;ll discuss each server in a little more detail below:\n \ntltmg01.testlab.local: Windows 2008 R2 x64 with 2 NICS (Internal &amp; External) &ndash; This is the Forefront TMG 2010 server with Exchange Server 2010 Edge and Forefront Protection 2010 for Exchange Server installed.\ntlex01.testlab.local: Windows 2008 R2 x64 &ndash; This is the Exchange 2010 Hub Transport and Client Access server.\ntlex02.testlab.local: Windows 2008 R2 x64 &ndash; This is the Exchange 2010 Mailbox server\ntldc01.testlab.local: Windows 2008 x64 &ndash; This is a Domain Controller and Global Catalog. This server also acts as a DNS server and is the Enterprise Root Certificate Authority.\nSome things to look out for.. there are a few important things to look out for when deploying this solution for the first time, there are:\n\n\nTime Sync &ndash; make sure the time on your Exchange servers and TMG/Exchange Edge is perfectly in sync\n\n\nDNS &ndash; Mis-configuring DNS is a very common mistake in ISA/TMG deployments. There are many schools of thought here, but regardless of which one you follow, it is important to note that DNS entries are not NIC specific so make sure you assign a DNS server to either the internal OR external NIC. Your TMG/Exchange Edge server must be able to resolve names internally either through DNS or host entries\n\n\nWorkgroup &ndash; Since we will be installing Exchange Server Edge, our TMG server will NOT be a domain member. It is important to put sufficient thought into how you will configure authentication for both reverse and forward proxy since AD authentication will not work\n\n\nPrimary DNS suffix &ndash; The TMG/Exchange Edge will need it&rsquo;s Primary DNS suffix manually set as it will not be a part of the domain\n\n\n",
      tags: [],
      id: 160
    });
    

    index.add({
      title: "Easy Exchange 2010 CAS pre-req installation",
      category: null,
      content: "Just a short post, hope this will help someone by making Exchange 2010 even easier to deploy. Open Powershell with elevated rights and run the following 3 cmdlets:\n\nImport-Module ServerManager\nAdd-WindowsFeature NET-Framework,RSAT-ADDS,Web-Server,Web-Basic-Auth,Web-Windows-Auth,Web-Metabase,Web-Net-Ext,Web-Lgcy-Mgmt-Console,WAS-Process-Model,RSAT-Web-Server,Web-ISAPI-Ext,Web-Digest-Auth,Web-Dyn-Compression,NET-HTTP-Activation,RPC-Over-HTTP-Proxy &ndash;Restart\nSet-Service NetTcpPortSharing -StartupType Automatic\n\n",
      tags: [],
      id: 161
    });
    

    index.add({
      title: "Vulnerabilities in Microsoft Exchange and Windows SMTP Service Could Allow Denial of Service",
      category: null,
      content: "Microsoft yesterday published Microsoft Security Bulletin MS10-024. This security update resolves one publicly disclosed vulnerability and one privately reported vulnerability in Microsoft Exchange and Windows SMTP Service. The more severe of these vulnerabilities could allow denial of service if an attacker sent a specially crafted DNS response to a computer running the SMTP service. \nKB976323 provides detailed information on the security update for Windows SMTP Service, for Exchange Server specific information, see the following links:\n\nFor Exchange 2000 Server see KB976703 or download here\nFor Exchange Server 2003 SP2 see KB976702 or download here\nFor Exchange Server 2007 SP1 see KB981407 - Update Rollup 10 or download here\nFor Exchange Server 2007 SP2 see KB981383 - Update Rollup 4 or download here\nFor Exchange Server 2010 see KB981401 - Update Rollup 3 or download here\n\n",
      tags: [],
      id: 162
    });
    

    index.add({
      title: "First look at Exchange 2010 SP1",
      category: null,
      content: "The Microsoft Exchange Team yesterday announced the upcoming release of Exchange 2010 Service Pack 1 (SP1). As one would expect, SP1 will include fixes and tweaks including a roll-up of the roll-ups released to date. There will also be several feature enhancements, here is an overview of some of these:\n\nImprovements to the Multi-Mailbox Search: search preview, search result de-duplication &amp; annotation of reviewed items.\nOutlook Web App: Improved reading experience, users will also be able to share their calendars to anonymous viewers via the web (assuming you enable this), the reading pane can be placed on the bottom or the right side.\nMobility: Support for send-as, full implementation of conversation view, and more..\nSeveral new management UI enhancements including: RBAC role management in ECP, Configure MailTips in ECP, Configure Transport Rules in ECP, Configure Database Availability Group (DAG) IP Addresses and Alternate Witness Server in EMC, Recursive public folder settings management (including permissions) in EMC \n\nWhile these are all great feature improvements, I thought I would call out the two that I am very excited about. There are two things that always come up when I talk to customers about Exchange Server 2010 and the integrated archiving capabilities. The first is the lack of ability to provision a user's personal archive to a different mailbox database from their primary mailbox. The second is that users are unable to access their personal archives from Outlook 2007. The good news is that SP1 will enable the support of both these. Thanks guys!\nExchange 2010 SP1 is due for release later this year.\n",
      tags: [],
      id: 163
    });
    

    index.add({
      title: "OCS 2007 R2 on Windows Server 2008 R2 support",
      category: null,
      content: "Microsoft have announced official support for the Microsoft Office Communications Server 2007 R2 member server role on a server that has a Windows Server 2008 R2 operating system installed. Now for the fine print.. the following scenarios are currently not supported on Windows Server 2008 R2:\n\nGroup Chat will not function in a Windows 2008 R2 forest or when Group Chat member servers are joined to a Windows 2008 R2 domain. Some issues with changes in Windows 2008 R2 require a Group Chat Client and Group Chat Admin Tools hotfix, scheduled for mid-April 2010.\nDeploying Group Chat on Windows 2008 R2 is currently not supported. \nUpgrading the operating system to Windows Server 2008 R2 for an existing installation of OCS 2007 R2 is not supported.\nInstalling 32-bit OCS 2007 R2 administration tools on 64-bit Windows 2008 R2 is not supported.Development with Speech Server 2007 Developer Edition and deployment of the Speech Server 2007 role are not supported on Windows Server 2008 R2.\n\nFor more information, see KB 982021\n",
      tags: [],
      id: 164
    });
    

    index.add({
      title: "Busted&hellip; Top 10 Exchange Storage Myths",
      category: null,
      content: "Exchange 2010 includes improvements in performance, reliability, and high availability that enable organizations to run Exchange on a wide range of storage options. Building on improvements to disk input/output (IO) that were introduced in Exchange 2007, the latest version of Exchange requires less storage performance and is more tolerant of storage failures.\nThe Microsoft Exchange Team recently posted the &ldquo;Top 10 Exchange Storage Myths&rdquo; and I thought I would share a lot of that excellent content here\nMyth #1: Exchange requires expensive, high-performing storage . I can't afford large mailboxes!     Reality: Exchange 2010 enables you to implement large, low-cost mailboxes. It performs well on less expensive disks and supports a range of storage options. See the Large Mailbox Vision Whitepaper. \nMyth #2: Exchange 2010 doesn't support storage area networks (SANs).     Reality: Exchange 2010 doesn't support network-attached storage (NAS) (maybe the similar spelling confuses people ?), but it does support a large range of storage options including SAN and DAS. Depending on your high availability model, storage can be configured using RAID or RAID-less (JBOD) storage. Different customers will require different solutions based on their requirements, but everyone has the ability to deploy large mailboxes at low cost. \nMyth #3: I already have a SAN (or I just bought one), so it doesn't make sense to implement DAS. By the way, my SAN can use those less expensive SATA disks too.     Reality: This one is not really a myth, but it is often misunderstood. SAN deployment may make sense for customers as long as you are able to deploy large mailboxes at low cost. Remember that Exchange supports a range of storage options including SAN and DAS. If you are looking to take advantage of multiple independent copies of databases, then consider the full cost of your storage solution. \nMyth #4: JBOD configurations are not practical because the re-seed process after a disk failure takes too long, and this generates too much operational overhead.     Reality: Microsoft IT uses a JBOD configuration very successfully and it can be a very low cost solution. However, a level of operational maturity is required to manage the environment appropriately. There are a multitude of factors that can affect seeding throughput rates, and internally in our JBOD architecture we see between 35-70 GB/hour. \nMyth #5: Large mailboxes perform badly with Outlook.     Reality: Exchange 2010 supports up to 100,000 items per folder, up from 20,000 in Exchange 2007. In addition to this, Outlook 2007 SP1 Feb09 update, Outlook 2007 SP2 &amp; Outlook 2010 provide good performance for Cached Exchange Mode for mailboxes up to 10 GB in size, and even larger (25GB) using faster disks like 7.2K drives or SSD. Larger Mailboxes? The Exchange 2010 store was improved to support very large mailboxes (100 GB+) in online mode and with OWA. You can also use the Exchange 2010 personal archive to reduce mailbox size for Cached Exchange Mode clients. \nMyth #6: When I migrate to Exchange 2010 my database size will explode because Exchange 2010 doesn't have single instance storage (SIS).     Reality: Exchange storage planning guidance has always dictated designing the storage without SIS in mind. SIS reduces Exchange Server's ability to do sequential data access, and the changes made help to provide the 70% IO reduction. Exchange 2010 does provide 20% database compression for HTML/Plain Text Messages. For more details about Exchange 2010 and SIS, see previous post &mdash; Dude, Where's My Single Instance?. \nMyth #7: My Exchange guy knows nothing about storage - it needs to be managed by the storage experts. Less expensive storage is too hard/time-consuming/expensive to manage.     Reality: We know from the many organizations we have talked to who are using DAS (including Microsoft's own deployment), that they have not needed any additional people to manage less expensive exchange storage, nor have they increased their operational costs. When storage is expensive, you can spend a lot of time and resources optimizing for your storage investment. Using less expensive storage enables you to take a conservative approach and enables you to over-provision. The storage is then never touched except for firmware/driver updates or disk failures. You can use server management staff to manage the storage since the tasks are very similar (driver, firmware updates). \nMyth #8: I can't backup large Exchange databases.     Reality: With the ability to have multiple copies of each database, along with features such as single item recovery and lagged copy support, you might not need to use traditional backups. You can also look at reducing the number of backups to weekly or bi-monthly full backups, you can backup from passive database copies, and you can use DPM \"express\" backups to save space. \nMyth #9: We need a 3rd party archiving solution because Exchange data needs expensive storage and we need to put archived data on less expensive storage.     Reality: You can put all Exchange data on less expensive storage, not just the archive data. Co-locate hot and cold data to efficiently utilize large low cost disks and simplify management by using a single storage type. \nMyth #10: All Exchange storage designs must follow the Exchange Mailbox Role Requirements Calculator verbatim, otherwise they will not be supported.     Reality: The Exchange Mailbox Role Requirements Calculator (Exchange 2010 / Exchange 2007) provides design guidelines but does not have anything to do with supportability. The Exchange Solution Reviewed Program (ESRP) - Storage also has information from our storage partners.\nFor more information on large mailboxes, be sure to check out the Large Mailbox Vision Whitepaper.\n",
      tags: [],
      id: 165
    });
    

    index.add({
      title: "Recent Update Rollups for Exchange",
      category: null,
      content: "The last three weeks have seen the release of a couple of update rollups. The first of these was Update Rollup 2 for Exchange Server 2010 RTM.&#160; Article ID: 979611 describes all issues that the update rollup fixes.\nArticle ID: 979784 describes Update Rollup 3 for Exchange Server 2007 Service Pack 2 which was released on 18/03/2010. This update rollup does not apply to Exchange Server 2007 RTM or to Exchange 2007 Service Pack 1. The series of update rollup packages for Exchange Server 2007 SP2 is independent of the corresponding series of update rollups for Exchange Server 2007 RTM or Exchange 2007 SP1. For a list of update rollups that apply to Exchange Server 2007 RTM or to Exchange Server 2007 SP1, see How to Obtain the Latest Service Pack or Update Rollup for Exchange 2007\nImportant information for customers who install the update rollup on computers that are not connected to the Internet:\nWhen you install the update rollup on a computer that is not connected to the Internet, you may experience long installation times. Additionally, you may receive the following message: \n\"Creating Native images for .Net assemblies.\" \nThis behavior is caused by network requests that connect to the http://crl.microsoft.com/pki/crl/products/CodeSigPCA.crl Web site. The network requests look up the certificate revocation list for each assembly that native image generation (NGen) compiles to native code. However, the Exchange Server is not connected to the Internet. Therefore, each request must wait to time-out before it moves on. To fix this problem, turn off the &ldquo;Check for publisher&rsquo;s certificate revocation&rdquo; security option on the server that is being upgraded. To do this, follow these steps:\n\nIn Internet Explorer, select Tools, select Internet Options, and then click the Advanced Tab.\nIn the Security section, click to clear the Check for publisher's certificate revocation check box.\nClick OK to close the Internet Options dialog box.\n\nWhen setup is complete, recheck the &ldquo;Check for publisher&rsquo;s certificate revocation&rdquo; check box.\n",
      tags: [],
      id: 166
    });
    

    index.add({
      title: "Exchange Server Pre-Deployment Analyzer (ExPDA)",
      category: null,
      content: "Microsoft recently released the Exchange Pre-Deployment Analyzer. The Exchange Pre-Deployment Analyzer performs an overall topology readiness scan of your environment. When you run the Exchange Pre-Deployment Analyzer, it provides a detailed report that will alert you if there are any issues within your organization, which could prevent you from deploying Exchange 2010. \nThe checks performed by ExPDA are similar to the pre-requisite checks implemented (ExBPA) in the Exchange 2010 Setup program. However, unlike Exchange 2010 setup, this tool focuses only on overall topology readiness and not the ability to run Exchange 2010 on the local computer. The scan also performs a deep analysis of each existing Exchange 2003/2007 server to verify that it has the necessary updates and configuration in-place to support Exchange 2010.\n \nFor more information about the Exchange Pre-Deployment Analyzer (ExPDA), visit The Microsoft Exchange Team blog here\nTo download ExPDA, click here\n",
      tags: [],
      id: 167
    });
    

    index.add({
      title: "Exchange Server Virtualization",
      category: null,
      content: "I am often asked about virtualization when talking to my customers about Exchange. Virtualization has been a big thing in the industry for a while now, so it makes sense that many customers are looking to take advantage of the many benefits, including server consolidation. What does Microsoft support? Virtualization support has not changed much since Exchange Server 2007 SP1.\nMicrosoft supports Exchange Server in production on hardware virtualization software only when all the following conditions are true:\n\nThe hardware virtualization software is running:      Windows Server 2008 with Hyper-V technology       Windows Server 2008 R2 with Hyper-V technology       Microsoft Hyper-V Server 2008       Microsoft Hyper-V Server 2008 R2       Any third-party hypervisor that has been validated under the Windows Server Virtualization Validation Program (SVVP).\nThe Exchange guest virtual machine:      Is running Microsoft Exchange 2007 SP1 or Exchange 2010.       Is deployed on the Windows Server 2008 and above       Doesn't have the Unified Messaging server role installed. All Exchange server roles, except for the Unified Messaging server role, are supported in a virtualization environment. \nThe storage used by the Exchange guest machine can be virtual storage of a fixed size, SCSI pass-through storage, or iSCSI storage. In a Hyper-V environment, each fixed VHD must be less than 2,040 GB.Virtual disks that dynamically expand or use differencing or delta mechanisms aren't supported by Exchange.\nOnly management software can be deployed on the physical root machine. The root machine should be dedicated to running guest virtual machines. \nMicrosoft doesn't support combining Exchange high availability solutions (SCC, CCR, DAGs) with hypervisor-based clustering, high availability, or migration solutions. DAGs are supported in hardware virtualization environments provided that the virtualization environment doesn't employ clustered root servers.\nVirtual machine snapshots of an Exchange guest virtual machine is not supported. \nExchange supports a virtual processor-to-logical processor ratio no greater than 2:1. For example, a dual processor system using quad core processors contains a total of 8 logical processors in the host system. On a system with this configuration, do not allocate more than a total of 16 virtual processors to all guest virtual machines combined. \nThe operating system for an Exchange guest machine must use a fixed sized disk that has a minimum size equal to 15 GB plus the size of the virtual memory that's allocated to the guest machine. This requirement is necessary to account for the operating system and paging file disk requirements.\n\n&#160;\nFor more detailed information on Exchange Server Virtualization see the following Technet documentation:\n\nMicrosoft Support Policies and Recommendations for Exchange Servers in Hardware Virtualization Environments \nExchange 2010 System Requirements \nMicrosoft server software and supported virtualization environments\n\n",
      tags: [],
      id: 168
    });
    

    index.add({
      title: "Gartner Highlights Key Predictions for IT Organizations and Users in 2010 and Beyond",
      category: null,
      content: "&ldquo;Gartner, Inc. has highlighted the key predictions that herald long-term changes in approach for IT organizations and the people they serve for 2010 and beyond. Gartner's top predictions for 2010 showcase the trends and events that will change the nature of business today and beyond..&rdquo;\nIts a fascinating read, find the full article here\n",
      tags: [],
      id: 169
    });
    

    index.add({
      title: "Exchange 2010 Update Rollup 1 Released",
      category: null,
      content: "Microsoft have announced the release of Update Rollup 1 for Exchange Server 2010.\nFor more information about the rollup and to download it see Article ID: 976573\n",
      tags: [],
      id: 170
    });
    

    index.add({
      title: "Exchange 2010 Server editions",
      category: null,
      content: "About a month ago I wrote a short post about how customers using Exchange 2010 are also able to make use of DAG&rsquo;s for high availability provided that they are using Windows Server 2008 Enterprise edition. \nThe first question that then comes to mind is: &ldquo;Why would I need Exchange 2010 Enterprise edition then?&rdquo;. Standard edition is designed for the mailbox needs of small to medium organizations and is also appropriate for non-mailbox roles in a larger Exchange deployment while Enterprise edition is ideal for larger organizations that may require a greater number of mailbox databases.\nThe following table provides a feature breakdown for each server edition of Exchange Server 2010:\n&#160;\n\n\n\n\nFeature\nStandard edition\nEnterprise edition\n\n\nMailbox Databases\n1 &ndash; 5 databases\n6 &ndash; 100 databases\n\n\nRole based access &amp; control\nYes\nYes\n\n\nTransport resiliency\nYes\nYes\n\n\nRemote powershell\nYes\nYes\n\n\nOnline move mailbox\nYes\nYes\n\n\nWeb-based administration\nYes\nYes\n\n\nMailbox resiliency\nYes\nYes\n\n\n\n",
      tags: [],
      id: 171
    });
    

    index.add({
      title: "Exchange Server 2010 Deployment Assistant",
      category: null,
      content: "Now that Exchange 2010 has been officially launched and made available, I&rsquo;m sure many organisations are already thinking about or planning their deployment. I my opinion, this will be especially true for those who still have Exchange 2003 deployed.\nMicrosoft have once again stepped up and just when you thought they&rsquo;ve outdone themselves, they announce the release of the Exchange Server 2010 Deployment Assistant. This awesome tool is a result of feedback from the early adopters of Exchange 2010 and of course Microsoft wanting to help streamline the experience of deploying Exchange 2010.\n \nThe current version offers the Upgrade from Exchange 2003 scenario.Once the deployment scenario is selected, you are taken through a series of questions and then presented with a list of steps to complete. Each step has a huge amount of valuable information to guide you through your deployment.\n \nAdditional scenarios will be available in early 2010, these include:\n\nUpgrade from Exchange 2007\nUpgrade from Exchange 2003/2007\nNew installation of Exchange 2010\n\nThe Exchange Server 2010 Deployment Assistant can be found here\n",
      tags: [],
      id: 172
    });
    

    index.add({
      title: "Exchange 2007 on Windows 2008 R2",
      category: null,
      content: "Kevin Allison, GM Exchange Customer Experience announced on the Exchange Team blog yesterday that Microsoft will be releasing an update for Exchange 2007 enabling full support of Windows Server 2008 R2. \nMicrosoft had earlier decided not to update Exchange 2007 to support its latest server operating system, Windows Server 2008 R2. This change is a result of customer feedback, so all I can say about it is thanks for listening!\n",
      tags: [],
      id: 173
    });
    

    index.add({
      title: "DAG&rsquo;s supported in the Exchange 2010 Standard edition",
      category: null,
      content: "Microsoft have announced that the new high availability feature of Exchange 2010, namely, Database Availability Group, or DAG will be available in Exchange Standard edition. This is yet another great way they are helping make high availability affordable and appealing to smaller customers.\nIt is also worth mentioning though that since a DAG makes use of Windows Failover Clustering (WFC) included with Windows Server 2008 Enterprise edition, this Windows Server edition is still required.\nFor more info see this UC Blog post\nFor more info on DAG&rsquo;s, click here\n",
      tags: [],
      id: 174
    });
    

    index.add({
      title: "Microsoft Virtualization Best Practices for Exchange Server",
      category: null,
      content: "Microsoft have got a webcast coming up next week to discuss recommendations for virtualizing Exchange server and the benefits of using Hyper-V + System Center for virtualization.\nThe webcast is on Wednesday, Nov. 4 at 10am Pacific time, which is Thursday, Nov 5 at 5am for those in Sydney.\nFor more information and to register for the webcast, click here\n",
      tags: [],
      id: 175
    });
    

    index.add({
      title: "Exchange Remote Connectivity Analyzer has been updated!",
      category: null,
      content: "The Exchange Team have released an updated version of the Exchange Remote Connectivity Analyzer\nThe tool simulates several client logon and mail flow scenarios. When a test fails, many of the errors have troubleshooting tips to assist you in correcting the problem. You may recall reading about it before..\nSome new features include:\n\nUpdated user interface \nNew CAPTCHA implementation\nUpdated the Outlook Anywhere test logic to work with Exchange 2010\nAdded a password confirmation text box to ensure the proper password was entered before running a test. This will reduce the number of tests that fail simply due to a typo in the password.\n\n&#160;\nAdditional tests include:\n\nExchange Web Services - This allows you to perform connectivity testing for Exchange Web Services client such as Entourage. Developers can also use the Service Account Verification test to ensure things are configured and working properly for access with an alternate account or Exchange Impersonation. \nOutbound SMTP - Performs Reverse DNS testing, DNS RBL Checks, and SenderID validation against a provided \"outbound\" IP address\n\n&#160;\n\n",
      tags: [],
      id: 176
    });
    

    index.add({
      title: "Climate Change..",
      category: null,
      content: "That&rsquo;s right, you have not misread the heading.. not the kind of thing you would expect to see on here, right?.. Before you ask, I have not lost my mind, well.. not entirely.. today is Blog Action Day '09 and this year&rsquo;s topic is Climate Change so I thought I would try to talk about that a little. I&rsquo;ll be the first to admit that I am no expert on the subject, I don&rsquo;t drive a Prius and I don&rsquo;t always remember to take my own shopping bags when I go shopping.\nWe've all seen the lists right? &ldquo;25 Ways to Help Curb Climate Change&rdquo;, etc.. etc and these usually contain things like &ldquo;Recycle your newspaper&rdquo; and &ldquo;Take the bus as often as possible&rdquo;. Firstly, who still reads the newspaper? we geeks are all about RSS feeds and Kindle&rsquo;s anyway and if you live in a city, chances are you already take the bus daily.. don&rsquo;t get me wrong, I think these little tips are important, but, I think its time some of these get revised.\nI am a great believer that technological innovation will contribute significantly to reducing the effects of climate change. Other factors, like population growth on the other hand is often overlooked in this debate. Continuous population growth and an expected increase of 2.3 billion people on the planet by 2050 is multiplying the impacts of climate change. Perhaps greater access to family planning is the key? in fact, according to a London School Of Economics study, money spent on contraception is five times more efficient than money spent on clean energy technologies.\nLets look at little ways technology can help. LCD monitors.. not only do they look cooler and take up less room on your desk, they use less than half the power of a traditional CRT.\nOne of my personal favourites is Blackle. &ldquo;Blackle was created by Heap Media to remind us all of the need to take small steps in our everyday lives to save energy. Blackle searches are powered by Google Custom Search&rdquo;. But why? here&rsquo;s why.. An all white web page uses about 74 watts to display, while an all black page uses only 59 watts. lets do a little math and see what could be saved by moving a high volume site to the black format. \nGoogle gets about 200 million queries a day. Let's assume each query is displayed for about 10 seconds; that means Google is running for about 550,000 hours every day on some desktop. Assuming that users run Google in full screen mode on a CRT monitor, the shift to a black background will save a total of 15 (74-59) watts. That turns into a global savings of 8 300 kilowatt-hours per day, or about 3 000 000 kilowatt-hours a year. Now take into account that about 25 percent of the monitors in the world are CRTs, and at 10 cents a kilowatt-hour, that's $75,000.\nIf you are reading this off my actual blog (not via RSS) you are probably looking around right about now and thinking something along the lines of &ldquo;this site is not black!&rdquo; well, yeah.. and I don't get 200 million hits a day either, if i did, it would probably be black.. black is the new white after all.\nOther links:\n\nCisco EnergyWise\nBlack Google Would Save 750 Megawatt-hours a Year\nBlog Action Day\n\n",
      tags: [],
      id: 177
    });
    

    index.add({
      title: "Exchange 2010 launching at Tech-Ed Europe 2009!",
      category: null,
      content: "The Exchange product team have announced that Exchange 2010 is Code Complete and they are looking to launch at Tech&middot;Ed Europe 2009 in early November.\nCongrats guys, great effort!\n",
      tags: [],
      id: 178
    });
    

    index.add({
      title: "How to determine your AD and Exchange Schema version",
      category: null,
      content: "I was looking for a good reference of AD and Exchange schema version numbers yesterday and thought it would be handy to combine all the bits of information I came across into a single post. \nThere are a couple of ways to find the schema version number, I prefer using &ldquo;DSQuery&rdquo; to &ldquo;ADSIEdit&rdquo; so I&rsquo;ll be making use of &ldquo;DSQuery&rdquo; in the following examples.\nTo determine the version of your AD schema, we use &ldquo;DSQuery&rdquo; to find the value of the &ldquo;objectVersion&rdquo; attribute:\ndsquery * cn=schema,cn=configuration,dc=yourdomain,dc=local -scope base &ndash;attr objectVersion\n\nHere is a mapping between the &ldquo;objectVersion&rdquo; attribute value and the AD schema version:\n&#160;\n\n\n\n\n\nValue\n\n\nSchema Version\n\n\n\n&#160;\n&#160;\n\n\n\n13\n\n\nWindows 2000 Server \n\n\n\n\n30\n\n\nWindows Server 2003 RTM/SP1/SP2\n\n\n\n\n31\n\n\nWindows Server 2003 R2\n\n\n\n\n44\n\n\nWindows Server 2008 RTM\n\n\n\n\nTo determine the version of your Exchange schema, we use &ldquo;DSQuery&rdquo; to find the value of the &ldquo;rangeUpper&rdquo; attribute:\ndsquery * CN=ms-Exch-Schema-Version-Pt,cn=schema,cn=configuration,dc=yourdomain,dc=local -scope base &ndash;attr rangeUpper\n\nHere is a mapping between the &ldquo;rangeUpper&rdquo; attribute value and the Exchange schema version:\n&#160;\n\n\n\n\n\nValue\n\n\nSchema Version\n\n\n\n&#160;\n&#160;\n\n\n\n4397\n\n\nExchange Server 2000 RTM\n\n\n\n\n4406\n\n\nExchange Server 2000 SP3\n\n\n\n\n6870\n\n\nExchange Server 2003 RTM\n\n\n\n\n6936\n\n\nExchange Server 2003 SP3\n\n\n\n\n10628\n\n\nExchange Server 2007 RTM\n\n\n\n\n11116\n\n\nExchange Server 2007 SP1\n\n\n\n\n14622\n\n\nExchange Server 2007 SP2\n\n\n\n\n&#160;\nNOTE: in both examples, it is assumed that your domain name is &ldquo;youdomain.local&rdquo;\n",
      tags: [],
      id: 179
    });
    

    index.add({
      title: "\"TechEd Australia Should be a Full Week\"",
      category: null,
      content: "Having attended Tech-ed Australia last week, I cant help but echo my friend and colleague Craig's thoughts. Infact, I thought I would repost something from his blog. The original post can be viewed here\nLast week I attended TechEd Australia in the Gold Coast.&nbsp; I had a great time learning, connecting, talking, networking, teaching, socialising and presenting.&nbsp; Having said that I left the Gold Coast both drained and a bit frustrated.\nWhile there was a lot of content there, there was an awful lot of content that was not there.&nbsp; I was lucky to be one of the speakers in the UC track.&nbsp; There were 12 sessions allocated for the UC track.&nbsp; Nine were focused on Exchange 2010 and three went to OCS 2007 R2.&nbsp; Now, granted, Exchange is a flagship product and 2010 is an exciting release.&nbsp; I would not take anything away from Exchange.&nbsp; But OCS 2007 R2 needed much more coverage.&nbsp; Rewind a year to TechEd 2007 and all the OCS 2007 R2 content was still under embargo so the result of the lack of sessions at TechEd 2009 is that R2 content has not really had a good airing at a large public conference in Australia.\nThis is not due to a lack of speakers &ndash; I submitted two other sessions that did not make the cut.&nbsp; I know other external speakers who put sessions forward that did not get a slot at all.&nbsp; I know the Microsoft UC guys could of done more sessions.&nbsp; Nor is it due to a lack of things to talk about.&nbsp; In pulling together content for our overview session Derrick Buckley and I drew content and inspiration from no fewer that 5 TechEd US sessions!&nbsp; Oh the detail we could of gone into if we had had the time.&nbsp; Edge Services, Conferencing Solutions, Group Chat Architecture and UC Applications could all easily be sessions in their own right.\nSo if we need more room in the UC track (among others) and we can&rsquo;t trim back on the existing content because we need that too, what&rsquo;s the solution.&nbsp; Simple really.&nbsp; TechEd Australia should be five days long, like the one in the US is.\nNow, I know that events cost money and extending TechEd Australia to five days would not come cheap &ndash; but there must be a way.&nbsp; One suggestion I would put forward would be to combine TechEd Australia and TechEd&nbsp; New Zealand into one ANZ event.&nbsp; Surely it would be cheaper to run one event for 4000-5000 people than two for 2500 each.&nbsp; Also with fewer flights and nights of accommodation for the US speakers that hit Australia and New Zealand perhaps we could get more US speakers out here for the same money?&nbsp; More days, more colleagues, more experts and more content.&nbsp; It sounds like a winner to me.\nNow &ndash; in reality this would probably mean canning TechEd NZ and just having one in Australia since there are no venues in NZ big enough to host an event that size.&nbsp; I use to live in NZ and I would of crossed the Tasman to attend TechEd in Australia if need be, but I&rsquo;m sure there will be plenty of naysayers.&nbsp; Even now, if NZ builds a venue I would happily cross the ditch in the other direction to attend an ANZ TechEd in New Zealand.\nI tweeted this thought the other day and got a few comments back from people who thought two more days would be great if their livers could hold out.&nbsp; What say you Microsoft?\n",
      tags: [],
      id: 180
    });
    

    index.add({
      title: "Tech-ed 2009 update: Forefront TMG",
      category: null,
      content: "Today I attended the SEC208 session with Jamie Sharp which really provided a great overview of Microsoft Forefront Threat Management Gateway (TMG). If you use and like ISA server, you&rsquo;ll love TMG.\nSome of the great new things we can look forward to are web filtering, URL filtering and it also has built in Exchange Edge Server functionality which means if you have an Exchange Edge Server role deployed and also use ISA server, you can now consolidate these into a single server. Another cool thing is, like Exchange Server 2010, TMG will only be available in 64bit.\nTMG is currently available as beta3, click here to download it. It is expected to be RTM towards the end of the year.\n",
      tags: [],
      id: 181
    });
    

    index.add({
      title: "Tech-ed 2009 update: BPOS rocks!",
      category: null,
      content: "If you are attending tech-ed, make sure you get your Business Productivity Online Suite (BPOS) account setup.. I have been most impressed by BPOS.\nWhat's BPOS? click here\n\n",
      tags: [],
      id: 182
    });
    

    index.add({
      title: "Chris&rsquo;s guide to tech-ed Australia 2009!",
      category: null,
      content: "So you&rsquo;ve arrived in the Gold Coast, checked in, unpacked, visited the gym and checked out the pool (right?) now what? I was planning which sessions to attend over the next few days and thought it would be a good idea write a post about it.\nFirstly, I would definitely recommend that you get to registration as soon as possible to avoid the rush! Registration will be open until 9pm tonight and then again from 7am tomorrow morning. Once registered you can also pick up your HP Mini Notebook (of course I am writing this post on it!), there is an &ldquo;unpacking area&rdquo; in the convention centre if you would like to dispose of the box and packaging.\n \nThere is a welcome reception at the exhibition hall betweenn 6pm and 9pm and the opening keynote is tomorrow at 08:15am. All this info is in the mini-guide.\nAs far as sessions go, here are some of the ones I am looking forward to attending:\nWednesday:\n09:45am &ndash; 11:00am UNC201 - Introduction to Exchange 2010 with Johann Kruse and Roger Lawrence\n11:30am &ndash; 12:45pm UNC302 - Exchange 2010 Architecture with Scott Schnoll\n&#160;\nThursday:\n08:15am &ndash; 09:30am UNC305 - Exchange 2010 Voicemail with Mario D'Silva\n5:00pm &ndash; 6:15pm UNC309 - OCS 2007 R2: Overview &amp; Architecture with Derrick Buckley and Craig Pringle\n&#160;\nFriday:\n08:15am &ndash; 09:30am SEC310 - IAG... the success story with Jean-Pierre Simonis\n11:30am &ndash; 12:45pm &ndash; UNC311 - Telephony in OCS R2 with Brendan Carius and John Smith\n&#160;\nThere are of course other events going on, one of which is Sydney UC and Melbourne OCS User Group get together on Thursday. click here for more info\nCant make it to tech-ed this year? no need for tears&hellip; many sessions are available on live meeting, click here for more info\nand finally, yes, of course I will be tweeting all week! be sure to follow me on twitter!\n",
      tags: [],
      id: 183
    });
    

    index.add({
      title: "Microsoft Exchange Server Jetstress 2010 Beta",
      category: null,
      content: "Jetstress has been updated to support Exchange 2010. The beta build is now available. There are a few significant changes in this version, for a comprehensive list, see the following post on The Exchange Server Team blog.\nTo download Jetstress 2010 Beta, click here\n",
      tags: [],
      id: 184
    });
    

    index.add({
      title: "Exchange 2007 SP2 Released",
      category: null,
      content: "Microsoft recently announced the release of Exchange 2007 SP2. One of the key and long awaited features of SP2 is that it sets the foundation for the transition to Exchange Server 2010, which is expected to be available soon. Other features include:\n\nEnhanced Auditing\nExchange Volume Snapshot Backup Functionality\nDynamic Active Directory Schema Update and Validation\nPublic Folder Quota Management\nCentralized Organizational Settings\nNamed Properties cmdlets\nNew User Interface for Managing Diagnostic Logging\n\nFor more&#160; detailed information, see the release announcement on The Microsoft Exchange Team Blog. To download it, click here\n",
      tags: [],
      id: 185
    });
    

    index.add({
      title: "ISA 2006 Remote SQL Logging &ldquo;the data area passed to a system call is too small..&rdquo;",
      category: null,
      content: "I recently came across a very interesting problem while configuring ISA 2006 logging to a remote SQL server. If you have ever done this, you&rsquo;ll no doubt know that its not a very complicated thing to do &ndash;in fact, Richard Hicks has a great guide on his blog, here. It really surprised me when I was not able to get it working, I&rsquo;ve done it many times before and I have never had any problems.\nI checked connectivity to my SQL server using telnet and the \"Test&rdquo; button when performing the configuration, everything seemed fine, but no data was appearing in the database\n \nOn the SQL server, a temp table was being created, no rows inserted and the stored proc to copy the rows from the temp table to the permanent one never got called. The session appeared to wait with \"async_network_io\"\nAfter speaking to Microsoft and performing a ISA trace, it appeared that there is some buffer issue (insufficient buffer) when ISA is trying to insert the log record to the SQL server. It looked like the problem happened before writing to SQL. This also explained why there was no row inserted into the temp table, and the SP to move the record from temp table to permanent one had never been called.\nIt turns out that the string format call which generates an EXEC SP statement to insert log records only has a buffer of 100 characters and the combination of my server name and table name exceeded this. Shortening the table name fixed the problem.\n",
      tags: [],
      id: 186
    });
    

    index.add({
      title: "ISA 2006 Disable Lockdown on log failure",
      category: null,
      content: "In Microsoft ISA Server, alerts can be configured to shut down the Microsoft Firewall service when situations that raise specific events occur. Whenever the Firewall service shuts down, ISA Server goes into lockdown mode, in which only specific types of traffic are allowed. ISA Server can leave lockdown mode only when the Firewall service is restarted. By default, the built-in Log failure alert shuts down the Firewall service. This alert is triggered by the Log failure event, which is raised when a logging failure occurs. You can prevent logging failures from causing ISA Server to go into lockdown by disabling the action of the Log failure alert that shuts down the Firewall service.\nMicrosoft have documented this on Microsoft Technet, although this solution is documented for ISA 2004, it seems to work just fine for ISA 2006. The only problem I encountered is that the script on Technet seems to have be &ldquo;text wrapped&rdquo; so it comes up with syntax errors.\n&#160;\n***WARNING*** \nI am not in any way suggesting that this script should be run on your ISA servers. Lockdown mode is not a bug and was included in the product by design, there are many reasons why it is a good thing so my advice is that you consider all options very carefully before running this script. ALWAYS backup your configuration first!!\n&#160;\nI have corrected the syntax errors, DisableLockdownOnLogFailure.vbs can be downloaded here\n",
      tags: [],
      id: 187
    });
    

    index.add({
      title: "Exchange 2007 SP1 Setup failed due to insufficient permissions",
      category: null,
      content: "I came across this error for the first time the other day, not entirely sure why I have not seen it before on Win 2008. This particular server was Windows 2008 Ent with SP2.\n&ldquo;Setup failed due to insufficient permissions&hellip;.&rdquo;\n \nAt first I thought it was pretty obvious that my account did not have the correct permissions, right? that's what the error suggests.. checked AD and it turns out I had been granted the correct permissions. What else could it be? As a test, I tried to open the Security Log and that worked.. I was a little confused. Then I realised what it was.. UAC\nUser Account Control (UAC) is a technology and security infrastructure introduced with Microsoft's Windows Vista operating system. It aims to improve the security of Microsoft Windows by limiting application software to standard user privileges until an administrator authorizes an increase in privilege level. In this way, only applications that the user trusts receive higher privileges, and malware should be kept from receiving the privileges necessary to compromise the operating system. In other words, a user account may have administrator privileges assigned to it, but applications that the user runs do not also have those privileges unless they are approved beforehand or the user explicitly authorizes it to have higher privileges. Windows 2008 also uses UAC.\nThe workaround I used was to turn off UAC and reboot the server, setup worked perfectly after that.\nTo turn off UAC, go to &ldquo;Control Panel&rdquo;, then &ldquo;User Accounts&rdquo;.\n\n",
      tags: [],
      id: 188
    });
    

    index.add({
      title: "Exchange 2007 Update Rollup 9 Released",
      category: null,
      content: "Microsoft have released Update Rollup 9 for Exchange 2007 SP1. This rollup includes included many bug fixes, but also enables support for Windows Server 2008 R2 Domain Controllers in the environment. For a full list of the issues that the update rollup fixes, click here\nUpdate Rollup 9 for Exchange Server 2007 SP1 is a cumulative update. This update replaces rollups 1 &ndash; 8.\nTo download and for more information, click here\n",
      tags: [],
      id: 189
    });
    

    index.add({
      title: "Helpful Error Message..",
      category: null,
      content: "After a long day of troubleshooting ISA 2006 array problems, I must say, I felt like one after I saw this error:\n&#160;\n\n",
      tags: [],
      id: 190
    });
    

    index.add({
      title: "High Availability in Exchange Server 2010",
      category: null,
      content: "There has been a serious lack of original content on my blog this month, with the financial year coming to an end here in Australia, I&rsquo;ve been flat out\nNever fear though, Scott Schnoll over at The Microsoft Exchange Team Blog has put together a great 4 part video series on high availability in Exchange Server 2010:\nIn Part 1 he introduces the concept of database mobility, and the features known as database availability groups (DAGs) and mailbox database copies.\nIn Part 2 he demonstrates how to create a DAG and how to add mailbox servers to a DAG\nIn Part 3 he shows how to add a mailbox database copy\nand, in Part 4 he performs a database switchover using the Exchange Management Console (EMC)\n",
      tags: [],
      id: 191
    });
    

    index.add({
      title: "Free OCS 2007 R2 e-books..",
      category: null,
      content: "For the next few days you can download free copies of some MS Press e-books on OCS 2007 R2.. visit Johann&rsquo;s Blog here for more info\n",
      tags: [],
      id: 192
    });
    

    index.add({
      title: "Did you know?",
      category: null,
      content: "I first saw this at a Quest Software presentation a little while ago, fascinating stuff:\n&#160;\n\n\n\n",
      tags: [],
      id: 193
    });
    

    index.add({
      title: "No 32-bit support in Exchange 2010!",
      category: null,
      content: "That&rsquo;s right.. as we already know, when Exchange 2007 was released, a 32-bit version (which was unsupported in production environments) was made available for use in lab environments, for demos etc.\nThis will not be the case with Exchange 2010 as Microsoft will not be shipping a 32-bit version at all. What now? well.. I&rsquo;m sure we&rsquo;ll all agree that this a probably a good thing in the long run, forcing organisations to start seriously considering the deployment of 64-bit servers for things other than Exchange, like, for example DC&rsquo;s.\nIt certainly is the start of a interesting journey, hopefully other software vendors will be prompted to start making more of an effort to make their applications 64-bit compliant too, it is, in my opinion, long overdue!\n",
      tags: [],
      id: 194
    });
    

    index.add({
      title: "Exchange 2010: The Future of Collaboration Webcast",
      category: null,
      content: "The webcast will be hosted by Johann Kruse on Friday, June 19, 2009 11:00 AM Australia (East). To register for this webcast, click here\n",
      tags: [],
      id: 195
    });
    

    index.add({
      title: "Exchange Server 2007 SP 2 due in Q3 2009",
      category: null,
      content: "Microsoft recently announced that Exchange 2007 SP2 has been slated for release later this year. Exchange Server 2007 SP2 enables customers to increase their operational efficiency and it sets the foundation for the transition to Exchange Server 2010, which is expected to be available in the second half of 2009. In case you haven&rsquo;t heard, a public beta of Exchange Server 2010 is available for download here\nKey new features of Exchange Server 2007 SP2 include: \n\nEnhanced Auditing\nDynamic Active Directory Schema Update and Validation\nPublic Folder Quota Management\nCentralized Organizational Settings\nNamed Properties cmdlets\nNew User Interface for Managing Diagnostic Logging\nExchange Volume Snapshot Backup Functionality\n\nThe last feature is worth expanding on as it has been the subject of much discussion. Exchange 2007 SP2 will ship with a backup plug-in that will enable Windows Server Backup to backup Exchange data. A few things worth noting about this are:\n\nThe backup is volume-based and as such there is no specific \"Exchange only\" granularity\nOnly VSS backups are supported\nThe backup will support backing up to a local hard disk or network share\nThere is no remote server backup functionality\nThe plug-in supports only full backups of the active copy if using CCR\nWhen restoring, you do not have to restore the whole backed up volume, but can choose to restore only Exchange application data\nRecovery can be done either in-place or out of place\nYou will be able to open different \"backup sets\", even if they were created on servers different than the one where you are restoring\n\nDetailed documentation will be available when SP2 ships, but for more detailed information, check out this post on the Exchange Team Blog\nFor more detailed information about Exchange 2007 SP2, click here\n",
      tags: [],
      id: 196
    });
    

    index.add({
      title: "Exchange 2010 &ldquo;Typical Installation&rdquo;: Part 2",
      category: null,
      content: "In Part 1 we looked at preparing our server for the installation of Exchange 2010. What about preparing Active Directory and domains? As you&rsquo;ll see during the installation, if you run the Exchange 2010 Setup wizard with an account that has the permissions required to prepare Active Directory and the domain, the wizard will automatically do it for you. You can, of course, prepare Active Directory manually the way you have always been able to &ndash; Refer to Microsoft Technet for more information.\nIf you&rsquo;ve reached this phase of the installation you&rsquo;ve probably already downloaded a copy of the Exchange 2010 Beta. If not, simply click here to download it!\nOnce extracted, launch the Exchange 2010 Setup wizard..\nIf you have not installed all the prerequisites, Setup will link you to the appropriate sites where you can download the components. We did this in Part 1, so we simply click &ldquo;Step 4: Install Microsoft Exchange&rdquo;\n\nAfter clicking &ldquo;Next&rdquo; on the Introduction page, we are presented with the following options relating to the location of the language files. I selected the &ldquo;Download latest language files from the Web&rdquo; option.\n \n \nOnce you acknowledge the confirmation, the Setup wizard will &ldquo;acquire&rdquo; the latest language files.\n \n \nAccept the License Agreement and click &ldquo;Next&rdquo;\n \n \nNext we select the installation type, here we select &ldquo;Typical Exchange Server Installation&rdquo; which will install the Hub Transport, Client Access and Mailbox Server Roles on our single server. Because we selected the &ldquo;Typical Exchange Server Installation&rdquo; option, we will not be able to install the Unified Messaging Server Role, Edge Transport Server Role, or Clustered Mailbox servers during this installation.\n \nBecause this is the first Exchange Server in the organization, we are asked to provide a name for the Organization. The Exchange organization name can't contain more than 64 characters and can contain only the following characters: \n\nA to Z\na to z\n0 to 9\nSpace (not leading or trailing)\nHyphen or dash\n\n \nSince this is the first Exchange Server in the organization, on the &ldquo;Client Settings&rdquo; page we select the option that describes the client computers in our organization that are running Microsoft Office Outlook. If you select &ldquo;No&rdquo;, Exchange Setup will not create a public folder database on the Mailbox server. You can add a public folder database later. For example, if you add client computers that are running Outlook 2003 and you need a public folder database, you can create one on the Exchange Mailbox server. You must then configure the offline address book for public folder distribution, and then restart the Microsoft Exchange Information Store service before client computers that are running Outlook 2003 and earlier will be able to connect to the server.\n \n \nOn the &ldquo;Readiness Checks&rdquo; page, view the status to determine if the organization and Server Role prerequisite checks completed successfully. If they have completed successfully, click &ldquo;Install&rdquo; to install Exchange.\n \n \nCongratulations, you have successfully completed a &ldquo;Typical Installation&rdquo; of Exchange 2010. I highly recommend reading the Exchange 2010 documentation on Microsoft Technet.\n",
      tags: [],
      id: 197
    });
    

    index.add({
      title: "Exchange 2010 &ldquo;Typical Installation&rdquo;: Part 1",
      category: null,
      content: "Since the release of Exchange 2010 Beta last month, I have been itching to deploy it in my test environment and really get my hands dirty. I have split this post into 2 parts because I want to use screen shots (hey, I&rsquo;m a techie, we like pictures!) to really show off the product.\nIn part 1 of this 2 part post, we&rsquo;ll look at how to prepare your server for a &ldquo;Typical Installation&rdquo; of Exchange. Notice how &ldquo;Typical Installation&rdquo; appears in quotation marks, this is because we refer to a &ldquo;Typical Installation&rdquo; when the Hub Transport, Client Access and Mailbox server roles are installed on a single server. Regardless of the installation options you use, installing Exchange does require a certain degree of planning and preparation.\nTo give you a brief overview of my test environment: I have a single Active Directory domain and all my servers are running Windows Server 2008, 64bit SP1. IPv6 is disabled on all my servers.\nExchange 2010 requires the following to be installed prior to installation (I completed my installation in the following order as well):\n\nMicrosoft .NET Framework 3.5.\nServerManagerCmd -i RSAT-ADDS \n\n \n\nWindows Remote Management ( WinRM ) 2.0 Community Technology Preview 3 (CTP3). \nWindows PowerShell V2 CTP3. \nUpdate for the Microsoft Management Console (MMC) in Windows Server 2008. See KB951725.\nExtensions for ASP.NET AJAX 1.0. \n2007 Office System Converter: Microsoft Filter Pack. \nServerManagerCmd -i Web-Server\nServerManagerCmd -i Web-ISAPI-Ext\nServerManagerCmd -i Web-Metabase\nServerManagerCmd -i Web-Lgcy-Mgmt-Console\nServerManagerCmd -i Web-Basic-Auth\nServerManagerCmd -i Web-Digest-Auth\nServerManagerCmd -i Web-Windows-Auth\nServerManagerCmd -i Web-Dyn-Compression\nServerManagerCmd -i NET-HTTP-Activation\nServerManagerCmd -I RPC-over-HTTP-proxy\n\n&#160;\n\nMsdrm.dll Update. See KB950888\nLoad Balancing Update. See KB958178\n\n&#160;\nIn Part 2, its&#160; we&rsquo;ll look at the exciting stuff, the actual installation.\n",
      tags: [],
      id: 198
    });
    

    index.add({
      title: "Exchange 2010 Beta released",
      category: null,
      content: "We&rsquo;ve all been waiting for it for some time now, Microsoft announced the release of Exchange 2010 Beta last week. \nExchange 2010 was built from the ground up with Software + Services in mind with more than 5 million users are already enjoying the benefits of Exchange 2010 as a service today.\nExchange 2010 will help organizations reduce costs, protect communications and delight e-mail users with capabilities to do the following:\n\nLower costs with more flexible deployment and management options.\nProtect information and meet compliance requirements with the new e-mail archive.\nImprove user productivity with the ultimate inbox experience.\n\nExchange 2010 brings many new and exciting features to the table, for an overview of these, check out this video on Technet Edge\nTo download the Exchange 2010 Beta, click here\n",
      tags: [],
      id: 199
    });
    

    index.add({
      title: "Exchange 2007 Post Deployment Testing: Part 2",
      category: null,
      content: "In part 1 of this series, I wrote about how to go about testing your new deployment by making use of several &ldquo;Test-&ldquo; cmdlets in EMS. The Exchange Server Remote Connectivity Analyzer is a great way to test external access. The Exchange Server Remote Connectivity Analyzer (https://www.testexchangeconnectivity.com/) allows administrators to perform the following remote tests:\n\nMicrosoft Exchange ActiveSync Test \nMicrosoft Exchange ActiveSync AutoDiscover Test \nMicrosoft Office Outlook 2007 Autodiscover Connectivity Test \nMicrosoft Office Outlook 2003 RPC/HTTP Connectivity Test \nInbound SMTP Email Test \n\n&#160;\nIn the below example, we&rsquo;ll perform an Inbound SMTP Email Test:\n \n \n \nThe above process generates a test email that looks similar to this:\n \nIn summary, the Exchange Server Remote Connectivity Analyzer is a great tool for testing remote functionality of your Exchange environment. For more information on this tool, including a short introduction video, click here\n",
      tags: [],
      id: 200
    });
    

    index.add({
      title: "How to find and export mailboxes by size in Exchange 2007",
      category: null,
      content: "My friend Nicolas recently wrote a great post on how to find and export mailboxes by size from the Exchange Management Shell (EMS). I&rsquo;m sure many administrators will find this pretty handy. \nRead his post here\n",
      tags: [],
      id: 201
    });
    

    index.add({
      title: "Burn .ISO to disk natively with Windows 7",
      category: null,
      content: "I found a really neat little feature today, Windows 7 allows you to burn .ISO files to disk natively without any third party software. \nSimply double-click the .iso image:\n\nSelect the appropriate drive and click &ldquo;Burn&rdquo;\n\nAnd there you go..\n It seems my friend Craig blogged about this a little while ago as well, click here to read his post\n",
      tags: [],
      id: 202
    });
    

    index.add({
      title: "Exchange 2007 Post Deployment Testing: Part 1",
      category: null,
      content: "After your planning and deployment phases have been completed, its very important to ensure proper testing of your new environment before moving user accounts and putting the servers into production. Exchange 2007 provides several powershell cmdlets that make it really easy.\na list of all test cmdlets can be obtained by issuing the Get-Command Test* cmd in EMS.\n&#160;\nFor the purposes of this post, lets look at a couple of these:\nTest-Mailfow\nThe Test-Mailflow cmdlet is used to check whether mail can be successfully sent from and delivered to the System Mailbox mailbox on a computer that has the Mailbox server role installed.\n \nTest-ServiceHealth\nUse the Test-ServiceHealth cmdlet to test whether all the required services that are configured to start automatically on a server have started. The Test-ServiceHealth cmdlet returns an error for any service that is required by a configured role and is set to start automatically but is not currently running. The output will vary depending on the role of the server you issue the cmd on.\n \n \nFor a full list of cmdlets, see Microsoft Technet\n",
      tags: [],
      id: 203
    });
    

    index.add({
      title: "Exchange 2007 Update Rollup 7 Released",
      category: null,
      content: "A mere 5 weeks after Update Rollup 6, Microsoft have released Update Rollup 7 for Exchange 2007 Sp1. The update fixes around 50 issues.\nFor more info on the update and to download it, see KB953469&#160;\nI would like to highlight the following:\n&ldquo;Note Certain Exchange Server 2007 managed code services may not start after you install this update rollup. This is true if the services cannot access the following Microsoft Web site:   http://crl.microsoft.com/pki/crl/products/CodeSigPCA.crl \nFor more information about how to resolve or to work around this issue, click the following article number to view the article in the Microsoft Knowledge Base:    944752 Exchange 2007 managed code services do not start after you install an update rollup for Exchange 2007&rdquo;\nI also strongly recommend reading the &ldquo;Known Issues&rdquo; section before applying this update.\n",
      tags: [],
      id: 204
    });
    

    index.add({
      title: "Quest Software&rsquo;s UC Solutions",
      category: null,
      content: "Quest have some really cool products to add value to UC implementations (like you need it, right?)\nSome of the key products are:\nSpotlight on Messaging:     Spotlight&reg; on Messaging helps administrators get more out of their messaging environments by diagnosing and resolving problems across multiple platforms. A comprehensive view into an organization&rsquo;s messaging infrastructure, Spotlight on Messaging:\n\nReduces cost and improves productivity by identifying issues and performance bottlenecks before they affect end users\nAccelerates problem resolution by significantly reducing the time-to-resolution during outages     Improves system performance by maximizing the availability and responsiveness of messaging servers\n\n&#160;\nMessageStats:    MessageStats is the most complete and comprehensive messaging reporting and analysis solution in the industry. Used on more than 15 million Exchange mailboxes around the world everyday, MessageStats helps reduce and quantify your Exchange investment. An essential tool to keeping tabs on the cost of your infrastructure, MessageStats gathers, analyzes, and reports on Exchange and other messaging components to: \n\nBetter understand usage and trends\nFind unused and excess capacity\nJustify expenses\nOptimize operational efficiencies \n\nProviding a complete view of all messaging components from one interface, MessageStats delivers platform-specific business- and technical-focused reports for:\n\nBlackBerry\nWindows Mobile\nMicrosoft Office Communications Server \nMicrosoft Exchange\nOutlook Web Access\nAnd more..\n\n&#160;\nFor more info on these and other value add products from Quest Software, visit their site here\n",
      tags: [],
      id: 205
    });
    

    index.add({
      title: "Lenovo T61 Biometric Device on Windows 7",
      category: null,
      content: "After rebuilding my trusty T61 with Windows 7 about a week ago, the only device that was not functioning correctly was the &ldquo;biometric coprocessor&rdquo;. I tried installing the software using ThinkVantage Productivity Center, but this did not work. After asking google, I found that the device was manufactured by UPEK and that they have released a Windows 7 driver on their site. Download it here.\nThe process of enrolling a fingerprint is fairly simple in Windows 7. Open Control Panel, select &ldquo;Biometric Devices&rdquo;\n \nSelect &ldquo;Use your fingerprint to log on to Windows&rdquo;\n \nWhen prompted, enter your password\n \nSelect the appropriate finger (its probably a good idea to select more than one!)\n \nFollow the instructions:\n \nAll done!, next time you log on, just use your finger!\n",
      tags: [],
      id: 206
    });
    

    index.add({
      title: "IBM Lotusphere Comes to You 2009",
      category: null,
      content: "Yesterday I attended the IBM Lotusphere Comes to You event here in Sydney. I was excited to see what the IBM Unified Communications strategy would be and ended getting a lot more than I had bargained for.\nThe event covered a large part of their portfolio from Messaging and Collaboration, UC and Web Portals to Cloud Computing. As a consultant, I have always taken an interest in what &ldquo;the other guys&rdquo; are doing, but, being honest, the last time I saw Domino was back in version 6. \nI was most impressed with how slick the Notes 8.5 client looks and the fact that they have integrated everything into a single client whether it be IM, voice &amp; video, document libraries, opening and editing MS Office docs with Symphony, even SAP integration, it can all be done via the Notes 8.5 client.\nOne of the themes that became immediately obvious was value.. ROI is important, especially in today&rsquo;s economic climate and IBM seem to be on top of that, a great example is Lotus Symphony which is a free, MS Office compatible suite that includes a word processor, spreadsheet editor and presentation editor. I was also impressed by the fact that IBM have realised that (as predicted by Gartner) Apple&rsquo;s market share in the desktop space is growing and that Windows may not always be the desktop OS of choice, and I think they have catered for this really well by making their software platform independent so it will run on Windows, OSX, and Linux.\nIn the Cloud Computing space, LotusLive is their solution to online collaboration and it is available now, offering online meetings, hosted email and more.\nSo, what about UC and more specifically, voice stuff? does &ldquo;the pbx killer&rdquo; a.k.a OCS R2 have some competition? IBM are calling it UC&sup2; and, well.. I liked what I saw, they certainly have some innovative little features, very easy to use and will certainly make collaboration &ldquo;child&rsquo;s play&rdquo;. They are certainly working with an impressive list of business partners as well. I would say though, that with the maturity of OCS R2 and the fact that it is available now I think IBM may just have missed the boat a little. UC&sup2; will be available &ldquo;later this year&rdquo; and given the momentum OCS already has, it&rsquo;s going to be interesting..\n \nGartner Magic Quadrant for Unified Communications\n",
      tags: [],
      id: 207
    });
    

    index.add({
      title: "Windows 7 and Cisco VPN Client",
      category: null,
      content: "So, managed to get everything installed and working great yesterday, really fought with the Cisco VPN client, but I eventually managed to get it working (or so I thought!) installed all windows updates before shutting down last night .. arrived at the office a little earlier this morning, turn my laptop on, BLUE SCREEN OF DEATH!, happened a few times yesterday while I was fiddling with the Cisco VPN client so I figured I&rsquo;d just repair it and try again, only, this time I was not so lucky..\nTo cut a long and frustrating story short: Windows 7 rebuilt and looking good again..\nFor the Cisco VPN client, I tried many things, this is how I managed to get it to work:\n\nInstall Citrix DNEupdate\nReboot\nTake ownership and delete ndis.sys (in c:\\windows\\system32\\drivers).\nTake ownership and delete ndis.sys.mui (in c:\\windows\\system32\\drivers\\en-us).\nInstall Cisco VPN Client 5.0.04.0300.\nReboot\nWindows 7 will repair itself (should take a few seconds) and automatically reboot.\nCisco VPN Client should work without any other tweaks.\n\nMany thanks to Aaron Tiensivu for posting this on his blog, read it here\n",
      tags: [],
      id: 208
    });
    

    index.add({
      title: "Windows 7: My initial thoughts..",
      category: null,
      content: "While some of my &ldquo;bleeding edge&rdquo;&rdquo; colleagues have been running and blogging about Windows 7 for a while now, its taken me a little longer to get my hands dirty. I decided to rebuild my Lenovo T61 yesterday and see what all the fuss was about.\nThe installation was seamless and quick, as you would expect. It found drivers for all my devices. I did have some trouble getting my Novatel Wireless 3G HSDPA card to work, the installation would not run at all, not even using Windows Vista compatibility mode. I downloaded the drivers off the Novatel website and managed to get the card installed that way. Works perfectly after I created a new connection through &ldquo;Network and Sharing Center&rdquo;\nAt the moment, I am very much of the opinion that it is Windows Vista with some cosmetic changes, but that&rsquo;s probably unfair of me to say since I have only been using it for a few hours. I&rsquo;ll be sure to report any cool new features.\nNow I have to make it productive so I can get some work done when I get into the office tomorrow!\n",
      tags: [],
      id: 209
    });
    

    index.add({
      title: "Exchange 2007 SP1 Moving Mail Queue/Transport Dumpster",
      category: null,
      content: "UPDATE: For information on how to move the Exchange 2010 Mail Queue, see \"Exchange 2010 Moving Mail Queue\"\nOne problem that Exchange Administrators run into after successfully transitioning to Exchange 2007 is back pressure. Back pressure is a system resource monitoring feature of the Microsoft Exchange Transport service that exists on computers that are running Microsoft Exchange Server 2007 that have the Hub Transport server role or Edge Transport server role installed. Important system resources, such as available hard disk drive space and available memory, are monitored. If utilization of a system resource exceeds the specified limit, the Exchange server stops accepting new connections and messages. This prevents the system resources from being completely overwhelmed and enables the Exchange server to deliver the existing messages. When utilization of the system resource returns to a normal level, the Exchange server accepts new connections and messages.\nThe following system resources are monitored as part of the back pressure feature:\n\nFree space on the hard disk drive that stores the message queue database.\nFree space on the hard disk drive that stores the message queue database transaction logs.\nThe number of uncommitted message queue database transactions that exist in memory.\nThe memory that is used by the EdgeTransport.exe process.\nThe memory that is used by all processes.\n\nOne solution is to ensure that you have sufficient disk space for your queue database and logs. An important thing to note is that if you are making use of CCR, Exchange holds the data for the transport dumpster in the transport queue file.\nMoving the queue database and logs is a fairly simple operation and can be done via the Exchange Management Shell with the Move-TransportDatabase cmdlet.\nThe following command will move the database and logs to D:\\Queue from the default location of C:\\Program Files\\Microsoft\\Exchange Server\\TransportRoles\\data\\Queue:\nMove-TransportDatabase -QueueDatabasePath: D:\\Queue -QueueDatabaseLoggingPath: D:\\Queue\n\nFor more information on Back Pressure, visit Microsoft Technet\n\nExchange 2010 Moving Mail Queue\n\n",
      tags: [],
      id: 210
    });
    

    index.add({
      title: "New Zealand Internet Blackout: \"A remarkable victory\"",
      category: null,
      content: "I recently posted about the NZ Internet Blackout and I am happy to report that the campaign was very successful. \nThanks to an impressive campaign spearheaded by Creative Freedom NZ, New Zealand&#8217;s controversial &#8216;guilt upon accusation&#8217; clause, s 92A, will be delayed and may be suspended and may be abandoned.\nRead the full story here\n",
      tags: [],
      id: 211
    });
    

    index.add({
      title: "Exchange 2007 Update Rollup 6 - My Experience",
      category: null,
      content: "On 12 Feb I blogged about Exchange 2007 Update Rollup 6 having been released and that it also includes a fix for the critical security issue that was published under Microsoft Security Bulletin MS09-003. \nI have seen a lot of posts on the internet about problems experienced after applying this update, so I recently decided to apply the update to a non-production environment. Here are my experiences.\nAbout the environment:\n\n2 x CAS servers in a NLB\n2 x Hub transport servers\n1 x CCR Mailbox cluster\nAll servers run Server 2008 with SP1\nAll servers are physical machines\n\n&#160;\nThe only \"strange\" thing I experienced was that the installer sits on \"Creating native images for .NET assemblies...\" for more than an hour.\n&#160;\nAfter it does complete, and the servers are rebooted, everything seems to work perfectly.I had no problems with services not starting or OWA not working after applying this update.\n",
      tags: [],
      id: 212
    });
    

    index.add({
      title: "Exchange 2007 SP1 CCR Passive node installation failure",
      category: null,
      content: "When installing a Exchange 2007 SP1 in Cluster Continuous Replication (CCR) cluster, the passive node installation fails with the following error: \n&#8220;This is not a passive node. A clustered mailbox server represented by the cluster resource group [name of cluster] was found on this node.&#8221;\n&#160;\n\nAfter a bit of head scratching, I realised that this occurs because after the installation of the passive node, Exchange setup asks you to restart your server thus causing the cluster to fail over. \nThe solution: well.. simply restart the passive node and run Exchange setup again.\n&#160;\n\n",
      tags: [],
      id: 213
    });
    

    index.add({
      title: "Join The New Zealand Internet Blackout",
      category: null,
      content: "\nThose of you who frequent my blog (or follow me on twitter) will know that I am strongly to any form of internet censorship. Here in Australia the government is currently trailing new ISP level filtering which threatens to reduce our internet to a state comparable to China, read more here\nIn New Zealand, they have recently pass some crazy copyright law that calls for internet disconnection based on accusations of copyright infringement without a trial and without any evidence held up to court scrutiny. This is due to come into effect on February 28th unless immediate action is taken by the National Party.\nJoin thousands of New Zealanders (hey, I am not even kiwi!) already against this law by blacking out your Facebook photo, your websites, your Myspace pages, your Twitter account, in protest against this unjust new law that may come into effect on February 28.\nI have \"blacked out\" my blog and twitter avatar to show my support!\nfor more info and to sign the petition, click here\n",
      tags: [],
      id: 214
    });
    

    index.add({
      title: "Internet Censorship in Australia: Update",
      category: null,
      content: "THE Federal Government's internet filtering plan has been compared to censorship in China by one of the participants in its blacklist trials. Read full article here\nCheck out the NO CLEAN FEED website here\n\n",
      tags: [],
      id: 215
    });
    

    index.add({
      title: "Internet Censorship in Australia: Update",
      category: null,
      content: "Conroy announces filtering trial participants. \"The initial round of ISPs are Primus Telecommunications, Tech 2U, Webshield, OMNIconnect, Netforce and Highway 1\" Read more here\ncheck out the NO CLEAN FEED website here\n\n",
      tags: [],
      id: 216
    });
    

    index.add({
      title: "Exchange 2007 Update Rollup 6",
      category: null,
      content: "Microsoft has released Update Rollup 6 for Microsoft Exchange Server 2007 Service Pack 1. More information about this update is available here\nIt is worth mentioning that this update also includes a fix for the critical security issue that was published under Microsoft Security Bulletin MS09-003 on 10 February 2009.\n",
      tags: [],
      id: 217
    });
    

    index.add({
      title: "Internet Censorship in Australia: Update",
      category: null,
      content: "\"Labor's 'deafening silence' as web censorship trials delayed\" read full article here\n",
      tags: [],
      id: 218
    });
    

    index.add({
      title: "Say EHLO to Exchange 14!",
      category: null,
      content: "Already being tested by 3.5 million users and aligned with Microsoft's software plus services strategy. What I find fascinating is that Microsoft found the cost of running Exchange 2007 to be roughly half that of running Exchange 2003. It is thought that E14 will bring that cost down by a similar margin yet again.\n&nbsp;\n\n\n\n\";\" alt=\"\">\n\n\n\n&nbsp;\nSee the original post on Technet and Exchange Team Blog\n\n&nbsp;\n\n",
      tags: [],
      id: 219
    });
    

    index.add({
      title: "Mailbox Server Role Storage Requirements Calculator Update",
      category: null,
      content: "In order to assist customers in designing their storage layout for Exchange 2007, Microsoft put together a calculator that focuses on driving the storage requirements (I/O performance and capacity) and what the optimal LUN layout should be based on a set of input factors. \nThe Mailbox Server Role Storage Requirements Calculator has recently been updated to version 16.3.\nFor more info on the Mailbox Server Role Storage Requirements Calculator and to download the latest version, visit the Exchange Team Blog\n",
      tags: [],
      id: 220
    });
    

    index.add({
      title: "The Ultimate Mac vs PC!",
      category: null,
      content: "I'm sure we've all witnessed the \"ad war\" between Apple and Microsoft.. here is one of the best ones I have come across\n&#160;\n\n\n\n\";\" alt=\"\">\n\n\n",
      tags: [],
      id: 221
    });
    

    index.add({
      title: "Stop Internet Censorship in Australia",
      category: null,
      content: "I am a little surprised that there has not been more noise made about this.. thought I would do my bit as I am a totally against internet censorship..\nThe Australian Federal Government is pushing forward with a plan to force ISPs to censor the Internet for all Australians. I can think of several, non-technical reasons why this is a really bad idea.. for all the info, including a call to action, check out the NO CLEAN FEED website here\n\n\n",
      tags: [],
      id: 222
    });
    

    index.add({
      title: "Microsoft Exchange Server Remote Connectivity Analyzer",
      category: null,
      content: "I first heard about this tool at Tech-Ed back in October. The Exchange Server Remote Connectivity Analyzer (ExRCA) tool is a neat online tool which allows Exchange Administrators to test and validate various aspects of their Exchange , including for example, Exchange 2003 RCP over HTTP. \nThe tool currently provides the following tests:\n\nMicrosoft Exchange ActiveSync Test\nMicrosoft Exchange ActiveSync AutoDiscover Test\nMicrosoft Office Outlook 2007 AutoDiscover Connectivity Test\nMicrosoft Office Outlook 2003 RPC/HTTP Connectivity Test\nInbound SMTP Email Test\n\nExRCA can found at https://www.testexchangeconnectivity.com/\n",
      tags: [],
      id: 223
    });
    

    index.add({
      title: "Exchange 2007 Mailbox server memory recommendations",
      category: null,
      content: "Exchange 2007 enables much better memory utilization than Exchange 2003 due to its 64-bit architecture. Because of the virtual address space limitations of a 32-bit platform, Exchange 2003 is limited to using 4 GB or less of physical memory.\nThe memory configuration process for the Mailbox role is more involved than the other roles since the optimal memory configuration depends upon the mailbox count, client profile and number of storage groups.\nThe recommended configuration for the Mailbox role is based predominantly on mailbox count and user profile.The rule of thumb sizing for the Mailbox server role requires an understanding of the average client user profile. This profile can be collected using the Microsoft Exchange Server Profile Analyzer (EPA).\n&#160;\n\n\n\n\nUser Type\nSend/Receive per day \n\n\nLight\n5 sent/20 received\n\n\nAverage\n10 sent/40 received \n\n\nHeavy\n20 sent/80 received\n\n\nVery Heavy\n30 sent/120 received \n\n\n\n&#160;\nThe maximum number of Storage Groups configurable in Exchange 2007 has been increased to 50 in the Enterprise Edition (up from 4 with Exchange 2003) and 5 in Standard Edition (up from 1 with Exchange 2003). This increase provides much greater flexibility in server/storage architecture, but the increase has a significant effect on the memory utilization of the Exchange 2007 Mailbox server so Storage Group count is now a factor in minimum memory configuration for Mailbox and Multi-Role servers. In Exchange 2007 Service Pack 1 (SP1), several performance enhancements were made to the Extensible Storage Engine (ESE) that reduce the memory requirements for the Mailbox server role. The following table identifies the specific minimum memory requirements per server, based on the number of storage groups on the server for Exchange 2007 and Exchange 2007 SP1.\n&#160;\n\n\n\nStorage Group Count\nMinimum Required Physical Memory \n\n\n1-4\n2 GB\n\n\n5-8\n4 GB\n\n\n9-12\n5 GB\n\n\n13-16\n6 GB\n\n\n17-20\n7 GB\n\n\n21-24\n8 GB\n\n\n25-28\n9 GB\n\n\n29-32\n10 GB\n\n\n33-36\n11 GB\n\n\n37-40\n12 GB\n\n\n41-44\n13 GB\n\n\n45-48\n14 GB\n\n\n49-50\n15 GB\n\n\n\n&#160;\nBased on the above information, the following table can be used to assist in estimating the memory requirements of a given mailbox server with a given number of hosted mailboxes with a given profile type:\n&#160;\n\n\n\nUser Type\nRecommended memory&#160;\n\n\nLight\nSG Minimum + 2 MB per mailbox\n\n\nAverage\nSG Minimum + 3.5 MB per mailbox\n\n\nHeavy\nSG Minimum + 5 MB per mailbox\n\n\n\n&#160;\nMore more information, see the Exchange 2007: Planning Memory Configurations guide on Microsoft Technet.\n",
      tags: [],
      id: 224
    });
    

    index.add({
      title: "The Matrix Runs on Windows",
      category: null,
      content: "Something humorous to get the week started!\n\n\nSee more funny videos and funny pictures at CollegeHumor.\n\n\n",
      tags: [],
      id: 225
    });
    

    index.add({
      title: "Remove Live Messenger Ads",
      category: null,
      content: "If you are connected to Live Messenger 24 hours a day like I am, you are undoubtedly annoyed by those ads down the bottom that pop-up and make a noise if your mouse cursor happens to go anywhere near them..\n\nA simple way to get rid of them is with APatch (www.apatch.org). Download it, run it and on page 2/6 check the \"Remove Advertisement\" checkbox, complete the wizard and there you go, ad free messenger!\n\n",
      tags: [],
      id: 226
    });
    

    index.add({
      title: "OCS 2007 R2",
      category: null,
      content: "Microsoft have announced the release of Office Communications Server 2007 R2. Customers will be able to purchase the release, currently in private beta testing, beginning in February 2009.\nA few of the new features are:\n\nDial-in audioconferencing\nDesktop sharing\nPersistent group chat\nAttendant console and delegation\nAPIs and Visual Studio integration\n\nFor more info, click here\n",
      tags: [],
      id: 227
    });
    

    index.add({
      title: "ISA 2006 - High MSDE memory usage",
      category: null,
      content: "I came across this issues on a ISA 2006 proxy server the other day. Basically, if you are logging to a MSDE database you may experience high memory usage by SQL server because the amount of physical memory that is allocated for SQL Server is not limited by default.\nIt is possible to limit the amount of physical memory that is allocated for SQL Server. Recommended values are:\nSystem Memory - Setting\n1 GB - 386 MB\n2 GB - 512 MB\n3 GB - 764 MB\n4 GB - 1024 MB\nFor detailed information on how to set these limits, see the following Microsoft KB article\n \n",
      tags: [],
      id: 228
    });
    

    index.add({
      title: "OS X Cant write to external disk",
      category: null,
      content: "Err.. yeah.. so, there you are, you need to copy something from your apple mac to your external disk, but it wont allow you.. the disk is not full and it works perfectly on windows.??\nI recently encountered this problem, the drive was formatted as NTFS (and why wouldn't it be?) turns out macs can read files off NTFS drives, but they cannot write to an NTFS drive.\nOk, so what now? You can format your external hard drive as FAT32 partition or NTFS-3G\nNTFS-3G is an open source, freely available NTFS driver for Linux, Mac OS X, FreeBSD, NetBSD, Solaris, BeOS and Haiku. It is licensed under the GNU General Public License. Once installed, it will allow you to write to your NTFS drive without a problem!\n",
      tags: [],
      id: 229
    });
    

    index.add({
      title: "WIFI and Hyper-V",
      category: null,
      content: "Anyone who has played around with server 2008 and hyper-v would have noticed that you are not able to bind a virtual network to a wireless network adapter and more than likely (although i have not personally tested it) a 3g or other mobile broadband card. I guess the reason for this is that most people would probably not need to do this, BUT, I did.. after asking google, I found 3 ways around this, my preferred method is the last one.\nMethods:\n\nUsing ICS - see Ben Armstrong's blog\nUsing RRAS - see Ken Schaefer's blog\nUsing Bridging - see John Paul Cook's blog\n\n",
      tags: [],
      id: 230
    });
    


var store = [{
    "title": "Sample Data",
    "link": "/2019/03/sample-data",
    "image": null,
    "date": "March 11, 2019",
    "category": ["docs"],
    "excerpt": "Markdown (or Textile), Liquid, HTML &amp; CSS go in. Static sites come out ready for deployment. Headings Heading 1 Heading..."
},{
    "title": "Connect-365 Script Updates",
    "link": "/2019/02/connect-365-script-updates",
    "image": null,
    "date": "February 27, 2019",
    "category": null,
    "excerpt": "I'm excited to publish a new version of my Connect-365.ps1 script. The new version includes a bunch of usability improvements,..."
},{
    "title": "TCA Podcast Episode 22: Governance With Antonio Maio",
    "link": "/2019/02/tca-podcast-episode-22-governance-with-antonio-maio",
    "image": null,
    "date": "February 11, 2019",
    "category": null,
    "excerpt": "Governance is a big word and is a concept that is often thrown around. It seems to confuse a lot..."
},{
    "title": "Exchange Online - No DKIM keys saved for this domain",
    "link": "/2019/01/exchange-online-no-dkim-keys-saved-for-this-domain",
    "image": null,
    "date": "January 30, 2019",
    "category": null,
    "excerpt": "I recently came across an interesting issue when attempting to enable DKIM for a domain in Exchange Online. When accessing..."
},{
    "title": "TCA Podcast Episode 21: Get-IoTEpisode -GuestName &ldquo;Anthony Bartolo&rdquo;",
    "link": "/2018/12/tca-podcast-episode-21-get-iotepisode-guestname-anthony-bartolo",
    "image": null,
    "date": "December 14, 2018",
    "category": null,
    "excerpt": "The Internet of things (IoT) seems to be everywhere these days. Anything from connected light bulbs and door bells to..."
},{
    "title": "TCA Podcast Episode 20: Azure Active Directory and B2B",
    "link": "/2018/11/tca-podcast-episode-20-azure-active-directory-and-b2b",
    "image": null,
    "date": "November 30, 2018",
    "category": null,
    "excerpt": "In this episode we talk with Program Manager&nbsp;Elisabeth Olson&nbsp;and Principle Program Manager Rob Lowe. They both work with the Azure..."
},{
    "title": "TCA Podcast Episode 19: Unsung Heroes",
    "link": "/2018/11/tca-podcast-episode-19-unsung-heroes",
    "image": null,
    "date": "November 2, 2018",
    "category": null,
    "excerpt": "Documentation is something we all rely on, especially in today&rsquo;s rapidly changing cloud world where the only constant seems to..."
},{
    "title": "TCA Podcast Episode 18: The One with Exchange Goddess",
    "link": "/2018/10/tca-podcast-episode-18-the-one-with-exchange-goddess",
    "image": null,
    "date": "October 18, 2018",
    "category": null,
    "excerpt": "Diversity and inclusion in tech was one of the powerful themes at Microsoft Ignite this year and I&rsquo;m excited to..."
},{
    "title": "TCA Podcast Episode 17: The Community Khaleesi",
    "link": "/2018/10/tca-podcast-episode-17-the-community-khaleesi",
    "image": null,
    "date": "October 4, 2018",
    "category": null,
    "excerpt": "The Microsoft Tech Community was launched in 2016 and&nbsp;is an evolution of the Office 365 Network, extended to support the..."
},{
    "title": "TCA Podcast Episode 16: Jeff Mealiffe and the Awesomeness of Exchange(Ahem, Office 365)",
    "link": "/2018/09/tca-podcast-episode-16-jeff-mealiffe-and-the-awesomeness-of-exchangeahem-office-365",
    "image": null,
    "date": "September 8, 2018",
    "category": null,
    "excerpt": "In this episode, Nic and Warren have a chat to the Perf Guy himself, Principal Lead Program Manager at Microsoft,&nbsp;Jeff..."
},{
    "title": "Azure AD Connect High CPU Usage detected",
    "link": "/2018/08/azure-ad-connect-high-cpu-usage-detected",
    "image": null,
    "date": "August 18, 2018",
    "category": null,
    "excerpt": "I recently started receiving a lot of emails from Azure AD Connect Health in one of my lab environments indicating..."
},{
    "title": "TCA Podcast Episode 15: Automation, DevOps and the evolution of the IT Pro",
    "link": "/2018/06/tca-podcast-episode-15-automation-devops-and-the-evolution-of-the-it-pro",
    "image": null,
    "date": "June 20, 2018",
    "category": null,
    "excerpt": "The word DevOps seems to be everywhere at the moment, I can&rsquo;t open LinkedIn without coming across a bunch of..."
},{
    "title": "TCA Podcast Episode 14: Waxing lyrical about GDPR with Tony Redmond",
    "link": "/2018/05/tca-podcast-episode-14-waxing-lyrical-about-gdpr-with-tony-redmond",
    "image": null,
    "date": "May 29, 2018",
    "category": null,
    "excerpt": "The General Data Protection Regulation (GDPR) has been on everyone's mind recently. GDPR became enforceable on 25 May 2018 and..."
},{
    "title": "TCA Podcast Episode 13: All About Mary-Jo Foley",
    "link": "/2018/03/tca-podcast-episode-13-all-about-mary-jo-foley",
    "image": null,
    "date": "March 16, 2018",
    "category": null,
    "excerpt": "In this episode, Nic and Warren had the privilege of interviewing legendary journalist Mary-Jo Foley. Mary-Jo has been covering the..."
},{
    "title": "TCA Podcast Episode 12: Skype for Business, Teams and the evolution of Telecommunications",
    "link": "/2018/03/tca-podcast-episode-12-skype-for-business-teams-and-the-evolution-of-telecommunications",
    "image": null,
    "date": "March 5, 2018",
    "category": null,
    "excerpt": "The telecommunications industry has come&nbsp; a long way since the days of manual service telephone exchanges. We caught up with..."
},{
    "title": "Fun with Azure Automation and Table Service REST API",
    "link": "/2018/02/fun-with-azure-automation-and-table-service-rest-api",
    "image": null,
    "date": "February 27, 2018",
    "category": null,
    "excerpt": "I love PowerShell and I really love to automate things! I recently started looking into leveraging Azure services for some..."
},{
    "title": "TCA Podcast Episode 11: \"I'm not scared of what AI will do, but what humans will do with AI\"",
    "link": "/2018/02/tca-podcast-episode-11-im-not-scared-of-what-ai-will-do-but-what-humans-will-do-with-ai",
    "image": null,
    "date": "February 19, 2018",
    "category": null,
    "excerpt": "In this incredibly interesting episode, Warren and Nic catch up with Joe Baguley from VMware to talk what it's like..."
},{
    "title": "TCA Podcast Episode 10: Device Management needn&rsquo;t be complex",
    "link": "/2018/02/tca-podcast-episode-10-device-management-neednt-be-complex",
    "image": null,
    "date": "February 12, 2018",
    "category": null,
    "excerpt": "In this episode, we caught up with&nbsp;MVP Steve Goodman&nbsp;to discuss a simplistic approach to implementing Device Management and why it..."
},{
    "title": "My PowerShell scripts are now available on GitHub",
    "link": "/2018/01/my-powershell-scripts-are-now-available-on-github",
    "image": null,
    "date": "January 30, 2018",
    "category": null,
    "excerpt": "Ever since I first started sharing scripts on my blog, I've had a bunch of people reach out to me..."
},{
    "title": "TCA Podcast Episode 9: \"This is not your Grandfathers Sharepoint!\"",
    "link": "/2018/01/tca-podcast-episode-9-this-is-not-your-grandfathers-sharepoint",
    "image": null,
    "date": "January 5, 2018",
    "category": null,
    "excerpt": "In this episode, we&nbsp;talk to&nbsp;Patricia Hendricks (@phndrx)&nbsp;and Navjot Virk&nbsp;(@navjotvirk)&nbsp;from Microsoft about&nbsp;OneDrive and SharePoint. For more information on The Cloud Architects..."
},{
    "title": "TCA Podcast Episode 8: SharePoint isn&rsquo;t so scary..",
    "link": "/2017/11/tca-podcast-episode-8-sharepoint-isnt-so-scary",
    "image": null,
    "date": "November 22, 2017",
    "category": null,
    "excerpt": "SharePoint can be intimidating, especially for those of use who don&rsquo;t work with it everyday. In this episode,&nbsp;@WonderLaura tells us..."
},{
    "title": "TCA Podcast Episode 7: &ldquo;The cloud can make a real fool of you&rdquo;",
    "link": "/2017/11/tca-podcast-episode-7-the-cloud-can-make-a-real-fool-of-you",
    "image": null,
    "date": "November 16, 2017",
    "category": null,
    "excerpt": "Change can be difficult for any organization. Changing the working culture of your user population and driving product adoption can..."
},{
    "title": "TCA Podcast Episode 6: \"I like OneDrive, but&hellip;\"",
    "link": "/2017/11/tca-podcast-episode-6-i-like-onedrive-but",
    "image": null,
    "date": "November 14, 2017",
    "category": null,
    "excerpt": "OneDrive for Business has come a long way since it was initially launched and has earned it's place as a..."
},{
    "title": "The Cloud Architects Podcast",
    "link": "/2017/10/the-cloud-architects-podcast",
    "image": null,
    "date": "October 10, 2017",
    "category": null,
    "excerpt": "Better late than never.. I'm delighted to annouce that I'll be joining The Cloud Architects Podcast as a co-host. Started..."
},{
    "title": "Office Servers and Services MVP 2017!",
    "link": "/2017/07/office-servers-and-services-mvp-2017",
    "image": null,
    "date": "July 6, 2017",
    "category": null,
    "excerpt": "The last few weeks have been incredibly busy.. I spent a week in Europe and presented a couple of sessions..."
},{
    "title": "Dank je wel, Haarlem!",
    "link": "/2017/06/dank-je-wel-haarlem",
    "image": null,
    "date": "June 29, 2017",
    "category": null,
    "excerpt": "Last week, I was fortunate enough to speak at the inaugural Office 365 Engage conference in Haarlem, Netherlands. I had..."
},{
    "title": "I am speaking at Office 365 Engage!",
    "link": "/2017/05/ill-be-speaking-at-office-365-engage",
    "image": null,
    "date": "May 31, 2017",
    "category": null,
    "excerpt": "I&rsquo;m really excited to announce that I&rsquo;ll be speaking at Office 365 Engage in Haarlem, Netherlands 19-22 June 2017. Office..."
},{
    "title": "Script: Connect-365.ps1 - Connect to Office 365 services using remote PowerShell",
    "link": "/2017/03/script-connect-365-ps-connect-to-office-365-services-using-remote-powershell",
    "image": null,
    "date": "March 29, 2017",
    "category": null,
    "excerpt": "I'm excited to announce the release of Connect-365! Back 2012, I put together a basic script with a GUI to..."
},{
    "title": "Connecting to Exchange Online with remote PowerShell from a Mac",
    "link": "/2017/03/connecting-to-exchange-online-with-remote-powershell-from-a-mac",
    "image": null,
    "date": "March 15, 2017",
    "category": null,
    "excerpt": "Yes! it is finally possible to connect to Exchange Online from PowerShell installed on MacOS. I noticed some tweets about..."
},{
    "title": "Changes to RSS feeds",
    "link": "/2017/03/changes-to-rss-feeds",
    "image": null,
    "date": "March 1, 2017",
    "category": null,
    "excerpt": "Since starting this blog in 2008, I have been using Google Feedburner to publish my RSS feeds and enable 'subscribe..."
},{
    "title": "Single Sign On with Azure AD Connect",
    "link": "/2017/02/single-sign-on-with-azure-ad-connect",
    "image": null,
    "date": "February 28, 2017",
    "category": null,
    "excerpt": "Ever since the launch of Office 365 (and BPOS before that) there has been a desire to make accessing these..."
},{
    "title": "Configuring session timeouts for Outlook on the Web (OWA) in Exchange Online",
    "link": "/2017/02/configuring-session-timeouts-for-outlook-on-the-web-owa-in-exchange-online",
    "image": null,
    "date": "February 7, 2017",
    "category": null,
    "excerpt": "In today&rsquo;s browser first, cloud first world, many organizations look at reducing risk by imposing strict session timeout settings on..."
},{
    "title": "Getting started with AAD conditional access - Location based access rules",
    "link": "/2016/11/getting-started-with-aad-conditional-access-location-based-access-rules",
    "image": null,
    "date": "November 30, 2016",
    "category": null,
    "excerpt": "Azure Active Directory (AAD) conditional access is something I&rsquo;ve been wanting to post about for a while now. A scenario..."
},{
    "title": "Welcome to Ignite 2016!",
    "link": "/2016/09/welcome-to-ignite-2016",
    "image": null,
    "date": "September 25, 2016",
    "category": null,
    "excerpt": "It&rsquo;s here! We&rsquo;ve all had to wait a little longer than usual for our yearly conference fix since Ignite in..."
},{
    "title": "Disabling Modern Attachments in Outlook 2016",
    "link": "/2016/08/disabling-modern-attachments-in-outlook-2016",
    "image": null,
    "date": "August 30, 2016",
    "category": null,
    "excerpt": "The modern attachments (aka cloudy attachments) feature in Outlook 2016 makes it simple for users to share documents stored in..."
},{
    "title": "Automating archive folder creation in Exchange Online mailboxes",
    "link": "/2016/07/automating-archive-folder-creation-in-exchange-online-mailboxes",
    "image": null,
    "date": "July 26, 2016",
    "category": null,
    "excerpt": "If you are using Outlook 2016 on Windows or Mac you will have noticed the recent addition of a one-click..."
},{
    "title": "Office Servers and Services MVP 2016!",
    "link": "/2016/07/office-servers-and-services-mvp-2016",
    "image": null,
    "date": "July 1, 2016",
    "category": null,
    "excerpt": "I've been traveling this week and spent a couple of days in Washington D.C were I presented two sessions at..."
},{
    "title": "Minor update to my Connect-EXO.ps1 script",
    "link": "/2016/06/minor-update-to-my-connect-exo-ps1-script",
    "image": null,
    "date": "June 30, 2016",
    "category": null,
    "excerpt": "I've just published an updated version of my Connect-EXO.ps1 script. This version, (version 3.2) includes a very minor fix for..."
},{
    "title": "Using a certificate to encrypt credentials in automated PowerShell scripts &ndash; An Update!",
    "link": "/2016/05/using-a-certificate-to-encrypt-credentials-in-automated-powershell-scripts-an-update",
    "image": null,
    "date": "May 31, 2016",
    "category": null,
    "excerpt": "Early last year I wrote a post about encrypting script credentials using certificates. At the time, someone (thanks Dave Wyatt!)..."
},{
    "title": "My Connect-EXO.ps1 script has been updated!",
    "link": "/2016/04/my-connect-exo-ps1-script-has-been-updated-2",
    "image": null,
    "date": "April 12, 2016",
    "category": null,
    "excerpt": "I've just published an updated version of my Connect-EXO.ps1 script. Version 3.1 includes the ability&nbsp;to connect to the&nbsp;Office 365 Security..."
},{
    "title": "Using PowerShell to automate Office 365 license assignment",
    "link": "/2016/03/using-powershell-to-automate-office-365-license-assignment",
    "image": null,
    "date": "March 30, 2016",
    "category": null,
    "excerpt": "The move to Office 365 almost always requires changes to existing operational processes. One of the processes that inevitably requires..."
},{
    "title": "Azure AD Connect gets a big update!",
    "link": "/2016/02/azure-ad-connect-gets-a-big-update",
    "image": null,
    "date": "February 18, 2016",
    "category": null,
    "excerpt": "In case you missed it, the latest version of Azure AD Connect (version 1.1.105.0) was recently made available for download...."
},{
    "title": "How to create a remote &ldquo;Office 365&rdquo; mailbox  in a hybrid deployment",
    "link": "/2016/01/how-to-create-a-remote-office-365-mailbox-in-a-hybrid-deployment",
    "image": null,
    "date": "January 27, 2016",
    "category": null,
    "excerpt": "I&rsquo;ve recently seen the same issue pop up in a few different environments so I thought I would put together..."
},{
    "title": "Multiple tenant domains with a single Yammer network",
    "link": "/2015/12/multiple-tenant-domains-with-a-single-yammer-network",
    "image": null,
    "date": "December 31, 2015",
    "category": null,
    "excerpt": "I recently worked with a customer who had a large number of different business units and each one had their..."
},{
    "title": "Exchange Hybrid Deployment and Sizing",
    "link": "/2015/11/exchange-hybrid-deployment-and-sizing",
    "image": null,
    "date": "November 30, 2015",
    "category": null,
    "excerpt": "In September, I posted about the great new Office 365 Hybrid Configuration Wizard and while there is no question that..."
},{
    "title": "My Connect-EXO.ps1 script has been updated!",
    "link": "/2015/10/my-connect-exo-ps1-script-has-been-updated",
    "image": null,
    "date": "October 29, 2015",
    "category": null,
    "excerpt": "I recently published an updated version of my Connect-EXO.ps1 script. Version 3.0 includes the option to connect to Azure AD...."
},{
    "title": "A look at the Microsoft Office 365 Hybrid Configuration Wizard",
    "link": "/2015/09/a-look-at-the-microsoft-office-365-hybrid-configuration-wizard",
    "image": null,
    "date": "September 16, 2015",
    "category": null,
    "excerpt": "In case you missed it, Microsoft recently announced the Microsoft Office 365 Hybrid Configuration Wizard (HCW). The HCW has come..."
},{
    "title": "Migrating Office for Mac users to Exchange Online",
    "link": "/2015/08/migrating-office-for-mac-users-to-exchange-online",
    "image": null,
    "date": "August 31, 2015",
    "category": null,
    "excerpt": "I recently worked with a customer who has a workstation fleet that is almost entirely made up of Macintosh computers...."
},{
    "title": "My Get-AZCopyGUI.ps1 script has been updated",
    "link": "/2015/07/my-get-azcopygui-ps1-script-has-been-updated",
    "image": null,
    "date": "July 31, 2015",
    "category": null,
    "excerpt": "At the end of May, I published my Get-AZCopyGUI.ps1 script which is&nbsp;a&nbsp;simple GUI wrapper for AZCopy.exe and helps simplify the..."
},{
    "title": "Upgrading to Azure AD Connect",
    "link": "/2015/06/upgrading-to-azure-ad-connect",
    "image": null,
    "date": "June 25, 2015",
    "category": null,
    "excerpt": "It&rsquo;s here! Yesterday, Microsoft announced the general availability of Azure AD Connect (AAD Connect). Over the years the humble DirSync..."
},{
    "title": "Script: Get-AZCopyGUI.ps1 - AZCopy GUI for PST Import",
    "link": "/2015/05/script-get-azcopygui-ps1",
    "image": null,
    "date": "May 30, 2015",
    "category": null,
    "excerpt": "Microsoft recently announced the new Office 365 Import Service which is currently in preview. The new service allows organizations to..."
},{
    "title": "Using PowerShell to bulk email your users",
    "link": "/2015/04/user-powershell-to-bulk-email-your-users",
    "image": null,
    "date": "April 29, 2015",
    "category": null,
    "excerpt": "I was recently working on a migration project with a customer and volunteered to help find a solution to a..."
},{
    "title": "Using Azure Scheduler to feed your pets (sort of)",
    "link": "/2015/03/using-azure-scheduler-to-feed-your-pets-sort-of",
    "image": null,
    "date": "March 31, 2015",
    "category": null,
    "excerpt": "One of the things I learned shortly after we adopted our cat Kensington is that he doesn&rsquo;t care too much..."
},{
    "title": "Using a certificate to encrypt credentials in automated PowerShell scripts",
    "link": "/2015/02/using-a-certificate-to-encrypt-credentials-in-automated-powershell-scripts",
    "image": null,
    "date": "February 24, 2015",
    "category": null,
    "excerpt": "PowerShell is a great way to help automate frequent or repetitive tasks and every now and then these tasks require..."
},{
    "title": "Mail Protection Reports for Office 365",
    "link": "/2015/01/mail-protection-reports-for-office-365",
    "image": null,
    "date": "January 21, 2015",
    "category": null,
    "excerpt": "One of the great things about Office 365 is how flexible the service is, it caters to those organizations who..."
},{
    "title": "The new(ish) Outlook for Mac (for Office 365 subscribers)",
    "link": "/2015/01/the-newish-outlook-for-mac-for-office-365-subscribers",
    "image": null,
    "date": "January 8, 2015",
    "category": null,
    "excerpt": "I&rsquo;ve been dying to take the new Outlook for Mac (for Office 365 subscribers) for a test drive ever since..."
},{
    "title": "Exchange Updates &ndash; December 2014",
    "link": "/2014/12/exchange-updates-december-2014",
    "image": null,
    "date": "December 9, 2014",
    "category": null,
    "excerpt": "Earlier today Microsoft announced the release of Exchange 2013 CU7, Exchange 2010 SP3 RU8 and Exchange 2007 SP3 RU15. In..."
},{
    "title": "Script: Fix-ProxyAddress.ps1",
    "link": "/2014/11/script-fix-proxyaddress-ps1",
    "image": null,
    "date": "November 21, 2014",
    "category": null,
    "excerpt": "I recently blogged about the \"MigrationPermanentException: The target mailbox doesn't have an SMTP proxy matching 'company.mail.onmicrosoft.com'.\" error message that occurs..."
},{
    "title": "MigrationPermanentException: The target mailbox doesn't have an SMTP proxy matching 'company.mail.onmicrosoft.com'.",
    "link": "/2014/11/migrationpermanentexception-the-target-mailbox-doesnt-have-an-smtp-proxy-matching-company-mail-onmicrosoft-com",
    "image": null,
    "date": "November 21, 2014",
    "category": null,
    "excerpt": "One of the most common error message I find when performing mailbox moves to Office 365 &ndash; Exchange Online is..."
},{
    "title": "My session at SharePoint Conference.ORG 2014",
    "link": "/2014/10/my-session-at-sharepoint-conference-org-2014",
    "image": null,
    "date": "October 21, 2014",
    "category": null,
    "excerpt": "I had a great time attending and presenting at SharePoint Conference.ORG yesterday. I really enjoyed the great mixture of business,..."
},{
    "title": "Script: Connect-EXO.ps1 - Connect to Exchange Online using remote PowerShell",
    "link": "/2014/10/script-connect-exo-ps1-connect-to-exchange-online-using-remote-powershell",
    "image": null,
    "date": "October 15, 2014",
    "category": null,
    "excerpt": "I recently came across an old script I wrote to simplify connecting to Exchange Online using remote PowerShell and thought..."
},{
    "title": "Do you have a pre-Exchange 2013 SP1 Hybrid or are you using free/busy federation? Update your Federation Trust on Sept 23!",
    "link": "/2014/09/do-you-have-a-pre-exchange-2013-sp1-hybrid-or-are-you-using-freebusy-federation-update-your-federation-trust-on-sept-23",
    "image": null,
    "date": "September 12, 2014",
    "category": null,
    "excerpt": "If your organization has an Exchange Hybrid deployment that is not running on Exchange 2013 SP1 or later you may..."
},{
    "title": "Office 365 Workstation Readiness",
    "link": "/2014/08/office-365-workstation-readiness",
    "image": null,
    "date": "August 30, 2014",
    "category": null,
    "excerpt": "As cloud services and Office 365 in general continue to gain popularity, I find myself talking to more and more..."
},{
    "title": "Microsoft Office 365 MVP!",
    "link": "/2014/07/microsoft-office-365-mvp",
    "image": null,
    "date": "July 2, 2014",
    "category": null,
    "excerpt": "Today was a good day! It stared out in Music City &ndash; Nashville, Tennessee, I went for an early morning..."
},{
    "title": "Online Migration Tools - Comparing MigrationWiz and Dell On Demand Migration",
    "link": "/2014/06/online-migration-tools-comparing-migrationwiz-and-dell-on-demand-migration",
    "image": null,
    "date": "June 4, 2014",
    "category": null,
    "excerpt": "I recently needed to migrate my own personal Office 365 tenant to another Office 365 tenant and even though I..."
},{
    "title": "How to perform a manual synchronisation with AADSync",
    "link": "/2014/05/how-to-perform-a-manual-synchronisation-with-aadsync",
    "image": null,
    "date": "May 2, 2014",
    "category": null,
    "excerpt": "I recently posted about the preview (CTP) of Azure Active Directory Sync Services (AADSync). There are a number of differences..."
},{
    "title": "Using AD FS &ldquo;Alternate Login ID&rdquo; with Office 365",
    "link": "/2014/04/using-ad-fs-alternate-login-id-with-office-365",
    "image": null,
    "date": "April 27, 2014",
    "category": null,
    "excerpt": "As Office 365 adoption continues to grow and more organisations are starting to take advantage of identity federation. One of..."
},{
    "title": "Azure Active Directory Sync Services - Kicking the &ldquo;AADSync&rdquo; tyres",
    "link": "/2014/04/azure-active-directory-sync-services-kicking-the-aadsync-tyres",
    "image": null,
    "date": "April 24, 2014",
    "category": null,
    "excerpt": "Windows Azure Active Directory Sync (DirSync) has become synonymous with Office 365 in recent years and while DirSync isn&rsquo;t a..."
},{
    "title": "Lync for Mac 2011 &ndash; &ldquo;Lync was unable to sign in..&rdquo;",
    "link": "/2014/04/lync-for-mac-2011-lync-was-unable-to-sign-in",
    "image": null,
    "date": "April 9, 2014",
    "category": null,
    "excerpt": "##Update## Since writing the post, I have been able to obtain a copy of the hotfix described in KB2926055 and..."
},{
    "title": "Warning added to Exchange 2013 SP1 description page",
    "link": "/2014/03/warning-added-to-exchange-2013-sp1-download-page",
    "image": null,
    "date": "March 21, 2014",
    "category": null,
    "excerpt": "Yesterday I wrote a post noting the lack of any warning on the Exchange 2013 SP1 download or description page..."
},{
    "title": "Step away from that Exchange 2013 SP1 update!",
    "link": "/2014/03/step-away-from-that-exchange-2013-sp1-update",
    "image": null,
    "date": "March 20, 2014",
    "category": null,
    "excerpt": "The Exchange Team announced the release of Exchange 2013 SP1 in late Feb and while SP1 introduced some great new..."
},{
    "title": "How to find Office 365 Support Phone Number",
    "link": "/2014/02/how-to-find-office-365-support-phone-number",
    "image": null,
    "date": "February 10, 2014",
    "category": null,
    "excerpt": "Every now and then I have a need to contact Office 365 support in order to help a customer resolve..."
},{
    "title": "I&rsquo;ll be at MEC 2014 #IAMMEC",
    "link": "/2014/01/ill-be-at-mec-2014-iammec",
    "image": null,
    "date": "January 29, 2014",
    "category": null,
    "excerpt": "Only a couple of months to go before the Microsoft Exchange Conference 2014 (MEC) in Austin (March 31 - April..."
},{
    "title": "Configure Mailbox Regional Settings",
    "link": "/2013/12/configure-mailbox-regional-settings",
    "image": null,
    "date": "December 24, 2013",
    "category": null,
    "excerpt": "I recently completed a small migration for a customer using the MigrationWiz online migration tools. This wasn&rsquo;t the first time..."
},{
    "title": "Office 365 Fast Track Network Analysis",
    "link": "/2013/12/office-365-fast-track-network-analysis",
    "image": null,
    "date": "December 16, 2013",
    "category": null,
    "excerpt": "Back in 2011 I posted about the Microsoft Online Services Internet Connection Performance Test which was a tool that helped..."
},{
    "title": "Migrate Legacy Public Folders to Exchange Online &ndash; Part 2",
    "link": "/2013/11/migrate-legacy-public-folders-to-exchange-online-part-2",
    "image": null,
    "date": "November 8, 2013",
    "category": null,
    "excerpt": "In part 1 we briefly looked at the architectural changes made to modern public folders in Exchange 2013 as well..."
},{
    "title": "Migrate Legacy Public Folders to Exchange Online &ndash; Part 1",
    "link": "/2013/10/migrate-legacy-public-folders-to-exchange-online-part-1",
    "image": null,
    "date": "October 30, 2013",
    "category": null,
    "excerpt": "I&rsquo;ve been meaning to get this series published for some time now. I can&rsquo;t believe it is almost 2 months..."
},{
    "title": "My Session at TechEd Australia 2013",
    "link": "/2013/09/my-session-at-teched-australia-2013",
    "image": null,
    "date": "September 11, 2013",
    "category": null,
    "excerpt": "In case you missed my session at TechEd Australia last week the session recording and slide deck is available on..."
},{
    "title": "Critical Security Bulletin for Exchange Server (MS13-061)",
    "link": "/2013/08/critical-security-bulletin-for-exchange-server-ms13-061",
    "image": null,
    "date": "August 14, 2013",
    "category": null,
    "excerpt": "##Update 30 Aug 2013## The MS13-061 security update has been re-released for Exchange Server 2013, the download links below have..."
},{
    "title": "How to access Exchange Admin Center (EAC) in Exchange 2013 during coexistence",
    "link": "/2013/07/how-to-access-exchange-admin-center-eac-in-exchange-2013-during-coexistence",
    "image": null,
    "date": "July 30, 2013",
    "category": null,
    "excerpt": "Perhaps you are planning your on-premises upgrade to Exchange 2013 or you&rsquo;ve just introduced the first Exchange 2013 server into..."
},{
    "title": "I&rsquo;ll be speaking at TechEd Australia 2013",
    "link": "/2013/07/ill-be-speaking-at-teched-australia-2013",
    "image": null,
    "date": "July 26, 2013",
    "category": null,
    "excerpt": "Mario Tevanian (Microsoft) and I will be presenting a &ldquo;Exchange 2013 Hybrid Deployments&rdquo; session at TechEd Australia 2013 (3-6 September,..."
},{
    "title": "Reverse Proxy for Exchange Server 2013 using IIS ARR",
    "link": "/2013/07/reverse-proxy-for-exchange-server-2013-using-iis-arr",
    "image": null,
    "date": "July 23, 2013",
    "category": null,
    "excerpt": "Microsoft Application Request Routing (ARR) is a proxy-based routing module for IIS that forwards HTTP requests to content servers based..."
},{
    "title": "Exchange Server and the Reverse Proxy - Part 2",
    "link": "/2013/07/exchange-server-and-the-reverse-proxy-part-2",
    "image": null,
    "date": "July 19, 2013",
    "category": null,
    "excerpt": "In March this year I wrote a post entitled &ldquo;Exchange Server and the Reverse Proxy&rdquo;. I had many similar conversations..."
},{
    "title": "Exchange 2013 CU2 Released!",
    "link": "/2013/07/exchange-2013-cu2-released",
    "image": null,
    "date": "July 10, 2013",
    "category": null,
    "excerpt": "Ross Smith IV announced the release of Exchange Server 2013 RTM Cumulative Update 2 (CU2) on the Exchange Team blog..."
},{
    "title": "Remote Connectivity Analyzer&ndash;Message Analyzer",
    "link": "/2013/06/remote-connectivity-analyzermessage-analyzer",
    "image": null,
    "date": "June 30, 2013",
    "category": null,
    "excerpt": "If you often use the Remote Connectivity Analyzer tool (https://www.testexchangeconnectivity.com/) you may have noticed the &ldquo;Message Analyzer&rdquo; tab that was..."
},{
    "title": "Sizing Exchange 2013 Deployments",
    "link": "/2013/05/sizing-exchange-2013-deployments",
    "image": null,
    "date": "May 14, 2013",
    "category": null,
    "excerpt": "The Exchange Team recently released some great guidance on how to size Exchange 2013 deployments. I think this is a..."
},{
    "title": "Exchange 2013 CU1 Released!",
    "link": "/2013/04/exchange-2013-cu1-released-2",
    "image": null,
    "date": "April 4, 2013",
    "category": null,
    "excerpt": "Following the release of Exchange 2010 SP3 in February, the Exchange Team have announced the release of Exchange Server 2013..."
},{
    "title": "Exchange Server and the Reverse Proxy",
    "link": "/2013/03/exchange-server-and-the-reverse-proxy",
    "image": null,
    "date": "March 27, 2013",
    "category": null,
    "excerpt": "Ever since Microsoft announced that Forefront Threat Management Gateway (TMG) 2010 will be discontinued, I have had many customers ask..."
},{
    "title": "iOS 6.1.2 Software Update - Fixes Exchange calendar bug",
    "link": "/2013/02/ios-6-1-2-software-update-fixes-exchange-calendar-bug",
    "image": null,
    "date": "February 20, 2013",
    "category": null,
    "excerpt": "Looks like Apple finally released an update to fit the exchange calendar bug\n&nbsp;\n\n"
},{
    "title": "Apple iOS 6.1 devices causing increased resource consumption in Exchange Server 2010",
    "link": "/2013/02/apple-ios-6-1-devices-causing-increased-resource-consumption-in-exchange-server-2010",
    "image": null,
    "date": "February 14, 2013",
    "category": null,
    "excerpt": "Update: iOS 6.1.2 resolves this problem I have see a lot of reports lately about the Apple iOS 6.1 bug..."
},{
    "title": "Exchange 2010 SP3 Released!",
    "link": "/2013/02/exchange-2010-sp3-released",
    "image": null,
    "date": "February 13, 2013",
    "category": null,
    "excerpt": "A few moments ago the Microsoft Exchange Team announced the availability of Exchange 2010 SP3. I can&rsquo;t remember any other..."
},{
    "title": "Exchange 2013 Server Role Architecture",
    "link": "/2013/01/exchange-2013-server-role-architecture",
    "image": null,
    "date": "January 24, 2013",
    "category": null,
    "excerpt": "In case you missed it, the evolution of hardware has caused an architectural change in Exchange 2013.. gone are the..."
},{
    "title": "Lync Online 2013 Remote PowerShell",
    "link": "/2013/01/lync-online-2013-remote-powershell",
    "image": null,
    "date": "January 22, 2013",
    "category": null,
    "excerpt": "As we are all aware, the next wave of Office 365 is currently in preview and will be available soon...."
},{
    "title": "How to check your Office 365 tenant version?",
    "link": "/2013/01/how-to-check-your-office-365-tenant-version",
    "image": null,
    "date": "January 15, 2013",
    "category": null,
    "excerpt": "Ever wondered what version of Exchange your tenant is provisioned on? Michael Van Horenbeeck has written quick post on how..."
},{
    "title": "Exchange 2007 & 2010 problems after installing KB2506146 or KB2506143",
    "link": "/2012/12/exchange-2007-2010-problems-after-installing-kb2506146-or-kb2506143",
    "image": null,
    "date": "December 15, 2012",
    "category": null,
    "excerpt": "Microsoft recently released&nbsp;KB2506146&nbsp;and&nbsp;KB2506143&nbsp;as optional updates depending on your which server version you are running (2008 SP2 or 2008 R2 SP1)..."
},{
    "title": "Controlling ActiveSync device access on Exchange 2013",
    "link": "/2012/11/controlling-activesync-device-access-on-exchange-2013",
    "image": null,
    "date": "November 6, 2012",
    "category": null,
    "excerpt": "I previously blogged about controlling ActiveSync device access on Exchange 2010 and Exchange Online and thought I would follow-up with..."
},{
    "title": "Microsoft Lync Basic 2013",
    "link": "/2012/11/microsoft-lync-basic-2013",
    "image": null,
    "date": "November 5, 2012",
    "category": null,
    "excerpt": "Microsoft recently released Lync Basic 2013, a slimmer version of the Lync client that provides all the basic functionality available..."
},{
    "title": "Controlling ActiveSync device access on Exchange 2010 and Exchange Online",
    "link": "/2012/10/controlling-activesync-device-access-on-exchange-2010-and-exchange-online",
    "image": null,
    "date": "October 16, 2012",
    "category": null,
    "excerpt": "I am often surprised by how few customers know about or use ActiveSync device access rules (or ABQ for short)..."
},{
    "title": "Exchange 2013 is RTM!",
    "link": "/2012/10/exchange-2013-is-rtm",
    "image": null,
    "date": "October 12, 2012",
    "category": null,
    "excerpt": "Earlier today Exchange 2013 reached RTM status. This is a very exciting announcement and means that coding and testing is..."
},{
    "title": "Exchange 2013 - Introducing The Exchange Administration Center",
    "link": "/2012/09/exchange-2013-introducing-the-exchange-administration-center",
    "image": null,
    "date": "September 11, 2012",
    "category": null,
    "excerpt": "If you&rsquo;ve decided to get you hands dirty with the Exchange 2013 Preview, the first thing you probably noticed when..."
},{
    "title": "MEC 2012 - The lost conference!",
    "link": "/2012/09/mec-2012-the-lost-conference",
    "image": null,
    "date": "September 9, 2012",
    "category": null,
    "excerpt": "I can&rsquo;t believe how quickly this year has gone, it is almost time for me to start packing my bags..."
},{
    "title": "Greig&rsquo;s handy tools for Lync",
    "link": "/2012/08/greigs-handy-tools-for-lync",
    "image": null,
    "date": "August 31, 2012",
    "category": null,
    "excerpt": "My friend and colleague Greig Sheridan recently released a couple of handy client side tools for Lync. I think they..."
},{
    "title": "A new look..",
    "link": "/2012/08/a-new-look",
    "image": null,
    "date": "August 29, 2012",
    "category": null,
    "excerpt": "After more than 2 years of the same I have decided to give my blog a new look. It is..."
},{
    "title": "Say EHLO to Exchange 2013!",
    "link": "/2012/07/say-ehlo-to-exchange-2013",
    "image": null,
    "date": "July 17, 2012",
    "category": null,
    "excerpt": "I am very excited to let you all know that Microsoft has made the preview release of Exchange 2013 available..."
},{
    "title": "Exchange Hybrid Multi-namespace Autodiscover Configuration",
    "link": "/2012/06/exchange-hybrid-multi-namespace-autodiscover-configuration",
    "image": null,
    "date": "June 22, 2012",
    "category": null,
    "excerpt": "I came across an interesting issue when using the Exchange Hybrid Configuration Wizard in a multi-namespace environment recently. Autodiscover was..."
},{
    "title": "Remote Move Request: Exception has been thrown by the target of invocation",
    "link": "/2012/05/remote-move-request-exception-has-been-thrown-by-the-target-of-invocation",
    "image": null,
    "date": "May 4, 2012",
    "category": null,
    "excerpt": "If you have a Exchange Hybrid deployment configured and attempt to create a new remote move request you may receive..."
},{
    "title": "Exchange 2010 Voicemail Preview for en-AU (and other languages)",
    "link": "/2012/04/exchange-2010-voicemail-preview-for-en-au-and-other-languages",
    "image": null,
    "date": "April 3, 2012",
    "category": null,
    "excerpt": "One of the downsides of using Exchange 2010 voicemail is that if you live in an English speaking country other..."
},{
    "title": "Updating hybrid configuration failed with error 'Subtask CheckPrereqs execution failed",
    "link": "/2012/03/updating-hybrid-configuration-failed-with-error-subtask-checkprereqs-execution-failed",
    "image": null,
    "date": "March 27, 2012",
    "category": null,
    "excerpt": "I came across this error recently while running the Hybrid Configuration Wizard on Exchange 2010 SP2. It caught me out..."
},{
    "title": "Discover and import .pst files into Exchange Server or Exchange Online",
    "link": "/2012/02/discover-and-import-pst-files-into-exchange-server-or-exchange-online",
    "image": null,
    "date": "February 9, 2012",
    "category": null,
    "excerpt": "The Microsoft Exchange team recently released Microsoft Exchange PST Capture which allows you to search for .pst files on computers..."
},{
    "title": "Decoding Lync&rsquo;s Client-Side Error Messages",
    "link": "/2012/01/decoding-lyncs-client-side-error-messages",
    "image": null,
    "date": "January 9, 2012",
    "category": null,
    "excerpt": "Some of Lync&rsquo;s Client-side error messages don&rsquo;t really explain the reason for the failure. Luckily my friend Greig Sheridan has..."
},{
    "title": "Exchange 2010 &ldquo;Anonymous Relay&rdquo; Receive Connector",
    "link": "/2012/01/exchange-2010-anonymous-relay-receive-connector",
    "image": null,
    "date": "January 4, 2012",
    "category": null,
    "excerpt": "In almost every environment I have ever seen there are usually some devices and/or systems that need to send email..."
},{
    "title": "Exchange 2010 Service Pack 2 (SP2)",
    "link": "/2011/12/exchange-2010-service-pack-2-sp2",
    "image": null,
    "date": "December 23, 2011",
    "category": null,
    "excerpt": "Just in case you missed it, Exchange 2010 SP2 was released earlier this month. The following features and functionality has..."
},{
    "title": "Microsoft Online Services Internet Connection Performance Test",
    "link": "/2011/11/microsoft-online-services-internet-connection-performance-test",
    "image": null,
    "date": "November 2, 2011",
    "category": null,
    "excerpt": "This handy little tool has been around for some time now but I&rsquo;ve found that it does not seem to..."
},{
    "title": "Jetstress Error: The MSExchange Database or MSExchange Database ==> Instrances performance counter category isn't registered",
    "link": "/2011/10/jetstress-error-the-msexchange-database-or-msexchange-database-instrances-performance-counter-category-isnt-registered",
    "image": null,
    "date": "October 28, 2011",
    "category": null,
    "excerpt": "I recently came across this error while using Jetstress to test and validate the performance of their Exchange storage. I..."
},{
    "title": "Tech-Ed Australia To Go: Moving Email from On Premise Into the Cloud",
    "link": "/2011/10/tech-ed-australia-to-go-moving-email-from-on-premise-into-the-cloud",
    "image": null,
    "date": "October 14, 2011",
    "category": null,
    "excerpt": "Toby and I talking about our &ldquo;Microsoft Office 365: From Simple Migration to a Hybrid Environment&rdquo; session at At Tech-Ed..."
},{
    "title": "Chris&rsquo;s Blog - Now mobile friendly :)",
    "link": "/2011/09/chriss-blog-now-mobile-friendly",
    "image": null,
    "date": "September 28, 2011",
    "category": null,
    "excerpt": "This post is slightly off-topic compared to my regular posts, but its something I&rsquo;ve been thinking about for some time..."
},{
    "title": "Microsoft \"Future of productivity\"",
    "link": "/2011/09/microsoft-future-of-productivity",
    "image": null,
    "date": "September 6, 2011",
    "category": null,
    "excerpt": "I recently saw this at Tech-Ed Australia and finally managed to track it down so I could share it. I..."
},{
    "title": "Tech-Ed Australia 2011 &ndash; Must see sessions",
    "link": "/2011/08/tech-ed-australia-2011-must-see-sessions",
    "image": null,
    "date": "August 30, 2011",
    "category": null,
    "excerpt": "After an interesting and somewhat different keynote, Tech-Ed 2011 has officially kicked off. While everyone is enjoying a few cold..."
},{
    "title": "Exchange 2010 &ldquo;You must close all dialog boxes before you can close Exchange Management Console&rdquo;",
    "link": "/2011/08/exchange-2010-you-must-close-all-dialog-boxes-before-you-can-close-exchange-management-console",
    "image": null,
    "date": "August 25, 2011",
    "category": null,
    "excerpt": "I&rsquo;ve seen this error around a few times over the last while but have never really paid too much attention..."
},{
    "title": "Exchange 2010 remote mailbox move to Office 365 &ldquo;Microsoft Exchange Critical Error&rdquo;",
    "link": "/2011/08/exchange-2010-remote-mailbox-move-to-office-365-microsoft-exchange-critical-error",
    "image": null,
    "date": "August 25, 2011",
    "category": null,
    "excerpt": "I&rsquo;ve been having a problem with remote mailbox moves to Office 365. The move completes successfully and everything works ok,..."
},{
    "title": "Update Rollup 5 for Exchange Server 2010 Service Pack 1",
    "link": "/2011/08/update-rollup-5-for-exchange-server-2010-service-pack-1",
    "image": null,
    "date": "August 24, 2011",
    "category": null,
    "excerpt": "Earlier today the Exchange team announced the release of Update Rollup 5 for Exchange Server 2010 Service Pack 1. Update..."
},{
    "title": "Exchange Server Version and Update Rollup Build Numbers",
    "link": "/2011/08/exchange-server-version-and-update-rollup-build-numbers",
    "image": null,
    "date": "August 10, 2011",
    "category": null,
    "excerpt": "Have you ever had to figure out what version of Exchange a build number is referring to or vice versa?..."
},{
    "title": "Microsoft Tech-Ed Australia 2011",
    "link": "/2011/08/microsoft-tech-ed-australia-2011",
    "image": null,
    "date": "August 5, 2011",
    "category": null,
    "excerpt": "It&rsquo;s almost time to head to the Gold Coast for Tech-Ed 2011. I will be tweeting and blogging from the..."
},{
    "title": "Microsoft Certified Master | Exchange Server 2010",
    "link": "/2011/08/microsoft-certified-master-exchange-server-2010",
    "image": null,
    "date": "August 3, 2011",
    "category": null,
    "excerpt": "During the month of June I was fortunate enough to attend the Microsoft Certified Master rotation at Microsoft in Redmond,..."
},{
    "title": "Moving from BPOS to Office365 &ndash; &ldquo;550 5.4.1 Relay Access Denied&rdquo;",
    "link": "/2011/07/moving-from-bpos-to-office365-550-5-4-1-relay-access-denied",
    "image": null,
    "date": "July 1, 2011",
    "category": null,
    "excerpt": "With the recent launch of Office365 I was very excited at the thought of moving my existing BPOS account to..."
},{
    "title": "Exchange Server Deployment Assistant Update",
    "link": "/2011/06/exchange-server-deployment-assistant-update",
    "image": null,
    "date": "June 12, 2011",
    "category": null,
    "excerpt": "One of my favourite tools is the Exchange Server Deployment Assistant. The Deployment Assistant asks you some questions about your..."
},{
    "title": "Do you still use Public Folders?",
    "link": "/2011/05/do-you-still-use-public-folders",
    "image": null,
    "date": "May 10, 2011",
    "category": null,
    "excerpt": "The Exchange Team are looking to learn a bit more about your public folder topologies and usage scenarios. They have..."
},{
    "title": "Exchange 2007 Service Pack 3 Update Rollup 3 re-released!",
    "link": "/2011/03/exchange-2007-service-pack-3-update-rollup-3-re-released",
    "image": null,
    "date": "March 31, 2011",
    "category": null,
    "excerpt": "I recently posted about an issue with Exchange 2007 SP3 RU3 that could result in database corruption. The Exchange Servicing..."
},{
    "title": "Potential for database corruption after installing Exchange 2007 SP3 RU3",
    "link": "/2011/03/potential-for-database-corruption-after-installing-exchange-2007-sp3-ru3",
    "image": null,
    "date": "March 30, 2011",
    "category": null,
    "excerpt": "I recently posted about the availability of Update Rollup 3 for Exchange 2007 SP3 and Exchange 2010 SP1 and then..."
},{
    "title": "BPOS/Office 365 and BlackBerry",
    "link": "/2011/03/bposoffice-365-and-blackberry",
    "image": null,
    "date": "March 17, 2011",
    "category": null,
    "excerpt": "Microsoft recently announced that they are in the process of updating pricing for the Hosted BlackBerry Service for Exchange Online..."
},{
    "title": "Update Rollup 3 for Exchange 2010 &ndash; Download disabled",
    "link": "/2011/03/update-rollup-3-for-exchange-2010-download-disabled",
    "image": null,
    "date": "March 17, 2011",
    "category": null,
    "excerpt": "There have been reports of an issue impacting some customers which have RIM BlackBerry devices connecting to Exchange 2010 SP1..."
},{
    "title": "Update Rollup 3 for Exchange 2007 SP3 and Exchange 2010 SP1",
    "link": "/2011/03/update-rollup-3-for-exchange-2007-sp3-and-exchange-2010-sp1",
    "image": null,
    "date": "March 9, 2011",
    "category": null,
    "excerpt": "The Exchange CXP team recently released Update Rollup 3 for Exchange Server 2007 SP3 and Exchange Server 2010 SP1 to..."
},{
    "title": "Upgrading from Windows 1.0 to Windows 7",
    "link": "/2011/03/upgrading-from-windows-1-0-to-windows-7",
    "image": null,
    "date": "March 4, 2011",
    "category": null,
    "excerpt": "This one is slightly off topic, but I thought I would share it nonetheless. I recently came across a post..."
},{
    "title": "Exchange support for Windows Server 2008 R2 SP1",
    "link": "/2011/02/exchange-support-for-windows-server-2008-r2-sp1",
    "image": null,
    "date": "February 14, 2011",
    "category": null,
    "excerpt": "Last week the Windows Server team announced the Release to Manufacturing (RTM) of Windows Server 2008 R2 Service Pack 1..."
},{
    "title": "Exchange 2010 SP1 IPD released",
    "link": "/2011/01/exchange-2010-sp1-ipd-released",
    "image": null,
    "date": "January 6, 2011",
    "category": null,
    "excerpt": "The solution accelerators team has released a new Infrastructure Planning and Design (IPD) guide for Microsoft Exchange Server 2010 with..."
},{
    "title": "Windows Phone 7 &ndash; My thoughts..",
    "link": "/2011/01/windows-phone-7-my-thoughts",
    "image": null,
    "date": "January 4, 2011",
    "category": null,
    "excerpt": "I don&rsquo;t often have much to say about mobile devices.. it is a frequently discussed topic amongst my friends and..."
},{
    "title": "Exchange 2010 Online Archive support in Outlook 2007",
    "link": "/2010/12/exchange-2010-online-archive-support-in-outlook-2007",
    "image": null,
    "date": "December 24, 2010",
    "category": null,
    "excerpt": "It&rsquo;s been a long time coming.. Earlier this year it was announced that Exchange 2010 online archive support for Outlook..."
},{
    "title": "Scott Schnoll on Backup Strategy in Exchange 2010",
    "link": "/2010/12/scott-schnoll-on-backup-strategy-in-exchange-2010",
    "image": null,
    "date": "December 22, 2010",
    "category": null,
    "excerpt": "This is a slightly old interview with Microsoft&rsquo;s Scott Schnoll where he talks about backup strategy in Exchange 2010. While..."
},{
    "title": "Exchange Server Deployment Assistant &ndash; Coexistence Scenario",
    "link": "/2010/12/exchange-server-deployment-assistant-coexistence-scenario",
    "image": null,
    "date": "December 20, 2010",
    "category": null,
    "excerpt": "I previously posted about the Exchange Server Deployment Assistant. The Deployment Assistant asks you some questions about your particular Exchange..."
},{
    "title": "Exchange 2010 Mailbox Role Calculator and SPECint2006 Rate Value",
    "link": "/2010/11/exchange-2010-mailbox-role-calculator-and-specint2006-rate-value",
    "image": null,
    "date": "November 19, 2010",
    "category": null,
    "excerpt": "I often talk about the Exchange 2010 Mailbox role calculator, I&rsquo;m sure everyone uses it (everyone should be using it!)..."
},{
    "title": "Outlook Anywhere and Wildcard Certificates",
    "link": "/2010/11/outlook-anywhere-and-wildcard-certificates",
    "image": null,
    "date": "November 17, 2010",
    "category": null,
    "excerpt": "Exchange 2007 brought about a change in the way Exchange uses certificates and introduced us to the concept of a..."
},{
    "title": "Jetstress Field Guide",
    "link": "/2010/11/jetstress-field-guide",
    "image": null,
    "date": "November 16, 2010",
    "category": null,
    "excerpt": "I&rsquo;m often asked by my customers and colleagues about Jetstress. While I always recommend that Jetstress be used to validate..."
},{
    "title": "Rollup, Rollup!",
    "link": "/2010/10/rollup-rollup",
    "image": null,
    "date": "October 11, 2010",
    "category": null,
    "excerpt": "The last month has seen the release of Update Rollup 1 for Exchange 2007 SP3 and Update Rollup 1 for..."
},{
    "title": "Forefront TMG error : %%-2146233088",
    "link": "/2010/10/forefront-tmg-error-2146233088",
    "image": null,
    "date": "October 11, 2010",
    "category": null,
    "excerpt": "Earlier this year I post a 6 part post entitled &ldquo;Securing Exchange 2010 with Forefront Threat Management Gateway (TMG) 2010&rdquo;..."
},{
    "title": "Exchange 2010 Moving Mail Queue",
    "link": "/2010/09/exchange-2010-moving-mail-queue",
    "image": null,
    "date": "September 7, 2010",
    "category": null,
    "excerpt": "In early 2009 I wrote an post entitled &ldquo;Exchange 2007 SP1 Moving Mail Queue/Transport Dumpster&rdquo;. This post is still one..."
},{
    "title": "Exchange 2010 SP1 Prerequisites",
    "link": "/2010/08/exchange-2010-sp1-prerequisites",
    "image": null,
    "date": "August 30, 2010",
    "category": null,
    "excerpt": "I recently posted about the availability of Exchange 2010 SP1 and thought I would provide some feedback about the installation..."
},{
    "title": "Exchange 2010 SP1 is here!",
    "link": "/2010/08/exchange-2010-sp1-is-here",
    "image": null,
    "date": "August 27, 2010",
    "category": null,
    "excerpt": "In April I posted about some of the new features that will be available in Exchange 2010 SP1. The most..."
},{
    "title": "Exchange 2010: The user \"domain\\username\" isn't assigned to any management roles.",
    "link": "/2010/08/exchange-2010-the-user-domainusername-isnt-assigned-to-any-management-roles",
    "image": null,
    "date": "August 18, 2010",
    "category": null,
    "excerpt": "I was running through the Exchange 2010 installation process earlier today, during the installation process, everything went really smoothly and..."
},{
    "title": "Gartner positions Microsoft in the Leaders quadrant",
    "link": "/2010/07/gartner-positions-microsoft-in-the-leaders-quadrant",
    "image": null,
    "date": "July 5, 2010",
    "category": null,
    "excerpt": "On the strength of its market position, Microsoft has recently been placed in the Leaders Quadrant in Gartner&rsquo;s Magic Quadrant..."
},{
    "title": "Client Network Requirements in Exchange 2010",
    "link": "/2010/07/client-network-requirements-in-exchange-2010",
    "image": null,
    "date": "July 5, 2010",
    "category": null,
    "excerpt": "Client network traffic is area that often generates many questions. This area is frequently the subject of discussion when site..."
},{
    "title": "Exchange 2007 SP3 Released!",
    "link": "/2010/06/exchange-2007-sp3-released",
    "image": null,
    "date": "June 22, 2010",
    "category": null,
    "excerpt": "In November last year I mentioned that Windows 2008 R2 support for Exchange 2007 was been announced. The Exchange product..."
},{
    "title": "Updates to the Exchange Mailbox Server Role Requirements Calculators",
    "link": "/2010/06/updates-to-the-exchange-mailbox-server-role-requirements-calculators",
    "image": null,
    "date": "June 16, 2010",
    "category": null,
    "excerpt": "The Exchange 2007 and Exchange 2010 Mailbox Server Role Requirements Calculators have recently been updated. If you use either of..."
},{
    "title": "Exchange Humor.. Epic Awesomeness!",
    "link": "/2010/06/exchange-humor-epic-awesomeness",
    "image": null,
    "date": "June 9, 2010",
    "category": null,
    "excerpt": "I was looking around the attachments section of the MS Exchange Team blog earlier trying to find an older version..."
},{
    "title": "Exchange 2010 SP1 beta now available!",
    "link": "/2010/06/exchange-2010-sp1-beta-now-available",
    "image": null,
    "date": "June 9, 2010",
    "category": null,
    "excerpt": "I recently posted about the new features that will be available in Exchange 2010 Service Pack 1 (SP1). Microsoft have..."
},{
    "title": "Securing Exchange 2010 with Forefront Threat Management Gateway (TMG) 2010, Part 6 - Publishing Outlook Web App",
    "link": "/2010/06/securing-exchange-2010-with-forefront-threat-management-gateway-tmg-2010-part-6-publishing-outlook-web-app",
    "image": null,
    "date": "June 2, 2010",
    "category": null,
    "excerpt": "In the first 5 parts of this series, I went through all the steps required to successfully install Forefront Protection..."
},{
    "title": "Securing Exchange 2010 with Forefront Threat Management Gateway (TMG) 2010, Part 5 - Putting it all together",
    "link": "/2010/06/securing-exchange-2010-with-forefront-threat-management-gateway-tmg-2010-part-5-putting-it-all-together",
    "image": null,
    "date": "June 1, 2010",
    "category": null,
    "excerpt": "We finally have our consolidated Exchange Server Edge and TMG 2010 server installed, but what now? How do we take..."
},{
    "title": "Securing Exchange 2010 with Forefront Threat Management Gateway (TMG) 2010, Part 4 - Installing Forefront Threat Management Gateway",
    "link": "/2010/05/securing-exchange-2010-with-forefront-threat-management-gateway-tmg-2010-part-4-installing-forefront-threat-management-gateway",
    "image": null,
    "date": "May 28, 2010",
    "category": null,
    "excerpt": "Here we are, Part 4 of the series. To recap what I have done thus far.. I&rsquo;ve installed the Exchange..."
},{
    "title": "Securing Exchange 2010 with Forefront Threat Management Gateway (TMG) 2010, Part 3 - Installing Forefront Protection for Exchange Server",
    "link": "/2010/05/securing-exchange-2010-with-forefront-threat-management-gateway-tmg-2010-part-3-installing-forefront-protection-for-exchange-server",
    "image": null,
    "date": "May 25, 2010",
    "category": null,
    "excerpt": "Welcome to Part 3! In the pervious part of the series I looked at the process of preparing a Windows..."
},{
    "title": "Moving to Microsoft Exchange Online is easy&hellip;",
    "link": "/2010/05/moving-to-microsoft-exchange-online-is-easy",
    "image": null,
    "date": "May 23, 2010",
    "category": null,
    "excerpt": "I recently decided to move my personal domain (cgoosen.com), to Microsoft Exchange Online and I thought it would be appropriate..."
},{
    "title": "Securing Exchange 2010 with Forefront Threat Management Gateway (TMG) 2010, Part 2 - Installing Exchange Server Edge",
    "link": "/2010/05/securing-exchange-2010-with-forefront-threat-management-gateway-tmg-2010-part-2-installing-exchange-server-edge",
    "image": null,
    "date": "May 20, 2010",
    "category": null,
    "excerpt": "In Part 1 of the series I talked about Forefront Threat Management Gateway (TMG) 2010 and how it allows administrators..."
},{
    "title": "Securing Exchange 2010 with Forefront Threat Management Gateway (TMG) 2010, Part 1 &ndash; The Introduction",
    "link": "/2010/05/securing-exchange-2010-with-forefront-threat-management-gateway-tmg-2010-part-1-the-introduction",
    "image": null,
    "date": "May 18, 2010",
    "category": null,
    "excerpt": "November 2009 was an exciting time.. not only did I turn another year older, but, Microsoft launched both Exchange Server..."
},{
    "title": "Easy Exchange 2010 CAS pre-req installation",
    "link": "/2010/04/easy-exchange-2010-cas-pre-req-installation",
    "image": null,
    "date": "April 30, 2010",
    "category": null,
    "excerpt": "Just a short post, hope this will help someone by making Exchange 2010 even easier to deploy. Open Powershell with..."
},{
    "title": "Vulnerabilities in Microsoft Exchange and Windows SMTP Service Could Allow Denial of Service",
    "link": "/2010/04/vulnerabilities-in-microsoft-exchange-and-windows-smtp-service-could-allow-denial-of-service",
    "image": null,
    "date": "April 14, 2010",
    "category": null,
    "excerpt": "Microsoft yesterday published Microsoft Security Bulletin MS10-024. This security update resolves one publicly disclosed vulnerability and one privately reported vulnerability..."
},{
    "title": "First look at Exchange 2010 SP1",
    "link": "/2010/04/first-look-at-exchange-2010-sp1",
    "image": null,
    "date": "April 8, 2010",
    "category": null,
    "excerpt": "The Microsoft Exchange Team yesterday announced the upcoming release of Exchange 2010 Service Pack 1 (SP1). As one would expect,..."
},{
    "title": "OCS 2007 R2 on Windows Server 2008 R2 support",
    "link": "/2010/04/ocs-2007-r2-on-windows-server-2008-r2-support",
    "image": null,
    "date": "April 6, 2010",
    "category": null,
    "excerpt": "Microsoft have announced official support for the Microsoft Office Communications Server 2007 R2 member server role on a server that..."
},{
    "title": "Busted&hellip; Top 10 Exchange Storage Myths",
    "link": "/2010/03/busted-top-10-exchange-storage-myths",
    "image": null,
    "date": "March 30, 2010",
    "category": null,
    "excerpt": "Exchange 2010 includes improvements in performance, reliability, and high availability that enable organizations to run Exchange on a wide range..."
},{
    "title": "Recent Update Rollups for Exchange",
    "link": "/2010/03/recent-update-rollups-for-exchange",
    "image": null,
    "date": "March 22, 2010",
    "category": null,
    "excerpt": "The last three weeks have seen the release of a couple of update rollups. The first of these was Update..."
},{
    "title": "Exchange Server Pre-Deployment Analyzer (ExPDA)",
    "link": "/2010/02/exchange-server-pre-deployment-analyzer-expda",
    "image": null,
    "date": "February 26, 2010",
    "category": null,
    "excerpt": "Microsoft recently released the Exchange Pre-Deployment Analyzer. The Exchange Pre-Deployment Analyzer performs an overall topology readiness scan of your environment...."
},{
    "title": "Exchange Server Virtualization",
    "link": "/2010/02/exchange-server-virtualization",
    "image": null,
    "date": "February 25, 2010",
    "category": null,
    "excerpt": "I am often asked about virtualization when talking to my customers about Exchange. Virtualization has been a big thing in..."
},{
    "title": "Gartner Highlights Key Predictions for IT Organizations and Users in 2010 and Beyond",
    "link": "/2010/01/gartner-highlights-key-predictions-for-it-organizations-and-users-in-2010-and-beyond",
    "image": null,
    "date": "January 15, 2010",
    "category": null,
    "excerpt": "&ldquo;Gartner, Inc. has highlighted the key predictions that herald long-term changes in approach for IT organizations and the people they..."
},{
    "title": "Exchange 2010 Update Rollup 1 Released",
    "link": "/2009/12/exchange-2010-update-rollup-1-released",
    "image": null,
    "date": "December 10, 2009",
    "category": null,
    "excerpt": "Microsoft have announced the release of Update Rollup 1 for Exchange Server 2010. For more information about the rollup and..."
},{
    "title": "Exchange 2010 Server editions",
    "link": "/2009/12/exchange-2010-server-editions",
    "image": null,
    "date": "December 9, 2009",
    "category": null,
    "excerpt": "About a month ago I wrote a short post about how customers using Exchange 2010 are also able to make..."
},{
    "title": "Exchange Server 2010 Deployment Assistant",
    "link": "/2009/11/exchange-server-2010-deployment-assistant",
    "image": null,
    "date": "November 13, 2009",
    "category": null,
    "excerpt": "Now that Exchange 2010 has been officially launched and made available, I&rsquo;m sure many organisations are already thinking about or..."
},{
    "title": "Exchange 2007 on Windows 2008 R2",
    "link": "/2009/11/exchange-2007-on-windows-2008-r2",
    "image": null,
    "date": "November 5, 2009",
    "category": null,
    "excerpt": "Kevin Allison, GM Exchange Customer Experience announced on the Exchange Team blog yesterday that Microsoft will be releasing an update..."
},{
    "title": "DAG&rsquo;s supported in the Exchange 2010 Standard edition",
    "link": "/2009/11/dags-supported-in-the-exchange-2010-standard-edition",
    "image": null,
    "date": "November 3, 2009",
    "category": null,
    "excerpt": "Microsoft have announced that the new high availability feature of Exchange 2010, namely, Database Availability Group, or DAG will be..."
},{
    "title": "Microsoft Virtualization Best Practices for Exchange Server",
    "link": "/2009/10/microsoft-virtualization-best-practices-for-exchange-server",
    "image": null,
    "date": "October 29, 2009",
    "category": null,
    "excerpt": "Microsoft have got a webcast coming up next week to discuss recommendations for virtualizing Exchange server and the benefits of..."
},{
    "title": "Exchange Remote Connectivity Analyzer has been updated!",
    "link": "/2009/10/exchange-remote-connectivity-analyzer-has-been-updated",
    "image": null,
    "date": "October 20, 2009",
    "category": null,
    "excerpt": "The Exchange Team have released an updated version of the Exchange Remote Connectivity Analyzer The tool simulates several client logon..."
},{
    "title": "Climate Change..",
    "link": "/2009/10/climate-change",
    "image": null,
    "date": "October 15, 2009",
    "category": null,
    "excerpt": "That&rsquo;s right, you have not misread the heading.. not the kind of thing you would expect to see on here,..."
},{
    "title": "Exchange 2010 launching at Tech-Ed Europe 2009!",
    "link": "/2009/10/exchange-2010-launche",
    "image": null,
    "date": "October 9, 2009",
    "category": null,
    "excerpt": "The Exchange product team have announced that Exchange 2010 is Code Complete and they are looking to launch at Tech&middot;Ed..."
},{
    "title": "How to determine your AD and Exchange Schema version",
    "link": "/2009/09/how-to-determine-your-ad-and-exchange-schema-version",
    "image": null,
    "date": "September 23, 2009",
    "category": null,
    "excerpt": "I was looking for a good reference of AD and Exchange schema version numbers yesterday and thought it would be..."
},{
    "title": "\"TechEd Australia Should be a Full Week\"",
    "link": "/2009/09/teched-australia-should-be-a-full-week",
    "image": null,
    "date": "September 14, 2009",
    "category": null,
    "excerpt": "Having attended Tech-ed Australia last week, I cant help but echo my friend and colleague Craig's thoughts. Infact, I thought..."
},{
    "title": "Tech-ed 2009 update: Forefront TMG",
    "link": "/2009/09/tech-ed-2009-update-forefront-tmg",
    "image": null,
    "date": "September 10, 2009",
    "category": null,
    "excerpt": "Today I attended the SEC208 session with Jamie Sharp which really provided a great overview of Microsoft Forefront Threat Management..."
},{
    "title": "Tech-ed 2009 update: BPOS rocks!",
    "link": "/2009/09/tech-ed-2009-update-bpos-rocks",
    "image": null,
    "date": "September 9, 2009",
    "category": null,
    "excerpt": "If you are attending tech-ed, make sure you get your Business Productivity Online Suite (BPOS) account setup.. I have been..."
},{
    "title": "Chris&rsquo;s guide to tech-ed Australia 2009!",
    "link": "/2009/09/chriss-guide-to-tech-ed-australia-2009-2",
    "image": null,
    "date": "September 8, 2009",
    "category": null,
    "excerpt": "So you&rsquo;ve arrived in the Gold Coast, checked in, unpacked, visited the gym and checked out the pool (right?) now..."
},{
    "title": "Microsoft Exchange Server Jetstress 2010 Beta",
    "link": "/2009/09/microsoft-exchange-server-jetstress-2010-beta",
    "image": null,
    "date": "September 2, 2009",
    "category": null,
    "excerpt": "Jetstress has been updated to support Exchange 2010. The beta build is now available. There are a few significant changes..."
},{
    "title": "Exchange 2007 SP2 Released",
    "link": "/2009/08/exchange-2007-sp2-released",
    "image": null,
    "date": "August 31, 2009",
    "category": null,
    "excerpt": "Microsoft recently announced the release of Exchange 2007 SP2. One of the key and long awaited features of SP2 is..."
},{
    "title": "ISA 2006 Remote SQL Logging &ldquo;the data area passed to a system call is too small..&rdquo;",
    "link": "/2009/08/isa-2006-remote-sql-logging-the-data-area-passed-to-a-system-call-is-too-small",
    "image": null,
    "date": "August 5, 2009",
    "category": null,
    "excerpt": "I recently came across a very interesting problem while configuring ISA 2006 logging to a remote SQL server. If you..."
},{
    "title": "ISA 2006 Disable Lockdown on log failure",
    "link": "/2009/07/isa-2006-disable-lockdown-on-log-failure",
    "image": null,
    "date": "July 30, 2009",
    "category": null,
    "excerpt": "In Microsoft ISA Server, alerts can be configured to shut down the Microsoft Firewall service when situations that raise specific..."
},{
    "title": "Exchange 2007 SP1 Setup failed due to insufficient permissions",
    "link": "/2009/07/exchange-2007-sp1-setup-failed-due-to-insufficient-permissions",
    "image": null,
    "date": "July 24, 2009",
    "category": null,
    "excerpt": "I came across this error for the first time the other day, not entirely sure why I have not seen..."
},{
    "title": "Exchange 2007 Update Rollup 9 Released",
    "link": "/2009/07/exchange-2007-update-rollup-9-released",
    "image": null,
    "date": "July 20, 2009",
    "category": null,
    "excerpt": "Microsoft have released Update Rollup 9 for Exchange 2007 SP1. This rollup includes included many bug fixes, but also enables..."
},{
    "title": "Helpful Error Message..",
    "link": "/2009/07/helpful-error-message",
    "image": null,
    "date": "July 6, 2009",
    "category": null,
    "excerpt": "After a long day of troubleshooting ISA 2006 array problems, I must say, I felt like one after I saw..."
},{
    "title": "High Availability in Exchange Server 2010",
    "link": "/2009/06/high-availability-in-exchange-server-2010",
    "image": null,
    "date": "June 30, 2009",
    "category": null,
    "excerpt": "There has been a serious lack of original content on my blog this month, with the financial year coming to..."
},{
    "title": "Free OCS 2007 R2 e-books..",
    "link": "/2009/06/free-ocs-2007-r2-e-books",
    "image": null,
    "date": "June 25, 2009",
    "category": null,
    "excerpt": "For the next few days you can download free copies of some MS Press e-books on OCS 2007 R2.. visit..."
},{
    "title": "Did you know?",
    "link": "/2009/05/did-you-know",
    "image": null,
    "date": "May 29, 2009",
    "category": null,
    "excerpt": "I first saw this at a Quest Software presentation a little while ago, fascinating stuff:\n&#160;\n\n\n\n"
},{
    "title": "No 32-bit support in Exchange 2010!",
    "link": "/2009/05/no-32-bit-support-in-exchange-2010",
    "image": null,
    "date": "May 21, 2009",
    "category": null,
    "excerpt": "That&rsquo;s right.. as we already know, when Exchange 2007 was released, a 32-bit version (which was unsupported in production environments)..."
},{
    "title": "Exchange 2010: The Future of Collaboration Webcast",
    "link": "/2009/05/exchange-2010-the-future-of-collaboration-webcast",
    "image": null,
    "date": "May 21, 2009",
    "category": null,
    "excerpt": "The webcast will be hosted by Johann Kruse on Friday, June 19, 2009 11:00 AM Australia (East). To register for..."
},{
    "title": "Exchange Server 2007 SP 2 due in Q3 2009",
    "link": "/2009/05/exchange-server-2007-sp-2-due-in-q3-2009",
    "image": null,
    "date": "May 15, 2009",
    "category": null,
    "excerpt": "Microsoft recently announced that Exchange 2007 SP2 has been slated for release later this year. Exchange Server 2007 SP2 enables..."
},{
    "title": "Exchange 2010 &ldquo;Typical Installation&rdquo;: Part 2",
    "link": "/2009/05/exchange-2010-typical-installation-part-2",
    "image": null,
    "date": "May 6, 2009",
    "category": null,
    "excerpt": "In Part 1 we looked at preparing our server for the installation of Exchange 2010. What about preparing Active Directory..."
},{
    "title": "Exchange 2010 &ldquo;Typical Installation&rdquo;: Part 1",
    "link": "/2009/05/exchange-2010-typical-installation-part-1",
    "image": null,
    "date": "May 4, 2009",
    "category": null,
    "excerpt": "Since the release of Exchange 2010 Beta last month, I have been itching to deploy it in my test environment..."
},{
    "title": "Exchange 2010 Beta released",
    "link": "/2009/04/exchange-2010-beta-released",
    "image": null,
    "date": "April 21, 2009",
    "category": null,
    "excerpt": "We&rsquo;ve all been waiting for it for some time now, Microsoft announced the release of Exchange 2010 Beta last week...."
},{
    "title": "Exchange 2007 Post Deployment Testing: Part 2",
    "link": "/2009/04/exchange-2007-post-deployment-testing-part-2",
    "image": null,
    "date": "April 3, 2009",
    "category": null,
    "excerpt": "In part 1 of this series, I wrote about how to go about testing your new deployment by making use..."
},{
    "title": "How to find and export mailboxes by size in Exchange 2007",
    "link": "/2009/03/how-to-find-and-export-mailboxes-by-size-in-exchange-2007",
    "image": null,
    "date": "March 23, 2009",
    "category": null,
    "excerpt": "My friend Nicolas recently wrote a great post on how to find and export mailboxes by size from the Exchange..."
},{
    "title": "Burn .ISO to disk natively with Windows 7",
    "link": "/2009/03/burn-iso-to-disk-natively-with-windows-7",
    "image": null,
    "date": "March 20, 2009",
    "category": null,
    "excerpt": "I found a really neat little feature today, Windows 7 allows you to burn .ISO files to disk natively without..."
},{
    "title": "Exchange 2007 Post Deployment Testing: Part 1",
    "link": "/2009/03/exchange-2007-post-deployment-testing-part-1",
    "image": null,
    "date": "March 20, 2009",
    "category": null,
    "excerpt": "After your planning and deployment phases have been completed, its very important to ensure proper testing of your new environment..."
},{
    "title": "Exchange 2007 Update Rollup 7 Released",
    "link": "/2009/03/exchange-2007-update-rollup-7-released",
    "image": null,
    "date": "March 19, 2009",
    "category": null,
    "excerpt": "A mere 5 weeks after Update Rollup 6, Microsoft have released Update Rollup 7 for Exchange 2007 Sp1. The update..."
},{
    "title": "Quest Software&rsquo;s UC Solutions",
    "link": "/2009/03/quest-softwares-uc-solutions",
    "image": null,
    "date": "March 18, 2009",
    "category": null,
    "excerpt": "Quest have some really cool products to add value to UC implementations (like you need it, right?) Some of the..."
},{
    "title": "Lenovo T61 Biometric Device on Windows 7",
    "link": "/2009/03/lenovo-t61-biometric-device-on-windows-7",
    "image": null,
    "date": "March 11, 2009",
    "category": null,
    "excerpt": "After rebuilding my trusty T61 with Windows 7 about a week ago, the only device that was not functioning correctly..."
},{
    "title": "IBM Lotusphere Comes to You 2009",
    "link": "/2009/03/ibm-lotusphere-comes-to-you-2009",
    "image": null,
    "date": "March 6, 2009",
    "category": null,
    "excerpt": "Yesterday I attended the IBM Lotusphere Comes to You event here in Sydney. I was excited to see what the..."
},{
    "title": "Windows 7 and Cisco VPN Client",
    "link": "/2009/03/windows-7-and-cisco-vpn-client",
    "image": null,
    "date": "March 2, 2009",
    "category": null,
    "excerpt": "So, managed to get everything installed and working great yesterday, really fought with the Cisco VPN client, but I eventually..."
},{
    "title": "Windows 7: My initial thoughts..",
    "link": "/2009/03/windows-7-my-initial-thoughts",
    "image": null,
    "date": "March 1, 2009",
    "category": null,
    "excerpt": "While some of my &ldquo;bleeding edge&rdquo;&rdquo; colleagues have been running and blogging about Windows 7 for a while now, its..."
},{
    "title": "Exchange 2007 SP1 Moving Mail Queue/Transport Dumpster",
    "link": "/2009/02/exchange-2007-sp1-moving-mail-queuetransport-dumpster",
    "image": null,
    "date": "February 25, 2009",
    "category": null,
    "excerpt": "UPDATE: For information on how to move the Exchange 2010 Mail Queue, see \"Exchange 2010 Moving Mail Queue\" One problem..."
},{
    "title": "New Zealand Internet Blackout: \"A remarkable victory\"",
    "link": "/2009/02/new-zealand-internet-blackout-a-remarkable-victory",
    "image": null,
    "date": "February 25, 2009",
    "category": null,
    "excerpt": "I recently posted about the NZ Internet Blackout and I am happy to report that the campaign was very successful...."
},{
    "title": "Exchange 2007 Update Rollup 6 - My Experience",
    "link": "/2009/02/exchange-2007-update-rollup-6-my-experience",
    "image": null,
    "date": "February 23, 2009",
    "category": null,
    "excerpt": "On 12 Feb I blogged about Exchange 2007 Update Rollup 6 having been released and that it also includes a..."
},{
    "title": "Exchange 2007 SP1 CCR Passive node installation failure",
    "link": "/2009/02/exchange-2007-sp1-ccr-passive-node-installation-failure",
    "image": null,
    "date": "February 20, 2009",
    "category": null,
    "excerpt": "When installing a Exchange 2007 SP1 in Cluster Continuous Replication (CCR) cluster, the passive node installation fails with the following..."
},{
    "title": "Join The New Zealand Internet Blackout",
    "link": "/2009/02/join-the-new-zealand-internet-blackout",
    "image": null,
    "date": "February 17, 2009",
    "category": null,
    "excerpt": "Those of you who frequent my blog (or follow me on twitter) will know that I am strongly to any..."
},{
    "title": "Internet Censorship in Australia: Update",
    "link": "/2009/02/internet-censorship-in-australia-update-3",
    "image": null,
    "date": "February 13, 2009",
    "category": null,
    "excerpt": "THE Federal Government's internet filtering plan has been compared to censorship in China by one of the participants in its..."
},{
    "title": "Internet Censorship in Australia: Update",
    "link": "/2009/02/internet-censorship-in-australia-update-2",
    "image": null,
    "date": "February 12, 2009",
    "category": null,
    "excerpt": "Conroy announces filtering trial participants. \"The initial round of ISPs are Primus Telecommunications, Tech 2U, Webshield, OMNIconnect, Netforce and Highway..."
},{
    "title": "Exchange 2007 Update Rollup 6",
    "link": "/2009/02/exchange-2007-update-rollup-6",
    "image": null,
    "date": "February 12, 2009",
    "category": null,
    "excerpt": "Microsoft has released Update Rollup 6 for Microsoft Exchange Server 2007 Service Pack 1. More information about this update is..."
},{
    "title": "Internet Censorship in Australia: Update",
    "link": "/2009/02/internet-censorship-in-australia-update",
    "image": null,
    "date": "February 2, 2009",
    "category": null,
    "excerpt": "\"Labor's 'deafening silence' as web censorship trials delayed\" read full article here\n"
},{
    "title": "Say EHLO to Exchange 14!",
    "link": "/2009/01/say-ehlo-to-exchange-14",
    "image": null,
    "date": "January 14, 2009",
    "category": null,
    "excerpt": "Already being tested by 3.5 million users and aligned with Microsoft's software plus services strategy. What I find fascinating is..."
},{
    "title": "Mailbox Server Role Storage Requirements Calculator Update",
    "link": "/2009/01/mailbox-server-role-storage-requirements-calculator-update",
    "image": null,
    "date": "January 8, 2009",
    "category": null,
    "excerpt": "In order to assist customers in designing their storage layout for Exchange 2007, Microsoft put together a calculator that focuses..."
},{
    "title": "The Ultimate Mac vs PC!",
    "link": "/2009/01/the-ultimate-mac-vs-pc",
    "image": null,
    "date": "January 8, 2009",
    "category": null,
    "excerpt": "I'm sure we've all witnessed the \"ad war\" between Apple and Microsoft.. here is one of the best ones I..."
},{
    "title": "Stop Internet Censorship in Australia",
    "link": "/2009/01/stop-internet-censorship-in-australia",
    "image": null,
    "date": "January 2, 2009",
    "category": null,
    "excerpt": "I am a little surprised that there has not been more noise made about this.. thought I would do my..."
},{
    "title": "Microsoft Exchange Server Remote Connectivity Analyzer",
    "link": "/2008/12/microsoft-exchange-server-remote-connectivity-analyzer",
    "image": null,
    "date": "December 19, 2008",
    "category": null,
    "excerpt": "I first heard about this tool at Tech-Ed back in October. The Exchange Server Remote Connectivity Analyzer (ExRCA) tool is..."
},{
    "title": "Exchange 2007 Mailbox server memory recommendations",
    "link": "/2008/12/exchange-2007-mailbox-server-memory-recommendations",
    "image": null,
    "date": "December 11, 2008",
    "category": null,
    "excerpt": "Exchange 2007 enables much better memory utilization than Exchange 2003 due to its 64-bit architecture. Because of the virtual address..."
},{
    "title": "The Matrix Runs on Windows",
    "link": "/2008/12/the-matrix-runs-on-windows",
    "image": null,
    "date": "December 1, 2008",
    "category": null,
    "excerpt": "Something humorous to get the week started!\n\n\nSee more funny videos and funny pictures at CollegeHumor.\n\n\n"
},{
    "title": "Remove Live Messenger Ads",
    "link": "/2008/11/remove-live-messenger-ads",
    "image": null,
    "date": "November 24, 2008",
    "category": null,
    "excerpt": "If you are connected to Live Messenger 24 hours a day like I am, you are undoubtedly annoyed by those..."
},{
    "title": "OCS 2007 R2",
    "link": "/2008/11/ocs-2007-r2",
    "image": null,
    "date": "November 24, 2008",
    "category": null,
    "excerpt": "Microsoft have announced the release of Office Communications Server 2007 R2. Customers will be able to purchase the release, currently..."
},{
    "title": "ISA 2006 - High MSDE memory usage",
    "link": "/2008/11/isa-2006-high-msde-memory-usage",
    "image": null,
    "date": "November 24, 2008",
    "category": null,
    "excerpt": "I came across this issues on a ISA 2006 proxy server the other day. Basically, if you are logging to..."
},{
    "title": "OS X Cant write to external disk",
    "link": "/2008/11/os-x-cant-write-to-external-disk",
    "image": null,
    "date": "November 24, 2008",
    "category": null,
    "excerpt": "Err.. yeah.. so, there you are, you need to copy something from your apple mac to your external disk, but..."
},{
    "title": "WIFI and Hyper-V",
    "link": "/2008/11/wifi-and-hyper-v",
    "image": null,
    "date": "November 24, 2008",
    "category": null,
    "excerpt": "Anyone who has played around with server 2008 and hyper-v would have noticed that you are not able to bind..."
}]

$(document).ready(function() {
    $('#search-input').on('keyup', function () {
        var resultdiv = $('#results-container');
        if (!resultdiv.is(':visible'))
            resultdiv.show();
        var query = $(this).val();
        var result = index.search(query);
        resultdiv.empty();
        $('.show-results-count').text(result.length + ' Results');
        for (var item in result) {
            var ref = result[item].ref;
            var searchitem = '<li><a href="'+ hostname + store[ref].link+'">'+store[ref].title+'</a></li>';
            resultdiv.append(searchitem);
        }
    });
});