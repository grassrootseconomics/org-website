Title: Currency Supply, Taxation and Redistribution
Author: Will Ruddick
Date: Dec 6, 2020
Slug: currency-supply
Summary: What does a decentralized economic system look like?
Tags: algorithm,supply,tax,redistribution,modeling

# Tax Redistribution Algorithms

The local clustering coefficient (C) for a particular currency trading
user is given by the proportion of connections or trade partners (via
trading CICs) between the users within that users neighborhood divided
by the number of connections that could possibly exist between them.
<https://en.wikipedia.org/wiki/Clustering_coefficient>

The average clustering coefficient sums the clustering coefficients for
all the users and divides by the number of users in that neighborhood.

The neighborhood could span to sum over 2nd and 3rd order trade partners
as well. This average clustering coefficient (ACC) therefore gives us a
simple measurement of how connected people are (how much do the users
around a particular user (to 3rd order) trade with each other).

This is interesting but doesn't scale well; How would one compare two
users, both with a C = 1, while one of them has 3 trading partners and
the other has 10? Therefore we can multiply ACC by the total number of
trade partners that user has -- hence normalizing the ACC into a
Normalized clustering coefficient (NACC).

The NACC for each user gives us a relative ranking of each user via the
contentedness of their network of trade partners but what about the sum
of all the NACCs -- does this not represent the overall contentedness of
the entire network (Total Normalized clustering coefficient)? If we take
each user's percentage of the total (NACC / TNACC) = pTNACC (percentile
of the Total Normalized clustering coefficient ) we have a percentile
ranking of each user in the network -- corresponding to their relative
contentedness in the entire network.

