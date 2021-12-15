---
layout: "layouts/default"
author: "jim"
title: "Jim Fisher's CV"
---

* Location: London, UK
* Email: [jameshfisher@gmail.com](mailto:jameshfisher@gmail.com)
* Website: [jameshfisher.com](https://jameshfisher.com)

## Education

* **2010–12:**
  M.Sc. with **distinction**
  in [Computing Science](https://www.imperial.ac.uk/study/pg/computing/computing/)
  at [**Imperial College**](https://www.imperial.ac.uk/).
  In my individual project,
  ['Verifying a balanced-tree index implementation in VeriFast'](https://jameshfisher.github.io/presentation/pres.html),
  I implemented [left-leaning red-black trees](https://en.wikipedia.org/wiki/Left-leaning_red%E2%80%93black_tree)
  in C,
  then proved key properties of it using [VeriFast](https://people.cs.kuleuven.be/~bart.jacobs/verifast/)
  and [separation logic](https://en.wikipedia.org/wiki/Separation_logic).

* **2006–9:**
  B.A. with first-class honors
  in [History](https://www.york.ac.uk/history/undergraduate/)
  at the [**University of York**](https://www.york.ac.uk/).
  My dissertation was about robots.
* **2004–6:**
  Six A-levels at [**Colchester Royal Grammar School**](https://www.crgs.co.uk/):
  History (A),
  Computing (A),
  General Studies (A),
  Physics (B),
  Mathematics (B),
  Art and Design (B)
  (actually this last one was at
  [Grey Friars Community College](https://web.archive.org/web/20070301140932/http://colchesteracc.essexcc.gov.uk/)).
* **2002–4:** Eleven GCSEs at Colchester Royal Grammar School.

Other courses:

* **Apr 2021:**
  ['TensorFlow 2 for Deep Learning' specialization](https://www.coursera.org/specializations/tensorflow2-deeplearning)
  at [Coursera](https://www.coursera.org/).
  Consists of
  ['Getting started with TensorFlow 2'](https://www.coursera.org/learn/getting-started-with-tensor-flow2)
  [(certificate)](/assets/certificates/2021_coursera_getting_started_with_tensorflow_2.pdf)
  and
  ['Customising your models with TensorFlow 2'](https://www.coursera.org/learn/customising-models-tensorflow2)
  [(certificate)](/assets/certificates/2021_coursera_customizing_your_models_with_tensorflow_2.pdf).
* **Apr 2021:**
  ['Probability Theory, Statistics and Exploratory Data Analysis'](https://www.coursera.org/learn/probability-theory-statistics)
  at [Coursera](https://www.coursera.org/)
  [(certificate)](/assets/certificates/2021_coursera_probability_theory.pdf).
* **Mar.–Apr. 2021:**
  ['Mathematics for Machine Learning'](https://www.coursera.org/specializations/mathematics-machine-learning) specialization
  at [Coursera](https://www.coursera.org/).
  Consists of
  [Linear Algebra](https://www.coursera.org/learn/linear-algebra-machine-learning)
  [(certificate)](/assets/certificates/2021_coursera_mathematics_for_machine_learning_linear_algebra.pdf),
  [Multivariate Calculus](https://www.coursera.org/learn/multivariate-calculus-machine-learning)
  [(certificate)](/assets/certificates/2021_coursera_mathematics_for_machine_learning_multivariate_calculus.pdf), and
  [Principal Components Analysis](https://www.coursera.org/learn/pca-machine-learning)
  [(certificate)](/assets/certificates/2021_coursera_mathematics_for_machine_learning_pca.pdf).
* **Jan.–Apr. 2013:**
  ['Programming Languages'](https://www.coursera.org/learn/programming-languages),
  at [Coursera](https://www.coursera.org/)
  [(certificate)](/assets/certificates/2013_coursera_proglang.pdf).
* **Sep.–Dec. 2012:**
  ['Functional Programming Principles in Scala'](https://www.coursera.org/learn/scala-functional-programming)
  at [Coursera](https://www.coursera.org/)
  [(certificate)](/assets/certificates/2012_coursera_scala.pdf).

## Experience

* 2021 – current:
  **Stealth start-up**;
  details on request.
* Apr 2020 – Feb 2021:
  CEO at [**Vidrio**](https://vidr.io/),
  my own app and company.
  Vidrio lets you make presentations with a screen recording and webcam.
  Grew the company from $0 revenue to a maximum of $1600/month.
  Built macOS and Windows versions.
  Key tech:
  [Swift](https://www.swift.org/),
  [Electron](https://www.electronjs.org/),
  [WebGL](https://en.wikipedia.org/wiki/WebGL).
* 2018 – Apr 2020:
  **Technical Product Manager** for [**Pusher Channels**](https://pusher.com/channels)
  at [**Pusher**](https://pusher.com/).
  Grew the product from ~$8M ARR to ~$12M ARR,
  with very limited resources:
  an exercise in growing a product without adding new features.
  I was the key link between Engineering, Sales and Marketing.
* Mar 2016 – 2018:
  Software Engineer at [**Pusher**](https://pusher.com/).
  Companies use Pusher to add realtime features to their apps
  (e.g. New York Times live election coverage).

  * Mar 2016 - 2018:
    Engineer on the [**Pusher Channels**](https://pusher.com/channels) team.
    Companies use Pusher Channels to send realtime messages between servers and clients
    (e.g. chat messages or stock ticker updates).
    Nearly all work was on scalability and reliability:
    [the system typically delivered 200,000 messages every second](https://making.pusher.com/how-pusher-channels-has-delivered-10000000000000-messages/).
    I was on the on-call rota.
    Key server-side tech:
    [Ruby on Rails](https://rubyonrails.org/),
    [Redis](https://redis.io/),
    [MySQL](https://en.wikipedia.org/wiki/MySQL),
    [Puppet](https://puppet.com/),
    [Ansible](https://www.ansible.com/),
    [AWS](https://aws.amazon.com/),
    [Kafka](https://kafka.apache.org/).
    Also maintained several client libraries.
  * Mar – Jun 2016:
    Joined a project to add message history to [Pusher Channels](https://pusher.com/channels).
    Internally, Channels used [Redis Pub/Sub](https://redis.io/topics/pubsub) as a message bus,
    but this has no reliable message history.
    Pusher had built a replacement message bus
    that used a custom [Raft](https://raft.github.io/) implementation for consistency and availability.
    This was written in [Haskell](https://www.haskell.org/).
    I researched high latencies in the system,
    [finding that the root cause was garbage collection in GHC](https://making.pusher.com/latency-working-set-ghc-gc-pick-two/).
    This finding went surprisingly viral and ultimately killed the project.
    Key tech:
    [Haskell (GHC)](https://www.haskell.org/),
    [QuickCheck](https://en.wikipedia.org/wiki/QuickCheck).
  * 2016 - 2017:
    Building [Pusher Beams](https://pusher.com/beams),
    Pusher's push notification service.
    Key tech:
    [Go](https://go.dev/),
    [Postgres](https://www.postgresql.org/).
    Also maintained several client libraries.
  * Much public representation of Pusher:
    gave [several talks at conferences](/speaking);
    maintained [Pusher's engineering blog](https://making.pusher.com/)
    and wrote several posts;
    organized [Pusher's London meetup](https://www.meetup.com/the-realtime-guild/).

* May 2014 – Feb 2016:
  "Software Pilot" (read: consultant/engineer)
  at [**Trifork**](http://www.trifork.com/),
  an international software consultancy.
  I worked with many clients, including:

  * 2014:
    Rebuilt the account system at a large global bookmaker.
    The primary challenge was scalability,
    since activity is extremely spiky (think: betting during the Grand National).
    Key tech:
    [Java Spring](https://en.wikipedia.org/wiki/Spring_Framework),
    [Symfony](https://symfony.com/),
    [Riak](https://riak.com/riak/),
    [AngularJS](https://angularjs.org/),
    [Puppet](https://puppet.com/).
    The system integrated with [CAS](https://www.apereo.org/projects/cas) for authentication.
  * 2015-16:
    Worked with [Container Solutions](https://www.container-solutions.com/)
    and [Cisco Cloud Services](https://www.cisco.com/c/en_uk/solutions/cloud/index.html)
    on several open-source cloud systems:
    [OpenStack](https://www.openstack.org/) (cloud resource management),
    [Mesos](https://mesos.apache.org/) (a Kubernetes also-ran),
    [Mantl](https://github.com/mantl/mantl) and
    [DC/OS](https://dcos.io/) (layers on top of Mesos).
    Worked on official Mesos integrations, including
    [ElasticSearch for Mesos](https://github.com/mesos/elasticsearch) and
    [Logstash for Mesos](https://github.com/mesos/logstash).

* Jan – May 2014:
  Software Engineer at [**Arqiva WiFi**](https://web.archive.org/web/20140326072920/http://arqivawifi.com/internet-access-wireless-services-providers/).
  Arqiva sold white-label public WiFi (e.g. the free public WiFi at Heathrow airport).
  Our team rebuilt the 'captive portal'
  (that annoying login page you see when you connect to free public WiFi).
  I created the feature that gave you free public WiFi access
  if you were willing to download an app or watch a video.
  I wrote the functional and performance tests for the captive portal using [JMeter](https://jmeter.apache.org/).
  (On the side,
  I also built Arqiva's revenue tracker,
  which gathered messy revenue data from heterogeneous, ancient sources.)
  Key tech:
  [PHP](https://www.php.net/) and
  [MySQL](https://en.wikipedia.org/wiki/MySQL).

* May 2012 – Sep 2013:
  Software Developer at [**YUDU Media**](https://www.yudu.com/).
  Traditional publishers use YUDU to create online facsimiles of their magazines and books
  (think: PDF reader on steroids with cool "page turn" animations).
  I was the lead in a team of four developers
  working alongside a team at [Softwire](https://www.softwire.com/),
  a software consultancy.
  I worked in product management, design, development, and maintenance.
  I maintained the two front-ends,
  a [Flash](https://en.wikipedia.org/wiki/Adobe_Flash) version for the web,
  and an [Adobe AIR](https://en.wikipedia.org/wiki/Adobe_AIR) version for desktop, Android, OS X, and iOS.
  I also led a major redesign of [the management interface](https://publisher.yudu.com/).
  Key tech:
  [Java Spring](https://en.wikipedia.org/wiki/Spring_Framework);
  [Ramaze](https://github.com/Ramaze/ramaze) (a dead fork of [Ruby on Rails](https://en.wikipedia.org/wiki/Ruby_on_Rails));
  [Oracle](https://en.wikipedia.org/wiki/Oracle_Database),
  [MySQL](https://en.wikipedia.org/wiki/MySQL),
  [jQuery](https://jquery.com/),
  [Bootstrap](https://getbootstrap.com/).

* 2006–2014:
  Director and Secretary of [**Lexden Montessori**](https://web.archive.org/web/20210306074024/https://lexdenmontessori.com/),
  a nursery in Colchester.
  I worked in business planning,
  market research and advertising,
  administration and secretarial duties,
  and web design and maintenance for [lexdenmontessori.com](https://web.archive.org/web/20210306074024/https://lexdenmontessori.com/),
  including an online fee calculator.
* 2012 – 2013:
  Branding, marketing consultancy, and web design
  for [**The Gilgil Trust**](https://web.archive.org/web/20130602133801/http://www.gilgiltrust.org.uk/whatwedo.php),
  an organization providing young people around the town of Gilgil in Kenya
  with shelter, health-care, and help in their education and careers.
* 2010:
  Branding for [**Pembroke House**](https://pembrokehouse.sc.ke/),
  a private Kenyan prep school.
  As of 2021, they're still using the logo and brand that I designed.
  In the words of their Commercial Director,
  'James has worked with me on new brand designs
  for Harambee Schools Kenya (see below), a charity,
  and Pembroke House school, a prep school.
  In both cases his work was of the highest quality,
  and reflected a passion for design,
  but also for getting under the skin of the organisation he is designing for.
  I wouldn't hesitate to use James again for any design projects that I might have.'
* 2010:
  Branding and web design for [**Harambee Schools Kenya**](https://web.archive.org/web/20120723045033/http://www.hsk.org.uk/),
  a charity building schools around Gilgil in rural Kenya.
  [GWS Media gave the website an award](https://web.archive.org/web/20120628010313/http://onlinemarketing.gwsmedia.com/2010/11/2nd-objective-of-charity-website-design.html),
  commending its 'plain, clear English; striking design, and beautiful images.'
  The new branding and website brought in at least **£53,000 of funding**,
  including from UBM (the global media and comms giant)
  and [HSBC](https://www.hsbc.co.uk/), who made HSK their official corporate charity after finding the website.
* 2009:
  Software Developer at [Caring Homes](https://www.caringhomes.org/),
  a large UK group of care homes.
  Developed an internal system
  for managing care homes and CSCI reports
  Key tech:
  [Django](https://www.djangoproject.com/)
  and [Postgres](https://www.postgresql.org/).