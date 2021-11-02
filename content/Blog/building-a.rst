:title: Building a Public Registry for Community Currencies(DeFi)
:author: Will Ruddick
:date: Mar 21, 2020
:slug: building-a
 
:summary: Even when you have no money you are not poor. Building a Public Registry for Community Currencies.
 



.. image:: images/blog/building-a1.webp




Even when you have no money you have resources. I’ve never met a poor woman in rural Kenya. They may have little resources compared to others but they aren’t poor. 




Even when you have no money you have resources. I’ve never met a poor woman in rural Kenya. They may have little resources compared to others but they aren’t poor. 




Even when you have no money you have resources. I’ve never met a poor woman in rural Kenya. They may have little resources compared to others but they aren’t poor. 





When we do run out of money – and some people surely will and have already - how can we fairly offer and share our resources and time together?



Community Currencies (or Community Inclusion Currencies CICs) are a way for us to value our resources and time. 



 



The ultimate way to issue them is as a voucher for your own goods and services. The way a supermarket might issue a voucher, you too can do this and those vouchers can circulate as long as people trust that you will redeem them at some point and they will want your goods or services in the future. 



 



Sates spend currency into existence and accept it back as taxation. Banks and community groups (like the one shown above) in Kenya issue currency and accept it back as loan repayment. Marketing companies issue currency and accept it back as advertising fees.



 



A million people printing paper currencies is not going to be feasible. And a million different digital currencies aren't going to be practical either without a way to establish relative pricing and conversion.



 



The uniqueness of the blockchain in this situation is that it allows people and organizations to establish tokens that represent their goods and serves AND connect those all together into a decentralized economy.



 



If I create 1 Billion Tokens and say they are worth 1 Billion Euros and I will back them with carpentry services – I might have trouble backing up that claim by just working myself. People who don’t know me might not be able to trust these vouchers in exchange for the goods or services they sell. 



 



But if those tokens are also backed by some real world collateral, then someone knows exactly what they can get out of those vouchers in case no one is accepting them.



 



That real world collateral needs to be a guaranteed backer of last resort – like the government, or a major supermarket or a bakery. It could also be a bank account with National Currency as the backing. National Currencies are not perfect in how they are issued or valued, BUT they are a point of common trust we can use to establish our own credit systems. 



 



Across Europe people have created digital community currency using `Community Forge <http://helpdesk.communityforge.net/en/request>`_ using a `drupal module <http://www.drupal.org/project/cforge>`_ module




In Italy people use `Sardex.net <http://sardex.net>`_.




In Japan right now elderly Japanese climb local mountains and thin out the dense forest. They use the Yen (National Currency) they get from timber sales and put it in a trust (at a local bank) then they create wooden chips called Enepo. These Enepo (energy points) are accepted by local businesses as a way to support the elderly. They flow around Takayama Japan and create their own small economy. If people want or need Yen they can go to the community bank and cash out their Enepo – which will go back into circulation when more wood is sold.



The core example you will find from Community Currencies working – is some form of dedicated backing and or collateral (be it time, products or services or National Currency). For more on paper currencies see our `MOOC <https://www.grassrootseconomics.org/mooc>`_.





With the blockchain we can have a contract that monitors this collateral or reserve transaction by transaction. The reserve need not be a stable coin based on US dollars – but that is the best reserve we currently have that we can all agree on. 



 

**Now I’m going to get a little bit technical:**


 



What we do is take xDAI a USD backed stable coin and leverage it to make a local credit (`read more here <http://www.grassrootseconomics.org/single-post/Enabling-Leverage>`_). The National Currency forms our collateral but the primary backing is the communities that use and accept the tokens we call Community Inclusion Currencies (CICs). The main example of this right now is called Sarafu in Kenya. We work with over 11k businesses as well as the Red Cross to support marginalized communities to trade with each other in crisis even when they don’t have Kenyan shillings.




We use collateral to back the currencies from donors so that people STILL have an option to cash out to National Currency. Doing so lowers the exchange value of the CICs but also gives donors and people a cheaper rate to buy more CICs and fill back up the collateral pool.




In order to make a global CIC network of connected currencies there needs to be an index similar to DNS that allows them to find a path of common reserve between each other. This registry should allow people to write to it address of their tokens and what their reserves are without a centralized owner – i.e. a permissionless set of contracts.



Luckily we have the powerful open source Bancor contracts. Sadly they are very much permissioned, giving full control over minting and network access to whomever deploys the contracts. But this can be changed.





There are three key elements of the Bancor suite. 



    • A Token – which we call a CIC Community Inclusion currency. Bancor calls them liquid tokens. They have the ability to give control over to another contract to mint and destroy them. 

    • A converter – which holds some reserve (in our case xDAI) and also holds ownership over the liquid Token or CIC to be able to mint more and destroy them. The converter also holds a set of equations

    • An Index – this records all the tokens on the network and how they can connect with eachother.

It costs almost nothing to deploy a contract and create a token. On xDAI blockchain the cost is about 0.00001 cents. When you deploy the contract you mint an amount of tokens based on the reserve and the amount of leverage you are looking for. Those tokens belong to the issuer or group of issuers, but the converter once issued should be permissionless – Just because you deploy a contract doesn’t mean you should be able to extract a fee from people forever or manipulate the currency which is what is possible now with the Bancor contracts. Deploying a currency is actually as easy as a few lines of code but putting up the backing is what really counts - don't confuse the two.




The index also should be permision-less so that people can find your currency without having to buy into or pay a toll bridge and be at the risk of the index contract holder shutting down.
Creating a fully decentralized version of the Bancor suite (a Public Registry for Community Inclusion Currencies) would enable anyone in the world (including the Red Cross) to stake some reserve and create a credit system that can be connected to every other credit system on the planet. Localized reserves can connect regions of currencies while global reserve can connect larger and larger groups of currencies. This mountain range of decentralized currency networks represents and makes fluid and an echo system that can help humanity thrive even when some nations or their currencies fail.




We can build the infrastructure to enable a decentralized financial system without toll bridges or giving undue power over such core aspects of our lives.



 



We're working with the tools we have but can use a lot of support. The Bancor Contracts work well for a single network but need modification to make them more open for everyone without centralized risk (Permission-less converter, Open Indexer/ path registry, and modifications to bonding curves). If you are a programmer you can join `https://t.me/CICBlockchain <https://t.me/CICBlockchain>`_ to help us build up these system.


---------------



If you know someone in Kenya that needs help - please suggest they sign up for a Community Inclusion Currency account on the Sarafu network. Anyone can sign up. To get an account dial 0757628885 or send a sms with your name and what you can sell and what is your nearest town. Example: Eva Songa 07278xxxxx Chapati, Kakamega. While supplies last, new users get 400 Sarafu and Chamas (saving groups) can register to convert a limited amount of Sarafu to Mpesa. If you are in, or know, a chama please let us know.


`#decentralized <https://www.grassrootseconomics.org/blog/hashtags/decentralized>`_		`#defi <https://www.grassrootseconomics.org/blog/hashtags/defi>`_	`#currency <https://www.grassrootseconomics.org/blog/hashtags/currency>`_	`#economics <https://www.grassrootseconomics.org/blog/hashtags/economics>`_		`#covid19 <https://www.grassrootseconomics.org/blog/hashtags/covid19>`_		`#corona <https://www.grassrootseconomics.org/blog/hashtags/corona>`_	`#virus <https://www.grassrootseconomics.org/blog/hashtags/virus>`_



