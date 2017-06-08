<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=1">

    <!-- JavaScript libraries -->
    <!-- build:js var/public/assets/scripts/libraries.min.js -->
    <!-- jQuery JavaScript script -->
    <script src="var/public/bower/jquery/dist/jquery.min.js"></script>

    <!-- Bootstrap library JavaScript script -->
    <script src="var/public/bower/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- particles.js library JavaScript script -->
    <script src="var/public/bower/particles.js/particles.js"></script>
    <!-- /build -->

    <!-- JavaScript bootstrap file (main.js)   -->
    <!-- build:js var/public/assets/scripts/bootstrap.min.js -->
    <!-- Bootstrap JavaScript script -->
    <script src="var/public/assets/scripts/bootstrap.js"></script>
    <!-- /build -->

    <!-- Library stylesheets  -->
    <!-- build:css var/public/assets/stylesheets/libraries.min.css -->
    <!-- Font awesome-->
    <link rel="stylesheet" href="var/public/bower/components-font-awesome/css/font-awesome.min.css">

    <link rel="stylesheet" href="var/public/bower/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="var/public/bower/bootstrap/dist/css/bootstrap-theme.min.css">
    <!-- /build -->

    <!-- Bootstrap stylesheets  -->
    <!-- build:css var/public/assets/stylesheets/bootstrap.min.css -->
    <!-- The bootstrap CSS file    -->
    <link rel="stylesheet" href="var/public/assets/stylesheets/bootstrap.css">
    <!-- /build -->

    <!-- The specific page CSS file    -->
    <!-- build:css var/public/assets/stylesheets/pages/home/home.min.css -->
    <link rel="stylesheet" href="var/public/assets/stylesheets/pages/home/home.css">
    <!-- /build -->

    <!-- Favicon collection for most devices -->
    <link rel="apple-touch-icon" sizes="57x57" href="var/public/assets/images/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="var/public/assets/images/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="var/public/assets/images/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="var/public/assets/images/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="var/public/assets/images/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="var/public/assets/images/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="var/public/assets/images/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="var/public/assets/images/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="var/public/assets/images/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="var/public/assets/images/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="var/public/assets/images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="var/public/assets/images/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="var/public/assets/images/favicon/favicon-16x16.png">
    <link rel="manifest" href="var/public/assets/images/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="var/public/assets/images/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <title>Bas van Driel</title>
