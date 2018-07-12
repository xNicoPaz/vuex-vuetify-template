<template>
	<v-app id="inspire">

		<v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp" v-model="drawer" fixed app>
			<v-list dense>
			</v-list>
		</v-navigation-drawer>
		
		<v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="blue darken-3" dark app fixed >
			<v-toolbar-title style="width: 300px" class="ml-0 pl-3">
				<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
				<span class="hidden-sm-and-down">Template</span>
			</v-toolbar-title>
			<v-text-field flat solo-inverted prepend-icon="search" label="Search" class="hidden-sm-and-down" ></v-text-field>
			<v-spacer></v-spacer>

			<v-btn icon large>
				<v-avatar size="32px" tile>
					<img src="https://vuetifyjs.comhttps://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify">
				</v-avatar>
			</v-btn>
		</v-toolbar>
		
		<v-content>
			<v-container fluid fill-height>
				<v-layout justify-center align-center>

				</v-layout>
			</v-container>
		</v-content>

		<v-dialog v-model="dialog" width="800px">
			<v-card>
				<v-container grid-list-sm class="pa-4">
					<v-layout row wrap>
	
					</v-layout>
				</v-container>
	
				<v-card-actions>

				</v-card-actions>
			</v-card>
		</v-dialog>
	
	</v-app>
</template>

<script>
	export default {
		data: () => {
			return {
				drawer: false,
				dialog: false
			}
		}
	}
</script>