<template>
	<!-- countDown: 剩余时间   end：到期时间 isMiniSecond： 毫秒还是秒 -->
	<div>
		<count-down-time-vue
			v-slot="timeObj"
			:time="countDown"
			:isMiniSecond="isMiniSecond"
			:end="end"
		>
			<div class="count-down">
				{{ timeObj.d }}天{{ timeObj.hh }}时{{ timeObj.mm }}分{{
					timeObj.ss
				}}秒
			</div>
		</count-down-time-vue>

		<count-down-time-vue
			v-slot="timeObj"
			:time="countDown1"
			:isMiniSecond="isMiniSecond1"
			:end="end1"
		>
			<div class="count-down">
				{{ timeObj.d }}天{{ timeObj.hh }}时{{ timeObj.mm }}分{{
					timeObj.ss
				}}秒
			</div>
		</count-down-time-vue>
	</div>
</template>

<script>
export default {
	name: "app",
	data() {
		return {
			countDown: 0,
			end: Date.now() + 30 * 60 * 60,
			isMiniSecond: false,
			countDown1: 60 * 60 * 60 * 1000,
			end1: 0,
			isMiniSecond1: true
		};
	},
	components: {},
	methods: {}
};
</script>

<style scope lang='scss'>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

.count-down {
	display: flex;
	flex-direction: row;
	justify-content: center;
	font-size: 18px;
	font-size: 20px;
	color: #4cc134;
	margin: 10px;
	animation: changeshadow 1s ease-in infinite;
	/* 其它浏览器兼容性前缀 */
	-webkit-animation: changeshadow 1s linear infinite;
	-moz-animation: changeshadow 1s linear infinite;
	-ms-animation: changeshadow 1s linear infinite;
	-o-animation: changeshadow 1s linear infinite;
}
@keyframes changeshadow {
	0% {
		text-shadow: 0 0 4px #4cc134;
	}
	50% {
		text-shadow: 0 0 40px #4cc134;
	}
	100% {
		text-shadow: 0 0 4px #4cc134;
	}
}
/* 添加兼容性前缀 */
@-webkit-keyframes changeshadow {
	0% {
		text-shadow: 0 0 4px #4cc134;
	}
	50% {
		text-shadow: 0 0 40px #4cc134;
	}
	100% {
		text-shadow: 0 0 4px #4cc134;
	}
}
@-moz-keyframes changeshadow {
	0% {
		text-shadow: 0 0 4px #4cc134;
	}
	50% {
		text-shadow: 0 0 40px #4cc134;
	}
	100% {
		text-shadow: 0 0 4px #4cc134;
	}
}
@-ms-keyframes changeshadow {
	0% {
		text-shadow: 0 0 4px #4cc134;
	}
	50% {
		text-shadow: 0 0 40px #4cc134;
	}
	100% {
		text-shadow: 0 0 4px #4cc134;
	}
}
@-o-keyframes changeshadow {
	0% {
		text-shadow: 0 0 4px #4cc134;
	}
	50% {
		text-shadow: 0 0 40px #4cc134;
	}
	100% {
		text-shadow: 0 0 4px #4cc134;
	}
}
</style>