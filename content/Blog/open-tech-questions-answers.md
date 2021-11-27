Title: Open Tech Questions & Answers
Authors: Will Ruddick, Shaila Agha
Date: Oct 16 2021
Modified: Oct 16 2021
Slug: open-tech-questions-answers
Summary: open source, free software, blockchain and growth
Tags: open source, copyleft, tech. blockchain

Loads of questions coming up these days around the themes of open
source, free software, blockchain and growth. Below are a list of recent
questions and my take on them.

**Motivation to use open source. Personal philosophy, funders
requirement, other..?**

![image](images/blog/open-tech-questions-answers1.webp)

The above [list](https://www.thehyve.nl/articles/open-source-software-licenses-part-2)
compares two different open source license (Apache 2 on the left and GPL
3 on the right). The heart of open source is that we want to co-create
things that everyone can use and we want to acknowledge the shoulders of
those we stand on. All human innovation is grounded in the dreams of our
ancestors. How lucky are we that Shakespeare's sonnets and the shape of
a violin are not under the rent seeking intellectual property?

Further to this I want to point out that there is a industry of
_peek-a-boo open source_. Where a company lures many into using its
great code - then says "as of this day all further upgrades to this
code base or key elements that make it function will be closed source."
With the Apache 2.0 License, the copyright holder may be counting on the
fact that they at one day can take their currently 'open source' code
and sell future versions or key elements to a large company. Copyleft
(like GPL 3 that we use) on the other hand, seeks to fully renounce
copyright - it's more than just 'showing' your source, it is saying
that all derivative work should also be just as free. Copyleft feels
right for this.

Being born into this world with parents able to provide a good
education, healthy food and security is sadly and simply luck. I would
like to see the chances of children living in and co-creating a
cooperative and harmonious world grow and to acknowledge the luck I've
had. Here is a (work in progress)
[charter](https://gitlab.com/grassrootseconomics/cic-docs/-/blob/master/cic-charter.md)
on our open source repo.

**Funding (in terms of tech & code). Principal funding source?
Additional funding sources? Do some of your funders explicitly request
you use certain technologies? Business model/sustainability? Are
contributors to your codebase paid or volunteers?**

Our funding has come mainly from donations from family members and
humanitarian organizations that have seen the effectiveness of our work.
More and more so, Grassroots Economics Foundation is finding groups that
want to consult us on the creation and management of community currency
programs and technology. Note that our budgets for technology are never
funded for the sake of tech, but rather for specific humanitarian
applications.

Albeit we've had a lot of requests from tech companies; we will not
work with funders that require us to use a specific technology. There is
too much at stake.

The community that has put in the work to build Grassroots Economics is
90% volunteer and about 10% paid. I really appreciate the the team and
those no matter how much they need national currencies.

**Stakeholders. Who are the core authors/ contributors/ partners? What
is their main motivation to contribute? (volunteer, hobby, prestige,
money, passion, philanthropy, availability of time) What are barriers to
participation?**

The main contributors to the open source documentation and software we
create are people like myself who believe we need these tools to build
more cooperative and inclusive societies. Many are lucky enough not to
want or need large salaries.

We're seeing external companies beginning to utilize our software and
techniques more and more, yet rarely see them contributing to our code
base. We also see employees of these companies that want to help but all
their creative work is owned in copyright by the companies they work for
via contract.

The largest barrier to participation is lack of understanding. Community
Currencies - while not new, are a still very much niche. I hope that as
more educational materials are created and more examples are shown
around the world, a new generation of currency designers will emerge.

**Infrastructure and hosting. Any specific reason you're hosting your
repositories on GitLab and not GitHub? Any challenges with scalability
and/or adding new features?**

Here is an excellent comparison of GitLab and GitHub. GitHub is not Open
Source!? .... Strange right?

GitLab is freely available and open is source for community edition. We
have not had any challenges using GitLab.

I want to point out here that we are seeing to NOT be dependent on
GitLab. Please not that Git is neither GitLab or GitHub. Git itself, is
Open Source Software that handles source code versioning, letting you
make and track local file changes and share changes with a remote
repository. You can run it on any server and you don't have to use
GitLab or GitHub. Note that we've moved off of AWS for similar reasons
and are seekign to localize as much as we possibly can.

**Are there any similar projects? What makes this project African? (In
your specific case, why are most of your contributors non African? this
might go back to 'barriers to participation') What does/ doesn't work?
Wishlist? Anything else?**

We're seeing more and more community currency projects getting started
around the world and it is great! I don't know of any that focus on
rural Kenya, or that utilize all open source tech.

Our code base for USSD interfaces and backend systems started with Kibet
Yegon in 2015 and was later adopted by Philip Wafula, Spencer Ofwiti and
Mohammed Sohail - All of whom are born and raised in Kenya. Team members
and volunteers from around the world (California, India, France,
Germany) have all come in the last year. I expect we will always have a
strong base in great Kenyan programmers with a growing community
worldwide.

One thing that makes this project uniquely Kenyan - is that its main
users are people without internet living in rural Kenya. Using feature
phones to access and create their own currencies (connected to
blockchains) has been an amazing effort and taught us so much. We are
not looking for commercial adoption, but to help these communities that
we love so much and share those tools with the world.

**What are the main challenges you have to deploy your solution and grow
the user base? (other than funding, looking particularly on technical
challenges or challenges for users growth)**

USSD/SMS: A challenge is our scalability in rural areas due to telecom
costs. Currently we pay for each USSD session and SMS received by
beneficiaries and our service provider will not discount charges as we
scale up. We're working on systems that are less reliant on telecoms
but that means it is harder to work with people without internet.

Regulation: The world governments don't make it easy for people to
choose to create or use their own credit systems. Integration with local
tax systems is a big area of research and focus with systems like
demurrage.

**Explain in detail how is your blockchain application better than
non-blockchain alternatives? Why do you need to use blockchain?**

We don't want to lock users into a particular platform to access their
accounts. When people create currencies they should be free to use them
on any interface and even transfer them to other ledgers. A public
ledger system can give this freedom to ensure there isn't just one
interface to your accounts or information. Utilizing various aspects of
blockchain fits very well with our belief in open source and free
software, especially in regard to avoiding vendor lock-in.

I don't believe in there being ONE blockchain and want to ensure that
on any ledger system we use, the users are free to move off of it. We
also must ensure that the ledger system is not rent seeking and that
users won't be able to afford the transaction fees.

All of these requirements has led us toward using small side-chains run
by universities, rather than the larger blockchains. We are also focused
on how communities can run their own ledgers and link them together.

A huge part of why we use blockchain is the ability to have
cryptographically signed proofs - so that a user claiming to be a health
worker can be validated by someone else. Finally we are also very
focused on connecting CICs together and to other tokens via liquidity
pools (Decentralized Exchanges). This allows a local credit system to
find liquidity among a market of other such systems - forming a
decentralized economic system.

**You reported to have had users mainly farmers, community leaders,
teachers, shop-owners. Is that still the number and the kind of users
you'd describe? What is the engagement those users have had with your
platform? (eg. they are building a building a credit, accessing digital
payments, etc). Any other metrics you can share that show the impact of
your app? (Eg. alternative credit achieved)**

Our beneficiaries have increased exponentially to 58,400 users, farmers
and laborers make up the largest portion of trade volumes at 1.74m,
followed by savings groups who are second with 1.27m and followed by
food/water at 651k. We are working on giving users the ability to create
their own community tokens as the current system only allows one token
(Sarafu).

The beneficiaries register, receive a UBI token amounting to $1, then
use it to save, exchange goods and services and now, create credit for
their future production. Beneficiaries mostly in community savings
groups, can apply for a grant where they receive training on syntropic
agroforestry, and create credit which they guarantee with their future
production. The CICs are used to pay labourers, school fees, farm
inputs, produce etc.

The intervention has a 5x more increase in trade volume than traditional
aid within 2 months. This is because the CIC remains in the community
moving from household to household. Not only does it improve
livelihoods, it empowers a community by giving them the tools needed to
accomplish their dreams.

**Can you explain how your app and the CIC are working exactly for the
users above? Please explain how the credit is created (note that we are
particularly interested not in the theory of the model but in
understanding what is already working and what role blockchain plays in
that)**

We're in the process of releasing a completely new version of our
software which is a custodial key management system that allows
community groups to create their own Community Inclusion Currency (CIC).
In this case a group of users comes together and after a training they
fill out a CIC creation application, in which they specify the goods and
services they wish to be redeemable for their own CIC (voucher). They
are creating a credit against their future production, which is endorsed
by local authorities. In example a group of 28 women may create 50,000
vouchers redeemable for 50,000 Kenyan shillings worth of their goods and
services. These vouchers are shared in the group and circulate both
internally and externally in the community. The vouchers also have a
gradual expiration rate (aka demurrage). The CICs are created via
deployment of a contract on a EVM blockchain. The contract stores the
information about the token issuer and determines the expiration rate.
Our USSD interface enables a users to access their blockchain wallet and
transfer tokens.

Humanitarian organizations can purchase and redistribute these vouchers
as they would in a Cash and Voucher assistance program - while ensuring
that there is an added local multiplier effect from sourcing the
donation locally. These CIC vouchers can also be connected to each other
and other tokens via liquidity pools as mentioned above. Finally,
besides being redeemable for gods and services CICs can also be used to
support or buy data products or verified claims such as carbon offsets
or Sustainable Development Impacts from the community creating them.
