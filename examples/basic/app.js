"use strict";

var React     = require('react');
var ReactDOM  = require('react-dom');
var Scroll    = require('react-scroll');
var Carousel = require('nuka-carousel');
import { Grid, Row, Col, Tabs, Tab, Thumbnail, Button } from 'react-bootstrap'
import Fashare from 'react-icons/lib/fa/share-alt-square'
import Faheart from 'react-icons/lib/fa/heart'
import ChevronLeft from 'react-icons/lib/fa/angle-left'
var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var durationFn = function(deltaTop) {
    return deltaTop;
};

class Section extends React.Component{

  constructor (props){
      super(props);
      this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    window.onscroll = function () {
      var scrTp = document.body.scrollTop;
      if(scrTp < 1600 && scrTp > 900){
        var topGrid = document.getElementsByClassName('maodian')[0];
        topGrid.style.opacity = '0';


      } else if ( scrTp > 1600 && scrTp < 1700 ) {
        var topGrid1 = document.getElementsByClassName('maodian')[0];
        topGrid1.style.opacity = '1';
      }else if ( scrTp > 10 && scrTp < 100 ) {
        document.getElementsByClassName('bottomNav')[0].style.display = 'block';
        var topGrid2 = document.getElementsByClassName('navbar-default')[0];
        topGrid2.style.opacity = '0';
      }else if ( scrTp > 100 && scrTp < 200 ) {
        var topGrid2 = document.getElementsByClassName('navbar-default')[0];

        topGrid2.style.opacity = '0.5';
      }else if ( scrTp > 200 && scrTp < 400 ) {
        document.getElementsByClassName('bottomNav')[0].style.display = 'none';
        var topGrid2 = document.getElementsByClassName('navbar-default')[0];
        topGrid2.style.opacity = '1';
      }
    }

    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render () {
    return (
      <div>
        <nav className="navbar navbar-default navbar-btm-Clear navbar-fixed-top" style={{minHeight: '0px', opacity: '0', display: 'flex', flexFlow: 'Row',alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
          <div style={{flex: '1'}}><a href="#" style={{color: 'rgba(128, 128, 128, 0.46)'}}><ChevronLeft height="2em" width="2em"/></a></div>
          <ul className="nav navbar-nav navbar-margin-Clear" style={{flex: '6'}}>
            <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >基本信息</Link></li>
            <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>详情</Link></li>
            <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >评论</Link></li>
          </ul>
        </nav>
        <div className="minHeightClear">
          <a href="#" style={{color: 'rgba(128, 128, 128, 0.46)', position: 'absolute', top: '1.2%', left: '3%', zIndex: '100000' }}><ChevronLeft height="2em" width="2em"/></a>
          <Carousel style={{ width: '96%', margin: 'auto' }}>
            <img src='./assets/1.jpg' style={{height:'300px'}} />
            <img src={'./assets/2.jpg'} style={{height:'300px'}} />
            <img src={'./assets/3.jpg'} style={{height:'300px'}} />
          </Carousel>
          <Grid style={{height: '10%', textAlign: '-webkit-center'}}>
            <Row className="show-grid top-grid">
              <Col xs={6} xsOffset={3}>
                <div className="breatheDiv"></div>
                TLG-404
              </Col>
            </Row>
            <Row className="show-grid top-grid">
              <Col xs={6} md={4}>产品代号: df45451</Col>
              <Col xs={6} md={4}>品种:TOP-link</Col>
            </Row>
          </Grid>
        </div>
        <nav className="navbar navbar-default bottomNav navbar-btm-Clear" style={{minHeight: '0px', border: '0px solid'}}>
          <div className="container-fluid">
            <div className="collapse navbar-collapse" style={{ border: '0px solid' }}>
              <ul className="nav navbar-nav" style={{margin: '0px'}}>
                <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >基本信息</Link></li>
                <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>详情</Link></li>
                <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >评论</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <Element name="test1" className="element">
          <Grid >
            <Row className="show-grid top-grid">
              <Col xs={12} md={5}>TOP-link</Col>
            </Row>
            <Row className="show-grid top-grid">
              <Col xs={12} md={5}><img style={{width: '100%'}} src={'./assets/3.jpg'} /></Col>
            </Row>
            <Row className="show-grid top-grid">
              <Col xs={6} md={4}>产品代号: df-580</Col>
              <Col xs={6} md={4}>品种:TOP-link</Col>
            </Row>
            <Row className="show-grid top-grid">
              <Col xs={12} md={12}>
                机械手是最早出现的工业机器人，
                也是最早出现的现代机器人，
                它可代替人的繁重劳动以实现生产的机械化和自动化，
                能在有害环境下操作以保护人身安全，
                因而广泛应用于机械制造、冶金、电子、轻工和原子能等部门。</Col>
            </Row>
            <Row className="show-grid top-grid">
              <Col xs={6} md={4}>产品代号: df-580</Col>
              <Col xs={6} md={4}>品种:TOP-link</Col>
            </Row>
            <Row className="show-grid top-grid">
              <Col xs={12} md={12}>
                机械手是最早出现的工业机器人，
                也是最早出现的现代机器人，
                它可代替人的繁重劳动以实现生产的机械化和自动化，
                能在有害环境下操作以保护人身安全，
                因而广泛应用于机械制造、冶金、电子、轻工和原子能等部门。</Col>
            </Row>
          </Grid>
        </Element>

        <Element name="test2" className="element">
          <Grid >
            <Row className="show-grid top-grid">
              <Col xs={12} md={5}>TOP-link</Col>
            </Row>
            <Row className="show-grid top-grid">
              <Col xs={12} md={5}><img style={{width: '100%'}} src={'./assets/2.jpg'} /></Col>
            </Row>
            <Row className="show-grid top-grid">
              <Col xs={6} md={4}>产品代号: df-580</Col>
              <Col xs={6} md={4}>品种:TOP-link</Col>
            </Row>
            <Row className="show-grid top-grid">
              <Col xs={12} md={12}>
                机械手是最早出现的工业机器人，
                也是最早出现的现代机器人，
                它可代替人的繁重劳动以实现生产的机械化和自动化，
                能在有害环境下操作以保护人身安全，
                因而广泛应用于机械制造、冶金、电子、轻工和原子能等部门。</Col>
            </Row>
            <Row className="show-grid top-grid">
              <Col xs={6} md={4}>产品代号: df-580</Col>
              <Col xs={6} md={4}>品种:TOP-link</Col>
            </Row>
            <Row className="show-grid top-grid">
              <Col xs={12} md={12}>
                机械手是最早出现的工业机器人，
                也是最早出现的现代机器人，
                它可代替人的繁重劳动以实现生产的机械化和自动化，
                能在有害环境下操作以保护人身安全，
                因而广泛应用于机械制造、冶金、电子、轻工和原子能等部门。</Col>
            </Row>
          </Grid>
        </Element>

        <Element name="test3" className="element">
          <Grid >
            <Row className="show-grid top-grid">
              <Col xs={12} md={5}>TOP-link</Col>
            </Row>
            <Row className="show-grid top-grid">
              <Col xs={12} md={5}><img style={{width: '100%'}} src={'./assets/1.jpg'} /></Col>
            </Row>
            <Row className="show-grid top-grid">
              <Col xs={6} md={4}>产品代号: df-580</Col>
              <Col xs={6} md={4}>品种:TOP-link</Col>
            </Row>
            <Row className="show-grid top-grid">
              <Col xs={12} md={12}>
                机械手是最早出现的工业机器人，
                也是最早出现的现代机器人，
                它可代替人的繁重劳动以实现生产的机械化和自动化，
                能在有害环境下操作以保护人身安全，
                因而广泛应用于机械制造、冶金、电子、轻工和原子能等部门。</Col>
            </Row>
            <Row className="show-grid top-grid">
              <Col xs={6} md={4}>产品代号: df-580</Col>
              <Col xs={6} md={4}>品种:TOP-link</Col>
            </Row>
            <Row className="show-grid top-grid">
              <Col xs={12} md={12}>
                机械手是最早出现的工业机器人，
                也是最早出现的现代机器人，
                它可代替人的繁重劳动以实现生产的机械化和自动化，
                能在有害环境下操作以保护人身安全，
                因而广泛应用于机械制造、冶金、电子、轻工和原子能等部门。</Col>
            </Row>
          </Grid>
        </Element>

        <a className="maodian" onClick={this.scrollToTop}>
          <img style={{position: 'fixed', right: '14px', bottom: '43px'}} src={'./assets/arrow_up_48px.png'} />
        </a>

        <div style={{ position: 'fixed', bottom: '0px', backgroundColor: 'rgba(250, 250, 250, 1)', borderTop: 'solid 2px #eeeeee', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{ flex: '1' }}>&nbsp;&nbsp;&nbsp;
            <Fashare height="1.5em" width="1.5em" style={{verticalAlign: 'bottom'}}/><span>分享</span></div>
            <Faheart height="1.5em" style={{ flex: '1' }}/>
            <Button bsStyle="primary" bsSize="large" className="btnScroll" style={{ flex: '1', backgroundColor: '#69bee0' }}>收藏</Button>
            <Button bsStyle="primary" bsSize="large" className="btnScroll" style={{ flex: '1', backgroundColor: '#30a6d4' }}><img src={'./assets/yuan_16px.png'} />购买</Button>
        </div>

      </div>
    );
  }
};


ReactDOM.render(
  <Section />,
  document.getElementById('example')
);
