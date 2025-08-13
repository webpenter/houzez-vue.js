<template>
    <!-- -------------------------------------------------------------------------------------------
	note: to add have the nav bar on the right add this class "justify-content-end" to "navbar-nav"
	-------------------------------------------------------------------------------------------- -->	
	<ul class="navbar-nav">
		<li class="nav-item dropdown">
			<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
				{{$t('Home')}}
			</a>
			<ul class="dropdown-menu">
				<li class="nav-item">
					<router-link class="dropdown-item" :to="{name:'demo01'}">
						{{$t('Default')}}
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="dropdown-item" :to="{name:'demo01.search-parallax-banner'}">
						{{$t('With Search Parallax Banner')}}
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="dropdown-item" :to="{name:'demo01.search-banner-advanced'}">
						{{$t('With Search Banner Advanced')}}
					</router-link>
				</li>
			</ul>
		</li>
		<li class="nav-item dropdown">
			<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
				{{ $t('Properties') }}
			</a>
			<ul class="dropdown-menu">
				<li class="nav-item">
					<router-link class="dropdown-item" :to="{name:'demo01.properties'}">
						{{ $t('Properties') }} ({{ $t('Demo') }} 01)
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="dropdown-item" :to="{name:'app.properties'}">
						{{ $t('Properties') }}
					</router-link>
				</li>
			</ul>
		</li>
		<li class="nav-item dropdown">
			<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
				{{ $t('Realtor') }}
			</a>
			<ul class="dropdown-menu">
				<li class="nav-item">
					<router-link class="dropdown-item" :to="{name:'demo01.agents'}">
						{{ $t('Agents') }}
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="dropdown-item" :to="{name:'demo01.agents'}">
						{{ $t('Agent Profile') }}
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="dropdown-item" :to="{name:'demo01.agencies'}">
						{{ $t('Agencies') }}
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="dropdown-item" :to="{name:'demo01.agencies'}">
						{{ $t('Agency Profile') }}
					</router-link>
				</li>
			</ul>
		</li>
		<li class="nav-item dropdown">
			<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
				{{ $t('Others') }}
			</a>
			<ul class="dropdown-menu">
				<li class="nav-item">
					<router-link class="dropdown-item" :to="{name:'demo01.about-us'}">
						{{ $t('About Us') }}
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="dropdown-item" :to="{name:'app.about-us'}">
						{{ $t('About Us') }} {{ $t('With New Theme') }}
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="dropdown-item" :to="{name:'404'}">
						{{ $t('Page') }} 404
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="dropdown-item" :to="{name:'unauthorized'}">
						{{ $t('Page') }} 302
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="dropdown-item" :to="{name:'unauthorized-403'}">
						{{ $t('Page') }} 403
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="dropdown-item" :to="{name:'unauthorized-401'}">
						{{ $t('Page') }} 401
					</router-link>
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
	</ul>
</template>

<script setup>
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