K-Cycle centrality (like
[Teodoro](https://networkdatascience.ceu.edu/people/teodoro-criscione)
is working on!) may be a good measure as well -- and reminds me to
mention -- the characteristic time-frame is very important -- clusters
in this light are small structures that can form rapidly (1 week
periods) while k-cycles (especially higher order k-cycles) may take
months.

**You might be asking "a good measure for what?"**

The distribution of pTNACC can tell us a lot about a network. If there
are only a few very high pTNACC users it means that the network is
potentially very brittle. It is also a metric that becomes harder and
harder to fake or Sybil attack if there is a transaction and/or
coordination cost -- as the overall cost of the attack would grow
exponentially.

On a weekly basis we can test this out on the current Kenyan trading
data by asking are the users with a higher pTNACC actually important
nodes in the network? It would seem so. Looking at the current data
<https://www.grassrootseconomics.org/pages/research.html> -- users would be in the 90th percentile

- highest ranking pTNACC scores end up being key nodes hubs or chamas
  (groups) in the [Sarafu trading
  Network](https://www.grassrootseconomics.org/sarafu-network) .

Looking at people and groups of people as important elements in a local
economy as a social scoring system is quite interesting. Especially is
its fallibility is tied up in the ultimate cost to game the system
compared to any potential benefits. In addition, if people receive a tax
benefit or tax redistribution based on a higher pTNACC score: would this
scoring system motivate people to develop networks around their goods
and services more? Is that an intrinsically good thing? Does rewarding
pTNACC result in positive social outcomes - trust, resilient markets and
so on? - We're working with researchers to help determine this.

# Voting systems on tax redistribution.

Rather than an automated system that measures trade clustering and sends
out tax redistribution, what if each user of the network could simply
have 100 voting tokens each month -- and you send them to whom you are
voting for and based on the percentile of votes one gets, that
percentage of the total tax redistribution pool. Say the vote tokens get
wiped and reset each month and we have strong identity controls to
protect against a Sybil attack. This sounds very nice, but can also be
corrupted via populism. How about a combination of an algorithmic
measure and a voting system?

Before we get into that: "What is this source of tax redistribution
pool?" you might well be asking.

# Holding taxes

Imagine your bank charged you a percentage of your balance every Monday
as a holding tax? Well you wouldn't want to be storing too much money in
that account, would you? (n.b. Better calculating and charging for an
averaged balance over a time period.) This will create a sort of
demurrage effect or hot potato, where people want to move their currency
as fast as they can (undesirable to save). Rather than this being a bank
function it could be built into the currencies smart contract on a
blockchain. Those people who can't move their CIC and have the most of
it - pay more tax (no matter where they put it).

This tax can be redistributed in an near infinite number of ways: 2 such
were discussed above -- voting and algorithmic. Another such way is a
Universal Dividend where the tax redistribution is simply shared evenly
across the population. Note that the source of such a Universal Dividend
in this case is not inflation -- but rather a holding tax. In this way
the total monetary mass (CIC token supply) can remain stable.

# Token Supply

Finally this gets us to token supply (where we might have started with
in traditional economics). A CICs token supply (if connected to other
CICs) is determined by the amount of some reserve it is bonded to in
common with other CICs. Therefore the issuance and supply of the network
token becomes paramount since this network token (NT) can effectively
mint additional CIC.

Could we create a network token that was simply distributed fairly to
people over time? Say the NT was distributed to everyone evenly over
time (per capita and or arithmetically) and any holder could also have
their 100 vote tokens for the tax redistribution fund -- fed by the
holding fee? Then each CIC (local community currency) would form around
a collection of the network tokens and be able to set its own rules
(taxation, tax redistribution and so on) otherwise (within some
regulatory standard).

In this case NTs could be issued and distributed in a similar way to the
(G1) [Duniter](https://duniter.org/en/) Universal Dividend or [Circles
UBI](https://joincircles.net/) -- while also being charged a holding tax
-- from which a percentage can be voted on distribution and a percentage
can be algorithmic distribution.

Note that NTs could in turn have their own reserve -- this would limit
how much could be minted (or put into pools with other types of tokens
to act as reserves for CICs). Also this NT could be listed on exchanges
that connect it to other tokens world wide.

![image](images/blog/currency-supply1.webp)

CIC network with Sarafu Network Token

# What does a decentralized economic currency system look like - when combining all these approaches:

> (see diagram above)

**1 + 2. Fair distribution and circulation of a network token** -- which
can act like a large scale medium of exchange. A version of the Duniter
(G1) Universal Dividend or Circles UBI Smart Contract suffices -- but
controlling for inflation via taxation. Note that a myriad of NTs can
exist and incorporate other rules and still have markets that connect
them together. Hence a whole range of NTs and localized systems that use
them could form with different local rules and rules that connect them.
Note that in the Sarafu Network Token Kenya case, the Sarafu supply is
currently voted on by committee - but this will be subject to change in 2021.

**3. Discouraging hoarding:** A holding tax is a simple form of this.
Some of this tax can be destroyed to stabilize the monetary mass
(supply)

**(1). Rewarding good behaviors via tax redistribution: An algorithmic
system that determines good behavior -- given this is voted on. This
could involve MANY metrics (see SDGs). A voting system that allows users
to specifically endorse candidates this could use quadratic and or
conviction voting system. Note that we have not yet implemented a voting
system yet and use clustering pTNACC as a basis for distributing Sarafu
on a weekly basis.**

**(1). Rewarding good behaviors via tax redistribution:** An algorithmic
system that determines good behavior -- given this is voted on. This
could involve MANY metrics (see SDGs). A voting system that allows users
to specifically endorse candidates this could use quadratic and or
conviction voting system. Note that we have not yet implemented a voting
system yet and use clustering pTNACC as a basis for distributing Sarafu
on a weekly basis.

**4a, 4b. Localized currency creation with connect-ability:** The
ability to create credit systems for businesses and community projects
and connect them to others: CICs being created using this NT as a
reserve -- gives people the ability to label tax and leverage the NT to
create a promissory note against future production (See[Bancor
Protocol](https://support.bancor.network/hc/en-us/sections/360002084771-Whitepaper-)
for smart contracts here).

![image](images/blog/currency-supply247.webp)

Note that many types of tokens can be added to a reserve pool for a CIC
(including the possibility of Carbon credits, Stable coins and so on).
Also note that a CIC need not have any reserve if there is no exchange
between other CICs. In which case a CIC is simply a promissory note
against future production. Localized CIC creation was available in in
2019 and has been put on hold for all of 2020 and will reopen with some
modifications (namely to the target reserve ratio being 100% hence no
leverage) in January 2021!

**5. Connected CIC and Price stabilization:** Finally we want labor and
commodity price stabilization for the NT as well as the CICs. Given the
ability to fix the supply of each -- prices of goods and services can
stabilize by virtue of arbitrage between markets of CICs themselves.
Note that less than 100% target reserve ratios will be added back over
time based on standard development and regulatory compliance for
custodial systems - non custodial systems can have a lot more freedom..

All these concept and conjectures could use a lot of testing, modeling
and token engineering. If interested please
[contact](https://www.grassrootseconomics.org/pages/contact-us.html) us wherever you
are!

- A very sadly unfinished cadCAD model was created by
  [BlockScience](https://gitlab.com/grassrootseconomics/cic-modeling) -
  but it is a good robust framework to get started.
- You can also watch me playing with simpler models at the [Vilage
  market
  simulator](https://www.youtube.com/playlist?list=PLPUExzwZAUpbEInJy_8Wj_c_mDsw7-qXe)
  series.
- Our [open source
  code](https://gitlab.com/grassrootseconomics/cic-docs) is all on
  GitLab is here.
- Field Datasets can be found [here](http://grassecon.org/research).
