import React from "react"
import { Link } from "gatsby"
import { FaFileAlt } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {

	const handleClick = (e) => {
		e.stopPropagation()
		console.log('e:', e.currentTarget)
		var cardToggle = document.querySelectorAll(".card-toggle")
		var cards = document.querySelectorAll(".card")
		var cardContent = document.querySelectorAll(".card-content")
		
		var clickedAnchor = e.currentTarget;
		var clickedCard = e.currentTarget.parentNode;
		
		
		cardToggle.forEach(card => {
			card.classList.remove('active')
			card.parentNode.classList.remove('active')
		})
		
		clickedAnchor.classList.add('active');
		clickedCard.classList.add('active');
		var isAnimating = false
		handleAnimation(isAnimating);
		
		
		function handleAnimation(isAnimating) {
			if (!isAnimating) {
				isAnimating = true;
				cardContent.forEach(card => {
					if ( card !== clickedAnchor ) {
						card.classList.remove('active')
						card.style.zIndex = "0";
					}
				})
				
				clickedCard.querySelector('.card-content').style.zIndex = "1";
				
				
				var arry = []
				cards.forEach(card => {
					arry.push(card)
				})
				
				cardContent.forEach(element => {
					console.log('element:', element)
					if (element.classList.contains('active')) {
						console.log('elemendasdast:', element)
						element.style.zIndex = "2"
					}
				});
				
				setTimeout(function(){
					clickedCard.classList.add("active")
					clickedCard.querySelector(".card-content").addEventListener("transitionend", function(){
						isAnimating = false;
					});
				},10);
			}
		}
	}
	
	const onContactClick = () => {
		var contactForm = document.querySelector(".contact-form");
		var inputTextarea = document.querySelector("input,textarea")
		contactForm.classList.toggle('active');
	}
	
	return (
		<Layout>
    <div class="cards">
	<div class="contact" onClick={onContactClick}>Contact Me</div>
	<div class="contact-form">
		<a href="#" class="close"><i class="fa fa-times"></i></a>
		<form>
			<div class="control"><input type="text"  id="name"/><label for="name">Your Name</label></div>
			<div class="control"><input type="text"  id="email"/><label for="email">Email Address</label></div>
			<div class="control"><input type="text"  id="url"/><label for="url">Website</label></div>
			<div class="control"><textarea name="" id="message"></textarea><label for="message">Message</label></div>
			<div class="control submit"><input type="submit" /></div>
		</form>
	</div>
	
	 <div class="card active" id="overview">
		<a class="card-toggle" onClick={handleClick}><span class="icon-font"><FaArrowAltCircleLeft/></span></a>
		<div class="card-content">
			<div class="row">
				<div class="left col">
					<h2>Personal <strong>Social Card</strong></h2>
					
					<p>Click one of the social icons below to switch between card or click Contact Me link to show the contact form card. <br /><em>Make sure you're running this experiment in the latest Chrome browser.</em></p>
					
				</div>
				<div class="right col">
				</div>
			</div>
		</div>
	</div> 
	

	<div class="card" id="dribbble">
		<a class="card-toggle" onClick={handleClick}><span class="icon-font"><FaGithub/></span></a>
		<div class="card-content">
			<div class="row">
				<div class="left col">
					<h2>My <strong>Github</strong></h2>
					
					<p>In ipsa reiciendis, eligendi labore dolores delectus facere perferendis ex architecto reprehenderit maxime exercitationem, libero itaque, at voluptatibus! Sit obcaecati repellat incidunt accusantium voluptas suscipit a consequuntur repudiandae nulla eius.</p>
					
				</div>
				<div class="right col"><img src="https://dl.dropboxusercontent.com/u/26808427/cdn/preview.jpg" alt="" /></div>
			</div>
		</div>
	</div> 
	
	<div class="card" id="behance">
		<a class="card-toggle" onClick={handleClick}><span class="icon-font"><FaFileAlt/></span></a>
		<div class="card-content">
			<div class="row">
				<div class="left col">
					<h2>My <strong>experience</strong></h2>
					<p>Quia fugit animi, iure error veritatis? Ipsa quis, deserunt illum culpa ab id mollitia nesciunt commodi aut dolores vero ipsam ut minima neque nam excepturi corporis obcaecati consequuntur accusantium laborum!</p>
				</div>
				<div class="right col"><img src="https://dl.dropboxusercontent.com/u/26808427/cdn/preview.jpg" alt="" /></div>
			</div>
		</div>
	</div>
	<div class="card" id="linkedin">
		<a class="card-toggle" onClick={handleClick}><span class="icon-font"><FaLinkedin/></span></a>
		<div class="card-content">
			<div class="row">
				<div class="left col">
					<h2>My <strong>LinkedIn</strong></h2>
				
					<p>Voluptas aliquam, perferendis laboriosam, cumque, autem vero pariatur dolorum tempora sint hic laborum distinctio suscipit magnam, porro provident maxime labore. Porro vel error quaerat consequatur sapiente? Nostrum at voluptatibus necessitatibus.</p>
				</div>
				<div class="right col"><img src="https://dl.dropboxusercontent.com/u/26808427/cdn/preview.jpg" alt="" /></div>
			</div>
		</div>
	</div>
	<div class="card" id="twitter">
		<a class="card-toggle" onClick={handleClick}><span class="icon-font"><FaInstagram/></span></a>
		<div class="card-content">
			<div class="row">
				<div class="left col">
					<h2>My <strong>Instagram</strong></h2>
				
					<p>Fugit veniam, animi architecto doloribus veritatis vitae sint doloremque possimus quae. Pariatur libero, veniam voluptatibus alias distinctio qui nostrum debitis voluptate amet hic repellat officiis nam quos vel doloremque praesentium.</p>
				</div>
				<div class="right col"><img src="https://dl.dropboxusercontent.com/u/26808427/cdn/preview.jpg" alt="" /></div>
			</div>
		</div>
	</div>
	
	
</div>
  </Layout>
 )
}

export default IndexPage
