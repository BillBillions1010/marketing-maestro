import React from 'react';
import {} from '';
import { Input } from '@material-ui/core';
import Link from 'next/Link';

export default function loginPage() {
    return (
        <>
        <nav class="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll="100" id="sectionsNav">
          <div class="container">
            <div class="navbar-translate">
              <a class="navbar-brand" href="https://www.creative-tim.com/product/material-kit/?partner=101249">
                Market Maestro</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="sr-only">Toggle navigation</span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div class="collapse navbar-collapse">
              <ul class="navbar-nav ml-auto">
                <li class="dropdown nav-item">
                  <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                    <i class="material-icons">apps</i> Components
                  </a>
                  <div class="dropdown-menu dropdown-with-icons">
                    <a href="../index.html" class="dropdown-item">
                      <i class="material-icons">layers</i> All Components
                    </a>
                    <a href="https://demos.creative-tim.com/material-kit/docs/2.0/getting-started/introduction.html" class="dropdown-item">
                      <i class="material-icons">content_paste</i> Documentation
                    </a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://github.com/creativetimofficial/material-kit/archive/master.zip">
                    <i class="material-icons">cloud_download</i> Download
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://twitter.com/CreativeTim" target="_blank" data-original-title="Follow us on Twitter">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://www.facebook.com/CreativeTim" target="_blank" data-original-title="Like us on Facebook">
                    <i class="fa fa-facebook-square"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" target="_blank" data-original-title="Follow us on Instagram">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="page-header header-filter" style="background-image: url('https://images.unsplash.com/photo-1508144753681-9986d4df99b3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3cf0ccc6287057b5a71b0ecdd6cf3f4&auto=format&fit=crop&w=6000&q=80 6000w'); background-size: cover; background-position: top center;">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-6 ml-auto mr-auto">
                <div class="card card-login">
                  <form class="form" method="POST" action="Submit">
                    <div class="card-header card-header-primary text-center">
                      <h4 class="card-title">Login</h4>
                      <div class="social-line">
                        <a href="#pablo" class="btn btn-just-icon btn-link">
                          <i class="fa fa-facebook-square"></i>
                        </a>
                        <a href="#pablo" class="btn btn-just-icon btn-link">
                          <i class="fa fa-twitter"></i>
                        </a>
                        <a href="#pablo" class="btn btn-just-icon btn-link">
                          <i class="fa fa-google-plus"></i>
                        </a>
                      </div>
                    </div>
                    <p class="description text-center">Or Be Classical</p>
                    <div class="card-body">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="material-icons">face</i>
                          </span>
                        </div>
                        <Input type="text" class="form-control" placeholder="First Name..." />
                      </div>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="material-icons">mail</i>
                          </span>
                        </div>
                        <Input type="email" class="form-control" placeholder="Email..." />
                      </div>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="material-icons">lock_outline</i>
                          </span>
                        </div>
                        <Input type="password" class="form-control" placeholder="Password..." />
                      </div>
                    </div>
                    <div class="footer text-center">
                      <a href="#pablo" class="btn btn-primary btn-link btn-wd btn-lg">Get Started</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
           <footer class="footer text-center ">
              <p>Made with <a href="https://www.creative-tim.com/product/material-kit/?partner=101249">Material Kit</a> by Creative Tim</p>
          </footer>
        </div>
    </>
    );
};