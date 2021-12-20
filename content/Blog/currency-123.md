Title: Currency 123 (Back, Guarantee, Open)
Author: Will Ruddick
Date: May 2, 2020
Slug: currency-123
Modified: May 5, 2020
Summary: A Community Inclusion Currency (CIC) is way to transparently establish a credit system to enable local markets to thrive and link...

A Community Inclusion Currency (CIC) is way to transparently establish a
credit system to enable local markets to thrive and link together,
forming resilient and inclusive economies. While these steps are a
simplification of a process that involves a lot of planning, modeling
and governance - it is important to share our understandings and we
invite collaboration as we use and develop open source technologies,
models, and practical methods.

**Step 1 Primary Backing.**

Involves establishing the amount of currency (aka tokens or promissory
notes) being issued against some backing. (This is the backing of your
currency's primary market.) A CIC issuer (a group or individual) needs
to establish that these CICs, as promissory notes, have legitimate
backing in goods and services over time.

![image](images/blog/currency-1231.webp)

In example, an individual business could back a CIC with staged
redemption of a year's worth of goods or services (goats and hair
cuts). Practically bringing together a group of individuals or
businesses and determining their commitment level to backing over time
is an art. Groups like Sardex.net have developed techniques for how to
establish such commitment and buy in. With humanitarian organizations
like Red Cross these commitments could be in donations over time (i.e.
the CIC could be redeemed for donations in National Currency or goods)
as we are currently doing with the Sarafu CIC. Note a key function of
the primary backing is to keep the value of the CIC stable locally.

If a CIC has 100,000 EUR of backing committed from a group of, say 10,
business over a year and each business is allocated 10,000 CIC tokens,
those businesses could begin to trade with each other while seeking to
keep their balance at 10,000 CICs (called credit clearing). Determining
how many tokens to create involves an estimation of how much any one
business can both spend and redeem them over time and the size of the
network begin created. If you are bakery and have committed 10k EUR of
bread over a year to be redeemed in CICs (and are allocated 10k CICs) -
will you be able to spend those CICs again as fast as you redeem them?
And if not, how many can you afford to accumulate? If all 100,000 CIC
tokens come back to you what would happen to your business? Are you
guaranteed to be able to spend them? What if an issuer goes insolvent
and you can no longer redeem the CIC for the primary backing? In step 2
we seek to de-risk the CIC by creating a contractual guarantee - while
also creating a way for future CICs to be created and even traded with
other communities.

**Step 2 Guarantee a Reserve**

While Primary Backing alone has created stable currencies with examples
around the world like Canadian Tire Dollars, issuer(s) can avoid
pitfalls that have caused thousands of such systems to stagnate or
collapse by adding a reserve (aka collateral). A reserve gives CIC
holders a guarantee of redemption while also creating a mechanism to
create more CICs and connect one CIC to another with automated pricing.

![image](images/blog/currency-12362.webp)

Reserves help to:

- Increase trust and acceptance of a larger community.
- Guarantee backing of the CIC in case of issuer insolvency or delays
  in redemption of the primary backing.
- Establish an automatic exchange value of one CIC to another without
  having to audit the primary backing.
- Establish a transparent and fair way to create and destroy CIC
  tokens.

A reserve can be created transparently on a mathematically binding
blockchain based contract with strict permissions and equations that
govern the exchange of CICs for the reserve (aka Bonding Curve).

A CIC issuer(s) must decide how to setup this contract - below are the
current options for setting up a CIC reserve contract (also called a
Converter contract in the Bancor open source contract suite):

1.  In what currency should the reserve (collateral) be? We are using
    DAI (a stable coin to the US dollar) but it could be any token that
    is trusted.
2.  How much reserve to put in? We set a 'full' reserve (collateral)
    level at 25% of the supply of CIC (Sarafu in Kenya). Also called a
    Target Reserve Ratio (TRR).
3.  Who can use the contract? White-listing. Can anyone access it or
    only known people? For legal reasons organizations issuing CICs must
    often know who is using the contracts.
4.  What is the starting and maximum fee for using the contract if any?
    A conversion fee is a good security mechanism and adds some
    resistances to moving in and out of the contract.This fee goes into
    the reserve pool.
