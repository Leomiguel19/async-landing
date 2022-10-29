const API = 'https://game-of-thrones1.p.rapidapi.com/Characters';
const content = null || document.getElementById('content');
const options = {
    method: 'GET',
    headers: {
		'X-RapidAPI-Key': 'de94ba74ffmshd890529e2d76d71p19012bjsn63e67ca015a6',
		'X-RapidAPI-Host': 'game-of-thrones1.p.rapidapi.com'
    }
};
async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const gots = await fetchData(API);

        console.log(gots)
        console.log(gots)
        let view = `
            ${gots.map(got=>`
                <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${got.imageUrl}" alt="${got.title}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${got.fullName}
                    ${got.title}
                    </h3>
                </div>
                </div>
            `).slice(0,20).join('')}
            `;
        console.log(view);
        content.innerHTML = view
    } catch (error){
        console.log(error);
    }
})();