<template>
    <div class="breadcrumb-wrap">
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item breadcrumb-item-home">
                    <i class="houzez-icon icon-house"></i>
                    <RouterLink :to="{ name: 'demo01' }">{{ $t("Home") }}</RouterLink>
                </li>

                <!-- Property breadcrumb -->
                <template v-if="property">
                    <li v-if="property.type" class="breadcrumb-item">
                        <RouterLink :to="{ name: 'demo01.property-type', params: { propertyType: property.type } }">
                            {{ $filters.capitalize(property.type) }}
                        </RouterLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                        {{ $filters.capitalize(property.title) }}
                    </li>
                </template>

                <!-- Agent breadcrumb -->
                <template v-else-if="agent">
                    <li class="breadcrumb-item">
                        {{ agent.name }}
                    </li>
                    
                </template>
            </ol>
        </nav>
    </div>
</template>


<script setup>
defineProps({
    property: Object,
    agent: Object
});
</script>
