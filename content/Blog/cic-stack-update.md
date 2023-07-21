Title: Major CIC software stack updates & Celo Launch
Author: Mohamed Sohail
Date: Jul 21, 2023
Slug: cic-stack-update
Summary: We've transitioned our CIC tech stack to the Celo Blockchain! This means better performance, lower cloud costs & reduced gas usage for our Communty Asset Voucher demurrage contract. 

Tags: software, programming, Celo

![image](images/blog/cic-stack-update1.webp)

Grassroots Economics has been pioneering Community Inclusion Currencies since 2009. Over the years, we’ve gone through several technical iterations including different blockchains and monetary protocols. 

We recently achieved a major milestone in migrating the entire CIC tech stack to use the Celo Blockchain. *Read about our software stack [here](https://cic-stack.grassecon.org/).*

## Background

* Between 2010 and 2021 March, GE had been running its custodial and ledger stack on a proprietary system. Several issues including but not limited to extreme cloud infrastructure requirements, and difficulty in maintaining the codebase.
* The issues faced with the system prompted a quick rewrite of the custodial stack and innovation of a new demurrage smart contract compatible with EVM blockchains.
* [The new stack](https://github.com/grassrootseconomics/cic-stack-v1), referred to as CIC Stack v1 (A custodial wallet and blockchain bidirectional interface engine for community inclusion currencies), alongside[ newly written smart contracts](https://gitlab.com/cicnet) were released into production on April 2021 on a humanitarian PoA blockchain known as[ Kitabu Chain](https://github.com/grassrootseconomics/kitabu-chain) primarily run by GE but included several external validators.

## Experiences running CIC Stack v1

* The newly written stack was a massive improvement. Cloud costs were reduced significantly.
* As authors of the new stack, we were able to easily include features to the codebase without any hindrance, technical or otherwise.

## Issues faced with CIC Stack v1 and decision to transition to Celo

* We noticed several issues with our worker queue processor (Celery) that led to downtimes among other issues.
* The demurrage smart contract was also heavy on gas and would at times exceed Kitabu’s block gas limit under certain conditions.
* Our USSD server written in Python would at times struggle under peak time load.
* Openethereum as a blockchain client was archived, that meant we couldn’t rely on out chain in the event a major security issue was discovered.

## Decision to transition to Celo

* EVM compatible (hence not having to rewire all our code)
* Extremely low gas fees compared to other similar L1 chains
* Good developer support
* Celo’s instant block finality makes it easy to build custodial wallets without having to worry about reorgs.
* More thoughts on our new home @ Celo can be found [here](https://www.grassrootseconomics.org/celo-ge).

## CIC Stack v2

* In 2023, we decided to rewrite our stack. We would use this opportunity to address all previous critical issues. At the same time we could rewrite it specific to Celo.
* The [demurrage contract](https://git.grassecon.net/cicnet/erc20-demurrage-token) was rewritten from the ground up using the [ABDK Math](https://github.com/abdk-consulting/abdk-libraries-solidity) library in order to address the high gas usage. We saw an instant improvement of gas usage. From over 16M gas units  to an upper bound of ~270k gas units. Additional missing features such as a burn and sweep function were also added to the smart contract among many others.
* We also took this opportunity to move the core [custodial API/queuer](https://github.com/grassrootseconomics/cic-custodial) from Celery to [Asynq](https://github.com/hibiken/asynq) in Golang. The original business logic from v1 was retained but highly distilled to only accommodate the most important custodial wallet functionality.
* The [tracker](https://github.com/grassrootseconomics/cic-chain-events) was also rewritten in Golang to be highly concurrent to keep up with the fast pace of Celo block production (~5 seconds) which could include 100’s of transactions. The tracker can sync up to 1k blocks/min under the default config allowing us to easily tolerate significant downtimes without having to worry about delayed transaction processing.
* We also [forked](https://github.com/grassrootseconomics/w3-celo-patch) a [relatively new high Ethereum library](https://github.com/lmittmann/w3) and added Celo support for it. We also wrote [another wrapper](https://github.com/grassrootseconomics/celoutils) to provide sane defaults and other useful utilities around Celo transactions.
* We have, in general, noticed that our Go rewrite has resulted in an increase in performance and a significant reduction in resource usage. All Go components use less than 50 MB of RAM under high load. One of our goals is to make the entire CIC stack as lean as possible to run on a single small consumer grade NUC.
* The overall codebase size has also significantly reduced making it easy for future maintenance 
* The USSD server was also written from the ground up using a new state machine library and HTTP server in Node.js/TS. We have since noticed a massive improvement in USSD response. We are also able to serve during peak times without experiencing downtimes.
* [Sarafu.Network](https://sarafu.network) is a budding dApp that allows you to create, view and interact with Community Asset Vouchers.
* A comprehensive list of all new and updated  software components can be found at [https://cic-stack.grassecon.org/components](https://cic-stack.grassecon.org/components)

As of today we have roughly 20,000 users, roughly 400 daily transactions, and 75 unique Community Asset Vouchers.

## The future

1. Celo Validation Node being setup (please stake on us) - all Celo that we earn goes to community members so they don’t need to pay for gas.
2. Sarafu.Network [[PRD](https://docs.google.com/document/d/1aqEW2dvbfgndHEgq_9RmyO5RFYnvpp73N7cu7Yt5sT0/edit?usp=sharing)] is a work in progress.

## Get involved

Collaborate on CopyLeft Software for Economic Commons!

1. Join our [Discord](https://discord.gg/DRATkf6M) and introduce yourself, skills and interests (email us at [info@grassecon.org](mailto:info@grassecon.org)) to get an invite.
2. [Join the community](https://www.grassrootseconomics.org/pages/get-involved) and Get Involved. We’re looking for design help and much more!
4. Dig into our [public data](https://reshare.ukdataservice.ac.uk/856593/). Our latest upload includes pseudonymized account information for around 20,000 users and records of all voucher transactions conducted for the last year.