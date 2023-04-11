<template>
	<SearchBox :organization-value="searchItem" @update:organization-value="searchItem = $event" />
	<div v-if="errorMessage" class="errorMessage">
		<p>{{ errorMessage }}</p>
	</div>
	<div class="main">
		<div v-if="listMembers.length && !errorMessage" class="profile" v-for="member in listMembers" :key="member.id">
			<div class="profile-image">
				<img :src="member.avatar_url" alt="" loading="lazy">
			</div>
			<div class="profile-content">
				<h2 class="profile-username">{{ member.login }}</h2>
				<small class="profile-user-handle">{{ member.html_url }}</small>
				<NuxtLink :to="`/detail/${member.login}`">
					<div class="profile-actions">
						<button class="btn btn--primary">More info</button>
					</div>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import SearchBox from './SearchBox.vue';

const { handleSearch } = useGitHubList();

onMounted(async () => {
	await handleSearch();
});

const { listMembers, searchItem, errorMessage } = storeToRefs(useGitHubList());
const handleSearchWithCatch = async (textValue = searchItem.value) => {
	try {
		await handleSearch(textValue);
		errorMessage.value = '';
	} catch (error: unknown) {
		listMembers.value = [];
		errorMessage.value = (error as Error).message;
	}
};

onMounted(async () => {
	await handleSearchWithCatch();
});

</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

*,
*:before,
*:after {
	box-sizing: border-box;
}

.main {
	line-height: 1.5;
	min-height: 100vh;
	font-family: "Be Vietnam Pro", sans-serif;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;

}

button {
	font: inherit;
}

a {
	color: inherit;
	text-decoration: none;
}

.errorMessage {
	background-color: #003566;
	overflow: hidden;
	width: 500px;
	height: 80px;
	position: relative;
	margin: 20px auto;
	border-radius: 15px;

	p {
		padding: 1rem;
		text-align: center;
		font-size: 1.3em;
		color: #fff;
	}
}

/* End basic CSS override */

.profile {
	margin: 15px;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 2.5rem;
	width: 90%;
	max-width: 400px;
	background-color: #1b2028;
	border-radius: 16px;
	position: relative;
	border: 3px solid transparent;
	background-clip: padding-box;
	text-align: center;
	color: #f1f3f3;
	background-image: linear-gradient(135deg,
			rgba(#752e7c, 0.35),
			rgba(#734a58, 0.1) 15%,
			#1b2028 20%,
			#1b2028 100%);

	&:after {
		content: "";
		display: block;
		top: -3px;
		left: -3px;
		bottom: -3px;
		right: -3px;
		z-index: -1;
		position: absolute;
		border-radius: 16px;
		background-image: linear-gradient(135deg,
				#752e7c,
				#734a58 20%,
				#1b2028 30%,
				#2c333e 100%);
	}
}

.profile-image {
	border-radius: 50%;
	overflow: hidden;
	width: 175px;
	height: 175px;
	position: relative;

	img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
	}
}

.profile-username {
	font-size: 1.5rem;
	font-weight: 600;
	margin-top: 1.5rem;
}

.profile-user-handle {
	color: #7d8396;
}

.profile-actions {
	margin-top: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;

}

.btn {
	border: 0;
	background-color: transparent;
	padding: 0;
	height: 46px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	line-height: 1;
	transition: 0.15s ease;

	&--primary {
		border-radius: 99em;
		background-color: #3772ff;
		background-image: linear-gradient(135deg, #5587ff, #3772ff);
		color: #fff;
		padding: 0 1.375em;

		&:hover,
		&:focus {
			background-size: 150%;
		}
	}

}
</style>