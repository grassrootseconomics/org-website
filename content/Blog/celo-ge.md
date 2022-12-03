Title: Why we’ve chosen Celo as a Humanitarian Blockchain
Author: Will Ruddick
Date: Dec 1 2022
Modified: Dec 1 2022
Slug: celo-ge
Summary:  There is no other EVM chain (on which our software stack is built) that has agreed to let us be part of the infrastructure or has the last mile solutions, community and liquidity Celo offers.

Tags: Celo, blockchain, EVM, Ethereum, humanitarian, validation node, gas fees, liquidity, community, migration

![image](images/blog/celo-ge1.webp)


As a non-profit foundation with the vision of supporting communities in developing prospering economies we need to ensure that any technology we introduce is something that can be sustained without rent-seeking. We’ve had a long journey since we first started helping community groups print paper vouchers which could be used as Community Inclusion Currencies (CICs). Here is a brief timeline:



* 2010 - First started printing paper vouchers with security features. 
* 2015 - We then started going digital in 2015 using USSD/SMS and a SQL database in order to save costs on printing and handling large amounts of paper bills and also to build more accountability for the voucher systems. 
* 2018 - Rather than depend on our own database - we moved in 2018 to the POA blockchain. We wanted to have a network of servers that would provide immutable accounting and resilience. 
* 2019 - We moved to xDAI (now Gnosis chain)  because the gas prices on POA were too volatile.
* 2021 - We moved to Kitabu  (Our own PoA EVM sidechain built on OpenEthereum) because xDAI moved to a POS system and we could not afford to run a validation node in order to guarantee fees.
* 2022 - We are currently working on a move to Celo. **Why?**

**Why Celo?**



