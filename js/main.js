const stageFourProjects = [
	{
		name: '4-FL-1',
		src: './projects/4-fl-1/students/about.html',
	},
	{
		name: '4-FL-2',
		src: './projects/4-fl-2/students/reviews.html',
	},
	{
		name: '4-FL-3',
		src: './projects/4-fl-3/students/catalog.html',
	},
	{
		name: '4-GZP-1',
		src: './projects/4-gzp-1/students/mobile-app.html',
	},
	{
		name: '4-GZP-2',
		src: './projects/4-gzp-2/students/advice.html',
	},
	{
		name: '4-GZP-3',
		src: './projects/4-gzp-3/students/features.html',
	},
	{
		name: '4-WM-1',
		src: './projects/4-wm-1/students/index.html',
	},
	{
		name: '4-WM-2',
		src: './projects/4-wm-2/students/team.html',
	},
	{
		name: '4-WM-3',
		src: './projects/4-wm-3/students/news.html',
	},
]

const stageSevenProjects = [
	{
		name: '7-FL-1',
		src: './projects/stage-7/7-fl-1/popular-tours.html',
	},
	{
		name: '7-FL-2',
		src: './projects/stage-7/7-fl-2/safety.html',
	},
	{
		name: '7-FL-3',
		src: './projects/stage-7/7-fl-3/gallery.html',
	},
	{
		name: '7-GZP-1',
		src: './projects/stage-7/7-gzp-1/articles.html',
	},
	{
		name: '7-GZP-2',
		src: './projects/stage-7/7-gzp-2/clients.html',
	},
	{
		name: '7-GZP-3',
		src: './projects/stage-7/7-gzp-3/advices.html',
	},
	{
		name: '7-WM-1',
		src: './projects/stage-7/7-wm-1/news.html',
	},
	{
		name: '7-WM-2',
		src: './projects/stage-7/7-wm-2/perfectionists.html',
	},
	{
		name: '7-WM-3',
		src: './projects/stage-7/7-wm-3/index.html',
	},
]

const stageEightProjects = [
	{
		name: '8-FL-1',
		src: './projects/stage-8/8-FL-1/product.html',
	},
	{
		name: '8-FL-2',
		src: './projects/stage-8/8-FL-2/catalog.html',
	},
	{
		name: '8-FL-3',
		src: './projects/stage-8/8-FL-3/index.html',
	},
	{
		name: '8-WM-1',
		src: './projects/stage-8/8-WM-1/career.html',
	},
	{
		name: '8-WM-2',
		src: './projects/stage-8/8-WM-2/landing.html',
	},
	{
		name: '8-WM-3',
		src: './projects/stage-8/8-WM-3/info-center.html',
	},
]

const stageNineProjects = [
	{
		name: '9-FL-1',
		src: './projects/stage-9/9-FL-1/index.html',
	},
	{
		name: '9-FL-2',
		src: './projects/stage-9/9-FL-2/feedback.html',
	},
	{
		name: '9-FL-3',
		src: './projects/stage-9/9-FL-3/404.html',
	},
]

function getProjectItemEl(project) {
	const projectItemEl = document.createElement('li')
	projectItemEl.classList.add('projects__item')

	projectItemEl.innerHTML = `
		<a
			class="projects__link"
			href=${project.src}
			>${project.name}</a
		>
	`

	return projectItemEl
}

const getProjectListEl = (projectList) => {
	const projectListEl = document.createElement('ul')
	projectListEl.classList.add('projects__list')

	projectList.forEach((project) => {
		const projectItemEl = getProjectItemEl(project)
		projectListEl.append(projectItemEl)
	})

	return projectListEl
}

const getProjectSetEl = (name, list) => {
	const projectSetEl = document.createElement('div')

	const setTitleEl = document.createElement('h3')
	setTitleEl.textContent = name

	const projectListEl = getProjectListEl(list)

	projectSetEl.append(setTitleEl, projectListEl)

	return projectSetEl
}

const projectsWrapperEl = document.querySelector('.projects__wrapper')


projectsWrapperEl.append(
	getProjectSetEl('Stage 7 - Адаптив', stageSevenProjects)
)
projectsWrapperEl.append(
	getProjectSetEl('Stage 8 - Резиновый адаптив', stageEightProjects)
)
projectsWrapperEl.append(
	getProjectSetEl('Stage 9 - Анимации', stageNineProjects)
)
