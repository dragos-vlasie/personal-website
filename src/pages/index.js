import React from "react"
import { Link } from "gatsby"
import { FaBeer } from 'react-icons/fa';
import { FaBehance } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {

	const handleClick = (e) => {
		console.log('e:', e)
		var cardToggle = document.querySelectorAll(".card-toggle")
		var cards = document.querySelector(".cards")
		var icons = document.querySelectorAll(".icon-font")
		var cards = document.querySelector(".cards")
		var card = document.querySelector(".card")
		var cardContent = document.querySelector(".card-content")
		var inputTextarea = document.querySelector("input,textarea")
		var contact = document.querySelector("contact")
		
			console.log('e:', e.target.parentNode.parentNode)
			var clickedAnchor = e.target.parentNode.parentNode.parentNode.parentNode.
			var clickedCard = e.target.parentNode.parentNode.parentNode.parentNode.parentNode

			cardToggle.forEach(card => {
				card.classList.remove('active')
				card.parentNode.classList.remove('active')
			})
			clickedAnchor.children 
			var arrayLength = clickedAnchor.children .length;
for (var i = 0; i < arrayLength; i++) {
    clickedAnchor.children [i].classList.add('anusdecal')
    //Do something
}
			// clickedCard.classList.add('active')
		// function removeClass(isAnimating, element){
		// 	if (isAnimating) {
		// 		isAnimating = true;
		// 		cardToggle.forEach(card => {
		// 			card.querySelector(".card-content").style.zIndex = "0";
		// 			card.parentNode.classList.remove('active');
		// 		})
		// 		element.parentNode.style.zIndex = "1";
		// 		setTimeout(function(){
		// 			element.parentNode.classList.toggle("active").querySelector(".card-content").addEventListener("transitionend", function(){
		// 				isAnimating = false;
		// 			});
		// 		},10);
		// 	}
		// }
  	}

	return (
<Layout>
    <div class="cards">
	
	<div class="contact">Contact Me</div>
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
		<a class="card-toggle" onClick={handleClick}><i class="fa fa-arrow-circle-left"></i></a>
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
		<a class="card-toggle" onClick={handleClick}><span class="icon-font"><FaBehance/></span></a>
		<div class="card-content">
			<div class="row">
				<div class="left col">
					<h2>My <strong>Behance</strong></h2>
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
					<h2>My <strong>Twitter</strong></h2>
				
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
