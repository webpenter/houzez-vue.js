<template>
    <!-- -------------------------------------------------------------------------------------------
	note: to add have the nav bar on the right add this class "justify-content-end" to "navbar-nav"
	-------------------------------------------------------------------------------------------- -->	
	<ul class="navbar-nav">
		<!-- <li class="nav-item active">
			<router-link class="nav-link" :to="{name:'demo01'}">Home <span class="sr-only">(current)</span></router-link>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="#">Properties</a>
		</li> -->
		<li class="nav-item dropdown">
			<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Home</a>
			<ul class="dropdown-menu">
				<li class="nav-item">
					<router-link class="dropdown-item" :to="{name:'app'}">Home (Default)</router-link>
				</li>
				<li class="nav-item">
					<router-link class="dropdown-item" :to="{name:'demo01'}">Home (Demo 01)</router-link>
				</li>
			</ul>
		</li>
		<li class="nav-item dropdown">
			<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Properties</a>
			<ul class="dropdown-menu">
				<li class="nav-item">
					<router-link class="dropdown-item" :to="{name:'app.properties'}">Properties (Default)</router-link>
				</li>
				<li class="nav-item">
					<router-link class="dropdown-item" :to="{name:'demo01'}">Properties (Demo 01)</router-link>
				</li>
			</ul>
		</li>
		<li class="nav-item dropdown">
			<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Others</a>
			<ul class="dropdown-menu">
				<li class="nav-item">
					<router-link class="dropdown-item" :to="{name:'app.about-us'}">About Us (Default)</router-link>
				</li>
				<li class="nav-item">
					<router-link class="dropdown-item" :to="{name:'demo01'}">About Us (Demo 01)</router-link>
				</li>
			</ul>
		</li>
		<li class="nav-item dropdown">
			<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
				{{locale === 'en' ? 'English' : 'Français'}}
			</a>
			<ul class="dropdown-menu">
				<template v-for="currentLocale in availableLocales">
					<li class="nav-item">
						<a 
							class="dropdown-item"
							href="javascript:void(0);"
            				@click="changeLang(currentLocale)"
						>
							{{currentLocale === 'en' ? 'English' : 'Français'}}
						</a>
					</li>
				</template>
			</ul>
		</li>
		<!-- <li class="nav-item dropdown">
			<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Dropdown</a>
			<ul class="dropdown-menu">
				<li class="nav-item">
					<router-link class="dropdown-item" :to="{name:'app'}">Default</router-link>
				</li>
				<li class="nav-item">
					<a class="dropdown-item" href="#">Another action</a>
				</li>
				<li class="nav-item dropdown">
					<a class="dropdown-item dropdown-toggle" data-toggle="dropdown" href="#">Submenu</a>
					<ul class="dropdown-menu">
						<li class="nav-item">
							<a class="dropdown-item" href="#">Submenu action</a>
						</li>
						<li class="nav-item">
							<a class="dropdown-item" href="#">Another submenu action</a>
						</li>
						<li class="nav-item dropdown">
							<a class="dropdown-item dropdown-toggle" href="#">Subsubmenu</a>
							<ul class="dropdown-menu">
								<li class="nav-item"><a class="dropdown-item" href="#">Subsubmenu action aa</a></li>
								<li class="nav-item"><a class="dropdown-item" href="#">Another subsubmenu action</a></li>
							</ul>
						</li>
						<li class="nav-item dropdown">
							<a class="dropdown-item dropdown-toggle" href="#">Second subsubmenu</a>
							<ul class="dropdown-menu">
								<li class="nav-item"><a class="dropdown-item" href="#">Subsubmenu action bb</a></li>
								<li class="nav-item"><a class="dropdown-item" href="#">Another subsubmenu action</a></li>
							</ul>
						</li>
					</ul>
				</li>
				<li class="nav-item">
					<a class="dropdown-item dropdown-toggle" href="#">Submenu 2</a>
					<ul class="dropdown-menu">
						<li class="nav-item"><a class="dropdown-item" href="#">Submenu action 2</a></li>
						<li class="nav-item"><a class="dropdown-item" href="#">Another submenu action 2</a></li>


						<li class="nav-item"><a class="dropdown-item dropdown-toggle" href="#">Subsubmenu</a>
							<ul class="dropdown-menu">
								<li class="nav-item"><a class="dropdown-item" href="#">Subsubmenu action 1 3</a></li>
								<li class="nav-item"><a class="dropdown-item" href="#">Another subsubmenu action 2 3</a></li>
							</ul>
						</li>
						<li class="nav-item"><a class="dropdown-item dropdown-toggle" href="#">Second subsubmenu 3</a>
							<ul class="dropdown-menu">
								<li class="nav-item"><a class="dropdown-item" href="#">Subsubmenu action 3 </a></li>
								<li class="nav-item"><a class="dropdown-item" href="#">Another subsubmenu action 3</a></li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</li> -->
		<!-- <li class="nav-item dropdown megamenu-item">
			<a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Megamenu</a>
            <MegaMenu />
		</li> -->
	</ul>
</template>

<script setup>
import MegaMenu from './MegaMenu.vue';
import {useI18n} from "vue-i18n";
import {useLanguage} from "@/stores/index.js";
import { storeToRefs } from 'pinia';

const { t, locale, availableLocales } = useI18n();
const languageStore = useLanguage();
const { locale: selectedLocale } = storeToRefs(languageStore);

const changeLang = (lang) => {
  selectedLocale.value = lang;
  locale.value = lang;
  languageStore.setLanguage(lang);
};
</script>