1. **Physical presence in Kenya.** Celo has an existing and thriving ecosystem in Kenya. We could potentially get marketing support and Open Source contributions from the community. Humanitarian orgs like WFP have already partnered with Celo in Kenya.
2. **Validator node.** Running a validation node allows GE to be part of the Celo infrastructure and to cover gas costs for the foreseeable future while benefiting from the security and decentralization of a large public chain i.e. Celo as compared to our existing self hosted private chain. We’ve been asking chains to help us with running and/or staking on a validation node, for years, so that we can guarantee gas to users. This is the first time a public chain has accepted our request to become part of their infrastructure and offer free services to marginalized communities as a humanitarian solution and means that we can be part of the Celo community of service providers.
3. **On chain liquidity** that aligns with our future roadmap of liquidity pools. Meaning we can research how to help voucher issuing communities connect safely to larger markets, and other products.
4. **EVM ready.** Less time relearning a new Blockchain tech as we can apply our existing experience in quickly porting our stack to Celo. Our open source code base is based on Ethereum Virtual Machine (EVM) which can easily be used on Celo.
5. **Eco-system dApp and partners.** Groups like [Kolektivo](https://kolektivo.network/), [Ethics Hub](https://www.ethichub.com/en/) and many more have built products on Celo that we can use now. 
6. **OpenEthereum is no longer supported** and we are not ready to run our tech stack on Cosmos or other non-EVM protocols immediately.
7. **Cosmos Compatibility.** Latest fork of Celo is compatible with the Cosmos cross blockchain layer, which allows us to continue to leverage and support the relationships we have there
8. **Tech optimized** for low bandwidth and mobile accessibility (ref: [Plumo](https://docs.celo.org/protocol/plumo))
9. **Humanitarian** Celo has done a lot of work with Mercy Corps and offramp partners like [Kotani Pay](https://kotanipay.com/) that allow for mobile conversion to m-pesa. Also Celo projects ReSource and Nuzo actively building in Kenya. (ref: [Mercy-Corps](https://blog.celo.org/celo-mercy-corps-ventures-pilot-highlights-how-defi-on-celo-empowers-farmers-in-kenya-e5a30c7c862)). Celo also has support from partners like IDEO who are also focused on real world adoption and other orgs like Grameen, CARE, and Hope for Haiti who are actively involved.


**Celo Criticisms:**

We’ve already gotten some criticism regarding this move and it is good to air them as well as our own risk assessment:



1. **VC Chain.** Celo started using Venture Capital money and a large percentage of Celo is owned by few people who have a large say and stake in the network. While this might be true on most chains - knowing the folks at Celo - they have been trustworthy and are dedicating their returns to supporting marginalized communities as shown by their acceptance to support GE in running a validation node.
2. **Hacks.** Liquidity can potentially be drained from some Celo projects (e.g. Moola market got rekt 10M, they eventually recovered 9M). So if we had liquidity pools at Moola we could have been affected. Right now, with no liquidity pools our hacks risks aren't that high. The CICs (vouchers) we support are trust based instruments (credit obligations) and not intrinsically connected to any on-chain liquidity. Any connection between volatile instruments and CICs will need to be carefully researched. Note: Over 93% of funds were recovered in the Moola exploit, and only $500K was taken as a "bounty"; risk parameters have since been adjusted, with all depositors compensated.
3. **Stalls. **- the blockchain stalling due to technical issues. Not a big issue, we experience some downtime. Big issue for some people who have strong opinions around decentralization. The network has stalled one time since mainnet launch in 2020, which was due to an issue with block size ([cf.](https://cointelegraph.com/news/celo-network-back-online-after-almost-24-hour-outage))––it took almost 24 hrs specifically because the network is decentralized and required validator groups from around the world to come together and coordinate the network's reset. 
4. **Boot.** Someone could also start a proposal to boot us off as a validator. But this is very very far-fetched and I haven't seen anything like it, but it is a possibility.
5. **Sell-out.** We are ‘selling out’ by joining Celo and not pushing toward more decentralized approaches. Being supported by Celo Foundation in order to have enough stake to run a validation node is a dream come true - it means that we will not be dependent on Celo Foundation in the future for gas fees. This is like a supporter giving us enough infrastructure assistance and capacity building so that we don’t have to ask for further support! There is no other EVM chain (on which our software stack is built) that has agreed to let us be part of the infrastructure or has the last mile solutions, community and liquidity Celo offers. CICs are open source software and concepts and could be implemented by anyone on any chain and we are eagerly awaiting software teams to iterate on them and build products people need. With the technical releases, it is possible for people to port the system to use on other chains as needed and desired, and it’s not meant to be a closed walled ecosystem on one chain.

What this means practically for our code stack over the next few months (technical warning!):



1. **Celo specific SDKs:** Celo support for our internal Go SDK; A Celo compatible signer, Gas oracle (sync from GasPriceMin contract)
2. **Python Support:** Celo support for our Python based event filter libraries and off-chain indexers (chaintool-py); Support additional headers from Celo blocks (if needed at all)
3. **CIC Custodial:** Update our custodial system with Celo specific SDK’s
4. **Multisig smart contract** to support m of n transferFrom for lost custodial funds from one account to another
5. **Update our event tracker** with Celo specific libraries
6. **Update our off-chain indexer** with Celo specific libraries (alternatively explore TheGraph indexer as an alternative)
7. **ERC20 Demurrage:** Refactor/re-write to support burning (eventual support for bridging and other use cases)
8. **Explore other gas usage improvements **(Current approx gas usage is anywhere between 300k - 2M gas units for a transfer call)
9. **Validation Node Infrastructure:** Explore self-hosted archive node infrastructure vs 3rd party node services

What this means practically for Sarafu Network users in Kenya, Cameroon And South Africa:



1. **Smooth migration. **No interruption to service
2. **Migrating Voucher contracts** to Celo and repopulating balances of users on Celo.
3. **UX/UI.** Developing better user interfaces using market places, open source wallets and bots. Users will be able to move off USSD/SMS onto other EVM wallets.
4. **Connecting dApps.** E.x. Some Voucher issuers and buyers want there to be insurance in case of defaults. 

Please contact us [info@grassecon.org](mailto:info@grassecon.org) if you have any questions or want to support us.