</head>
<body>
        <div class="fixed-fullscreen-video-container">
            <video autoplay="" loop="" class="fillWidth fadeIn animated" id="video-background" muted>
                <source src="var/public/assets/videos/636781313.mp4" type="video/mp4">
                Your browser does not support the video tag. I suggest you upgrade your browser.
            </video>
        </div>

    <div class="fullscreen-container">
        <div id="particles-js"></div>
        <div class="navigation-button"><i class="fa fa-bars" aria-hidden="true"></i></div>
        <div class="navigation-container">
            <ul class="navigation-bar">
                <li>
                    <a href="#about-me-container">ABOUT ME</a>
                    <ul class="sub-navigation-bar">
                        <li><a href="#about-me-container">BIOGRAPHY</a></li>
                        <li><a href="#skills-container">SKILLS</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#experiences-title-container">EXPERIENCE</a>
                    <ul class="sub-navigation-bar">
                        <li><a href="#education-container">EDUCATIONS</a></li>
                        <li><a href="#jobs-container">WORK EXPERIENCE</a></li>
                    </ul>
                </li>
                <!-- TODO Create portfolio page -->
                <!--                <li>
                                    <a href="https://www.github.com/basvandriel">PORTFOLIO</a>
                                    <ul class="sub-navigation-bar">
                                        <li><a href="#">PROJECTS</a></li>
                                        <li><a href="#">ASSIGNMENTS</a></li>
                                        <li><a href="#">SCRAPBOARD</a></li>
                                    </ul>
                                </li>-->
                <li>
                    <a href="#contact-container">CONTACT</a>
                </li>
            </ul>
        </div>


        <div class="title-container">
            <div class="row">
                <div class="center-block col-md-5" style="float: none;">
                    <h1 class="main-title">
                        Bas van Driel
                    </h1>

                    <h2 class="sub-title">
                        APPLICATION DEVELOPER
                    </h2>
                </div>

            </div>
        </div>

        <div class="svg-container">
            <svg width="1920" height="90" xmlns="http://www.w3.org/2000/svg">
                <path
                        d="m-10.00014,16.25l594.37513,12.5l615.00004,-8.75l563.75005,16.25l221.25001,-22.5l-153.75001,290.00002l-1867.50014,-65"
                        fill-opacity="null" fill="#fff">
                </path>
            </svg>
        </div>
    </div>


    <div id="about-me-container">


        <div id="about-me-content-container">
            <div class="container" id="introduction-container">
                <div id="introduction-text-container">
                    <h1>ABOUT ME</h1>
                    <h2>I am an enthusiastic web and application developer who always strives to deliver creative
                        solutions,
                        mainly focused on back-end
                        development and new technologies.
                    </h2>
                </div>
                <div id="personality-container">
                    <div class="row">
                        <div class="col-md-7">
                            <p>My name is Bas van Driel, I'm 22 years old and live in a town called Terneuzen in the
                               Netherlands.</p>

                            <p>I stand for quality, small details, structure and perfection in all the work I do. For
                               my
                               preference I like working together in a group. It gives me the ability to be more
                               precise in my work. I'm always in to show commitment, initiative and flexibility whenever
                               I
                               can.</p>

                            <p>For my hobbies I love to make music, interest myself in IT technologies, do sports
                               and
                               play some games.</p>

                            <p>I'm currently studying at <a href="http://www.scalda.nl">Scalda</a>, learning more about
                               object-oriented programming, database essentials and scrum.</p>

                            <p>This project was created for learning more about modern web development, where I am
                               mostly
                               focused on front-end design and JavaScript programming. This project is also open-source
                               and
                                <a href="http://www.github.com/basvandriel/WWW">can be found on GitHub.</a></p>
                        </div>
                        <div class="col-md-offset-2"></div>
                        <div class="col-md-5">
                            <img src="var/public/assets/images/profile-pictures/profile-picture-pixelated.png" alt=""
                                 class="pixelated-image">
                        </div>
                    </div>

                </div>

                <div id="skills-container">
                    <div class="row">
                        <h2>SKILLS</h2>

                        <p>I have common knowledge with the following technologies</p>
                        <div class="skill-tags-container">
                            <div>
                                <span class="skill-tag">PHP7</span>
                                <span class="skill-tag">PHP5</span>
                                <span class="skill-tag">Java</span>
                                <span class="skill-tag">JavaScript</span>
                                <span class="skill-tag">jQuery</span>
                                <span class="skill-tag">HTML5</span>
                                <span class="skill-tag">CSS</span>
                                <span class="skill-tag">SCSS</span>
                                <span class="skill-tag">MySQL</span>
                                <span class="skill-tag">Spring MVC</span>
                                <span class="skill-tag">Struts2</span>
                                <span class="skill-tag">Composer</span>
                                <span class="skill-tag">Bower</span>
                            </div>

                            <div>
                                <span class="skill-tag">JSON</span>
                                <span class="skill-tag">XML</span>
                                <span class="skill-tag">YAML</span>
                                <span class="skill-tag">GIT</span>

                            </div>

                            <div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="row social-links">
                    <h2>LINKS</h2>

                    <p>I can be found on the following links:</p>
                    <a class="social-icon" href="http://www.github.com/basvandriel"><i class="fa fa-github"
                                                                                       aria-hidden="true"></i></a>
                    <a class="social-icon" href="https://bitbucket.org/basvandriel94/"><i class="fa fa-bitbucket"
                                                                                          aria-hidden="true"></i></a>
                    <a class="social-icon" href="http://stackoverflow.com/users/2989034/"><i
                                class="fa fa-stack-overflow"
                                aria-hidden="true"></i></a>
                    <a class="social-icon" href="http://www.twitter.com/bvandriel"><i class="fa fa-twitter"
                                                                                      aria-hidden="true"></i></a>
                    <a class="social-icon" href="http://www.linkedin.com/in/basvandriel"><i class="fa fa-linkedin"
                                                                                            aria-hidden="true"></i></a>
                </div>
            </div>

        </div>

        <div class="section-title-container" id="experiences-title-container">
            <h1>EXPERIENCE</h1>
        </div>

        <div id="experiences-container">

            <div id="education-container">
                <div class="container">
                    <div class="col-md-3">
                        <h1 class="experience-section-name">EDUCATION</h1>
                    </div>

                    <div class="col-md-7 col-md-offset-2" style="padding: 0">

                        <!-- Application and media developer course -->
                        <div class="education-course">
                            <div class="education-course-header">
                                <h2 class="education-course-name">Application and media development</h2>
                                <h3 class="education-course-subtitle">Scalda, "College voor Techniek en
                                                                      Design"</h3>
                                <h3 class="education-course-subtitle"><i class="fa fa-map-marker"
                                                                         aria-hidden="true"></i> Vlissingen,
                                                                                                 Netherlands
                                </h3>
                                <h3 class="education-course-subtitle"><i class="fa fa-clock-o"
                                                                         aria-hidden="true"></i> 2016 - until
                                                                                                 now
                                </h3>
                            </div>
                            <div class="education-course-info">
                                <p>This training teaches the technical part of
                                   application
                                   development. It starts with the syntax of the Java programming
                                   language using small assignments. After that the student learns
                                   best practices for object-oriented programming by doing real-world
                                   projects
                                   within a team of
                                   other students. In these projects the students also learn to use the
                                   necessary tools for building the application.</p>

                                <p>Besides programming the students also learn the essentials of using
                                   databases and scrum.</p>

                                <p>
                                    Within this training, the students have to do 2 internships. These are
                                    mostly focused on learning the technical part of application
                                    development in a real-world working environment.
                                    The first internship
                                    is 10 weeks and is aimed at orientating at the job itself.
                                    j
                                    The second internship is for the examination of the student.
                                </p>

                                <p>
                                    This training is based on
                                    level 4 MBO (secondary vocational education).
                                </p>
                            </div>
                        </div>


                        <hr class="horizontal-line">

                        <!-- CCNA Routing and Switching: Introduction to Networks course -->
                        <div class="education-course">
                            <div class="education-course-header">
                                <h2 class="education-course-name">CCNA Routing and Switching: Introduction
                                                                  to Networks</h2>
                                <h3 class="education-course-subtitle">Cisco</h3>
                                <h3 class="education-course-subtitle"><i class="fa fa-map-marker"
                                                                         aria-hidden="true"></i> Online
                                </h3>
                                <h3 class="education-course-subtitle"><i class="fa fa-clock-o"
                                                                         aria-hidden="true"></i> 2016
                                </h3>
                            </div>
                            <div class="education-course-info">
                                <p>This course taught me how to set up and configure a
                                   network. I learnt
                                   how to configure network equipment such as routers, switches, hubs and
                                   workstations for working in the corresponding network. I also
                                   learnt how to make network cables (cross-over, straight
                                   through) for a specific
                                   device-to-device connection.
                                </p>

                                <p>
                                    I trained myself by
                                    doing assignments in the Cisco Packet Tracer software. This software is used for
                                    simulating networks.
                                </p>

                                <p>During the training, I mostly configured networks for using sub-networks
                                   and
                                   security purposes. For the actual exam I had to do all this with actual
                                   Cisco equipment.</p>

                                <p>
                                    This course belonged to the Medewerker Beheer ICT training.
                                </p>
                            </div>
                        </div>

                        <hr class="horizontal-line">

                        <!-- Medewerker Beheer ICT course -->
                        <div class="education-course">
                            <div class="education-course-header">
                                <h2 class="education-course-name">Medewerker beheer ICT</h2>
                                <h3 class="education-course-subtitle">Scalda, "College voor Techniek en
                                                                      Design"</h3>
                                <h3 class="education-course-subtitle"><i class="fa fa-map-marker"
                                                                         aria-hidden="true"></i> Terneuzen,
                                                                                                 Netherlands
                                </h3>
                                <h3 class="education-course-subtitle"><i class="fa fa-clock-o"
                                                                         aria-hidden="true"></i> 2016
                                </h3>
                            </div>
                            <div class="education-course-info">
                                <p>This training is a continuation of the Medewerker ICT course and is focused on
                                   teaching the
                                   more advanced parts of IT related technologies.
                                </p>

                                <p>
                                    I learnt more about networking,
                                    computer hardware and solving software problems with in-depth knowledge of them.
                                </p>

                                <p>Within this training I had to do one internship for a period of 20 weeks. This
                                   internship was
                                   focused on getting better in-depth knowledge about IT related technologies and
                                   getting more experience on a service desk.</p>
                                <p>
                                    This training is based on
                                    level 3 MBO.
                                </p>
                            </div>
                        </div>

                        <hr class="horizontal-line">

                        <!-- Microsoft Office 2013 Professional: Scalda Certificate -->
                        <div class="education-course">
                            <div class="education-course-header">
                                <h2 class="education-course-name">Microsoft Office 2013 Professional: Scalda
                                                                  Certificate</h2>
                                <h3 class="education-course-subtitle">Scalda, "College voor Techniek en
                                                                      Design"</h3>
                                <h3 class="education-course-subtitle"><i class="fa fa-map-marker"
                                                                         aria-hidden="true"></i> Online
                                </h3>
                                <h3 class="education-course-subtitle"><i class="fa fa-clock-o"
                                                                         aria-hidden="true"></i> 2015
                                </h3>
                            </div>
                            <div class="education-course-info">
                                <p>This course taught me how to work with the basics and the more
                                   advanced
                                   functions of Microsoft Office 2013. The programs I learned more about were
                                   Word, Excel, PowerPoint and Outlook.</p>

                                <p>The assignments I did during the course gave me a better understanding of the
                                   software and made me more
                                   productive because of all the functions I did not know about.</p>

                                <p>
                                    This course belonged to the Medewerker ICT training.
                                </p>
                            </div>
                        </div>

                        <hr class="horizontal-line">

                        <!-- Medewerker ICT training -->
                        <div class="education-course">
                            <div class="education-course-header">
                                <h2 class="education-course-name">Medewerker ICT</h2>
                                <h3 class="education-course-subtitle">Scalda, "College voor Techniek en
                                                                      Design"</h3>
                                <h3 class="education-course-subtitle"><i class="fa fa-map-marker"
                                                                         aria-hidden="true"></i> Terneuzen,
                                                                                                 Netherlands
                                </h3>
                                <h3 class="education-course-subtitle"><i class="fa fa-clock-o"
                                                                         aria-hidden="true"></i> 2014 - 2016
                                </h3>
                            </div>
                            <div class="education-course-info">
                                <p>
                                    This training taught me the basics of solving
                                    IT related problems on a service-desk. This included correctly building and
                                    repairing a
                                    computer and knowing the function of the parts
                                    that are in it. I learnt this by working at a service-desk on my internship.
                                </p>

                                <p>I learnt the general knowledge of working with common used software. This
                                   gave me the the ability to be more productive in my own working
                                   environment.</p>

                                <p>
                                    Within this training, I had to do 2 internships. These were
                                    mostly focused on learning what's is like working in a
                                    real-world working environment on a service-desk.
                                    The first internship
                                    was 10 weeks long and was intended for orientating at the job itself.

                                    The second internship was 20 weeks long was for my examination.
                                </p>

                                <p>
                                    This training is based on
                                    level 2 MBO.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="horizontal-line" style="margin-bottom: 0;">

            <div id="work-experience-container">
                <div class="container">
                    <div class="col-md-3">
                        <h1 class="experience-section-name">WORK EXPERIENCE</h1>
                    </div>

                    <div class="col-md-7 col-md-offset-2" style="padding: 0">
                        <!-- Service Support at scalda internship work experience  -->
                        <div class="work-experience">
                            <div class="work-experience-header">
                                <h2 class="work-experience-name">Service support employee (internship)</h2>
                                <h3 class="work-experience-subtitle">Scalda</h3>
                                <h3 class="work-experience-subtitle"><i class="fa fa-map-marker"
                                                                        aria-hidden="true"></i> Terneuzen,
                                                                                                Netherlands
                                </h3>
                                <h3 class="work-experience-subtitle"><i class="fa fa-clock-o"
                                                                        aria-hidden="true"></i> 2015 - 2016
                                </h3>
                            </div>
                            <div class="work-experience-info">
                                <p>The activities I did on this function were solving IT related problems
                                   from employees and students. These activities included installing, removing and
                                   maintaining IT related hardware (computers, printers, label-printers, smart-phones,
                                   etc) and
                                   software.
                                </p>

                                <p>The activities that we we're doing had to be managed in a ticket-system called
                                   TopDesk. When we solved or gathered information about the ticket, we had to log this
                                   into the ticket-system.</p>

                                <p>This internship belonged to the Medewerker Beheer ICT training.</p>
                            </div>
                        </div>

                        <hr class="horizontal-line">


                        <!-- OVET B.V. internship work experience                       -->
                        <div class="work-experience">
                            <div class="work-experience-header">
                                <h2 class="work-experience-name">IT servicedesk employee (internship)</h2>
                                <h3 class="work-experience-subtitle">OVET B.V.</h3>
                                <h3 class="work-experience-subtitle"><i class="fa fa-map-marker"
                                                                        aria-hidden="true"></i> Terneuzen,
                                                                                                Netherlands
                                </h3>
                                <h3 class="work-experience-subtitle"><i class="fa fa-clock-o"
                                                                        aria-hidden="true"></i> 2015
                                </h3>
                            </div>
                            <div class="work-experience-info">
                                <p>The activities I did on this function were solving IT related problems
                                   from employees of the company. These activities included installing, removing and
                                   maintaining IT related hardware (computers, printers, label-printers, smart-phones,
                                   etc) and
                                   software.
                                </p>

                                <p>The software problems we're solved remotely using remote-desktop software.</p>

                                <p>The activities that we we're doing had to be managed in a ticket-system. When I
                                   solved or gathered information about the ticket, I logged this into the ticket
                                   system.</p>

                                <p>This internship belonged to the Medewerker ICT
                                   training.</p>
                            </div>
                        </div>

                        <hr class="horizontal-line">

                        <!-- Service Support at scalda internship work experience                       -->
                        <div class="work-experience">
                            <div class="work-experience-header">
                                <h2 class="work-experience-name">Service support employee (internship)</h2>
                                <h3 class="work-experience-subtitle">Scalda</h3>
                                <h3 class="work-experience-subtitle"><i class="fa fa-map-marker"
                                                                        aria-hidden="true"></i> Terneuzen,
                                                                                                Netherlands
                                </h3>
                                <h3 class="work-experience-subtitle"><i class="fa fa-clock-o"
                                                                        aria-hidden="true"></i> 2013 - 2014
                                </h3>
                            </div>
                            <div class="work-experience-info">

                                <p>The activities I did on this function were solving IT related problems
                                   from employees and students. These activities included installing, removing and
                                   maintaining IT related hardware (computers, printers, label-printers, smart-phones,
                                   etc)
                                   and
                                   software.
                                </p>

                                <p>The activities that we we're doing had to be managed in a ticket-system called
                                   TopDesk. When we solved or gathered information about the ticket, we had to log this
                                   into the ticket-system.</p>

                                <p>This internship belonged to the Arbeidsmarkt Gekwalificeerd Assistent, Handel
                                   training.</p>
                            </div>
                        </div>

                        <!-- Gemeente Terneuzen internship work experience                       -->
                        <!--                        <div class="work-experience">
                                                    <div class="work-experience-header">
                                                        <h2 class="work-experience-name">Bode (internship)</h2>
                                                        <h3 class="work-experience-subtitle">Gemeente Terneuzen</h3>
                                                        <h3 class="work-experience-subtitle"><i class="fa fa-map-marker"
                                                                                                aria-hidden="true"></i> Terneuzen,
                                                                                                                        Netherlands
                                                        </h3>
                                                        <h3 class="work-experience-subtitle"><i class="fa fa-clock-o"
                                                                                                aria-hidden="true"></i> 2013 - 2014
                                                        </h3>
                                                    </div>
                                                    <div class="work-experience-info">
                                                        <p>The activities I did at this internship was receiving people at the head office of
                                                           the company and leading them to the right department.</p>
                                                    </div>
                                                </div>-->

                    </div>

                    <!--                    <hr class="horizontal-line">-->


                </div>
            </div>
        </div>
    </div>

    <div class="section-title-container" id="contact-title-container">
        <h1>CONTACT</h1>
        <h2></h2>
    </div>

    <div id="contact" class="contact-container">
        <div class="container">
            <p style="text-align: center">You can send me a message at <a
                        href="mailto:basvandriel94@gmail.com">basvandriel94@gmail.com</a>.</p>
            <!--            <div class="col-md-4">
                            <p>You can send me a message using the form at the right or write me at <a
                                        href="mailto:basvandriel94@gmail.com">basvandriel94@gmail.com</a>.</p>
                        </div>
                        <div class="col-md-8">
                            <form class="form-horizontal" role="form" method="post" action="index.php">
                                <div class="form-group">
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="name" name="name" placeholder="Full name"
                                               value="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control" id="email" name="email" placeholder="Email address"
                                               value="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control" id="subject" name="subject" placeholder="Subject"
                                               value="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-sm-10">
                                    <textarea class="form-control" rows="4" name="message" title="message"
                                              placeholder="Your message"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-10">
                                        <input id="submit" name="submit" type="submit" value="Send" class="btn btn-primary">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-10 col-sm-offset-2">
                                        <! Will be used to display an alert to the user>
                                    </div>
                                </div>
                            </form>

                        </div>-->
        </div>
    </div>
</body>
</html>