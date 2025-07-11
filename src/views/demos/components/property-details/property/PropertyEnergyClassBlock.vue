<template>
    <div class="property-energy-class-wrap property-section-wrap" id="property-energy-class-wrap">
	<div class="block-wrap">
		<div class="block-title-wrap">
			<h2>{{ $t('Energy Efficiency') }}</h2>
		</div><!-- block-title-wrap -->
		<div class="block-content-wrap">
			<ul class="class-energy-list list-unstyled">
				<li><strong>{{ $t('Energetic class') }}:</strong> <span>{{ property.energy_class }}</span></li>
				<li><strong>{{ $t('Global energy performance index') }}:</strong> <span>{{ property.global_energy_performance_index }}</span></li>
				<li><strong>{{ $t('Renewable energy performance index') }}:</strong> <span>{{ property.renewable_energy_performance_index }}</span></li>
				<li><strong>{{ $t('Energy performance of the building') }}:</strong> <span>{{ property.energy_performance_of_the_building }}</span></li>
			</ul>
			<ul class="class-energy energy-class-10">
				<li class="class-energy-indicator">
					
					<span class="energy-A+">A+</span>
				</li>
				<li class="class-energy-indicator">
					
					<span class="energy-A">A</span>
				</li>
				<li class="class-energy-indicator">
					
					<span class="energy-B">B</span>
				</li>
				<li class="class-energy-indicator">
					
					<span class="energy-C">C</span>
				</li>
				<li class="class-energy-indicator">
					
					<span class="energy-D">D</span>
				</li>
				<li class="class-energy-indicator">
					
					<span class="energy-E">E</span>
				</li>
				<li class="class-energy-indicator">
					
					<span class="energy-F">F</span>
				</li>
				<li class="class-energy-indicator">
					
					<span class="energy-G">G</span>
				</li>
				<li class="class-energy-indicator">
					
					<span class="energy-H">H</span>
				</li>   
				<li class="class-energy-indicator">
					<div class="indicator-energy" data-energyclass="A+">{{ property.global_energy_performance_index }} | {{ $t('Energy class') }} {{ property.energy_class }}</div>
					<span class="energy-ND">ND</span>
				</li>                                        
			</ul>
		</div><!-- block-content-wrap -->
	</div><!-- block-wrap -->
</div><!-- property-address-wrap -->
</template>

<script setup>
const props = defineProps({
  property: {
    type: Object,
    required: true
  }
})
</script>