5.  Who controls the variables of the contract once it has been
    deployed? These include changing the conversion fee (if any) up to a
    fixed maximum, changing the white-list and connecting to other CICs
    (Registry of CICs).

![image](images/blog/currency-123187.webp)

Once the contract has been designed and the collateral has been obtained

- (eg. the issuers may be turning US dollars into DAI or creating their
  own reserve token) and added to the contract - the contract will also
  take control of the CIC token itself and will be solely able to issue or
  redeem CICs based on the variables given above and the equations below
  (aka bonding curve equations). We start out CICs in Kenya with an
  exchange price of 1. (See the equation above that determines the
  exchange price.) The reserve is considered full at a fixed community
  chosen Target Reserve Ratio (TRR) to the CIC in supply. When the reserve
  is full (say at $25,000 Dollars in Reserve and there are a total of
  100,000 CIC tokens (backed by goods and services of the issuers) and the
  TRR is also 25%) then the exchange price to reserve is 1. (1:1) We will
  discuss exchanging between CICs and reserve in the next section.

**Step 3 Open Reserve to Market:**

Again, getting past steps one and two are not trivial and require a lot
of considerations and good governance! But once in alignment the
contract holding the CICs collateral created in step two can be open to
the greater world (whitelisted or non whitelisted).

![image](images/blog/currency-123214.webp)

**Enable Redemption:** With a reserve in place, anyone holding CICs can
redeem them for committed goods and services (primary backing) or money
in the reserve. The less reserve there is the less National Currency is
redeemed for the same amount of CICs based on the equations below (aka
the bonding curve). If someone cashes out 1,000 CIC tokens from a full
reserve in our example they will pull out roughly $985.10 Dollars from
the reserve. This limits how fast people will remove their CICs.

![image](images/blog/currency-123229.webp)

![image](images/blog/currency-123248.webp)

**Enable Creation:** In addition anyone can also add money to the
reserve and create additional CICs. The more reserve there is the less
amount of CICs are created for the same amount of National Currency. As
the reserve was already reduced in the last example; now, if someone
deposits $985.10 Dollars into the reserve they will create 1,000 new
CIC Tokens - this encourages people to fill back in the reserve (see the
equation below).

![image](images/blog/currency-123263.webp)

The group that should be most interested in creating more CICs when the
exchange price to reserve is low - are the initial issuers themselves.
They among all others should be able spend the CIC at full value among
themselves and their community - because that was their initial purpose
and they are still backing the CIC with their own goods or services. eg.
If someone knows they can buy a goat (primary backing) using CICs 1:1
with national currency and they are now able to create some cheaply by
adding reserve, they have an advantage to fill back up the reserve and
buy some goats. This incentive to refill the reserve can be considered a
beneficial arbitrage and creates additional price stability beyond the
primary backing. Humanitarian organizations will add reserve and create
CICs as the reserve empties in order to leverage their donations into
positive social impact. The reserve can be considered a revolving CIC
stability fund.

If someone knows they can buy a goat (primary backing) using CICs 1:1
with national currency and they are now able to create some cheaply by
adding reserve, they have an advantage to fill back up the reserve and
buy some goats. This incentive to refill the reserve can be considered a
beneficial arbitrage and creates additional price stability beyond the
primary backing.

While CIC acts as a promissory note against the primary backing, it is
also practical to consider a CIC as a share of both the primary backing
and the reserve. In a sense it is also a share of, and investment in,
the economy using it. In addition, that economy can be connected to
other economies using other CICs. Because a CIC can convert to its
reserves and that withdrawn reserve can be added to another CIC - the
exchange value to reserve serves as an automated price maker between the
CICs and also measures the relative trade imbalance between the two
economies - creating an incentive to clear trade deficit.

The economic data available from CIC contracts and trading on a public
blockchain gives a lot of insight to a CIC backing, volatility and
uptake. Check out <https://dashboard.sarafu.network> for an overview of
a CIC being used in Kenya right now by the Red Cross to support
thousands in vulnerable communities and build resilient economies. See
our white paper as well as the open
source Bancor smart [contract
suite](https://docs.bancor.network/network-architecture/ethereum) we are
using.
[Here](https://github.com/GrassrootsEconomics/CIC-Docs/blob/master/CIC-math-examples.xlsx)
you can see a very basic initialization and usage of the bonding curve
equations.
