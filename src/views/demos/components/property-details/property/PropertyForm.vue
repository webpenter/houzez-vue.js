<template>
    <div class="property-form-wrap">
	<div class="agent-details">
		<div class="d-flex align-items-center">
			<!-- <?php include 'inc/property/templates/agent-image.php';?> -->
			<!-- <?php include 'inc/property/templates/agent-information.php';?> -->
            <AgentImage />
            <AgentInformation />
		</div><!-- d-flex -->
	</div><!-- agent-details -->
	<div class="property-form">
		<div class="form-group">
			<input class="form-control is-valid" name="name" value="" type="text" placeholder="Your Name">
		</div><!-- form-group -->	
		<div class="form-group">
			<input class="form-control is-invalid" name="phone" value="" type="text" placeholder="Phone">
		</div><!-- form-group -->	
		<div class="form-group">
			<input class="form-control" name="email" value="" type="email" placeholder="Email">
		</div><!-- form-group -->	
		<div class="form-group form-group-textarea">
			<textarea class="form-control" name="message" rows="3" placeholder="Description">Hello, I am interested in [Property Title]</textarea>
		</div><!-- form-group -->	
		<div class="form-group">
			<select class="selectpicker form-control bs-select-hidden" title="Select">
				<option>I'm a buyer</option>
				<option>I'm a tennant</option>
				<option>I'm an agent</option>
				<option>Other</option>
			</select><!-- selectpicker -->
		</div><!-- form-group -->	
		<div class="form-group">
			<label class="control control--checkbox m-0">
				<input type="checkbox" name="air-conditioning" checked>Keep me informed about similar properties.
				<span class="control__indicator"></span>
			</label>
			<label class="control control--checkbox m-0">
				<input type="checkbox" name="dgpr-agreement">By submitting this form I agree to <a href="#">Terms of Use</a>
				<span class="control__indicator"></span>
			</label>
		</div><!-- form-group -->	
		
		<button type="button" class="btn btn-secondary btn-half-width">Send Email</button>
		<button type="button" class="btn btn-call btn-half-width">
			<span class="hide-on-click">Call</span>
			<span class="show-on-click">(987) 345 8765</span>
		</button>
		<!-- <a href="#" class="btn btn-secondary-outlined btn-half-width"><i class="houzez-icon icon-messaging-whatsapp mr-1"></i> WhatsApp</a>
		 --><a href="#"  class="btn btn-secondary-outlined btn-full-width mt-10"><i class="houzez-icon icon-messaging-whatsapp mr-1"></i> WhatsApp</a>
		<button type="button" class="btn btn-secondary-outlined btn-full-width mt-10">Send Direct Message</button>
	</div><!-- property-form -->
	<!-- <div class="property-form-terms">
		By submitting this form I agree to <a href="#">Terms of Use</a>
	</div> -->
</div><!-- property-form-wrap -->


</template>

<script setup>
import AgentImage from '@/views/app/components/property-details/property/template/AgentImage.vue';
import AgentInformation from '@/views/app/components/property-details/property/template/AgentInformation.vue';
</script>

