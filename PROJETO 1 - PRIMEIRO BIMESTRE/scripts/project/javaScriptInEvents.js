

const scriptsInEvents = {

	async FolhaDeEventos1_Event8_Act1(runtime, localVars)
	{
		let numero_de_copias = 0;
		
		while (numero_de_copias < 2) {
			numero_de_copias <=2; {
				const clone = runtime.objects.NAVE_INIMIGO.createInstance (0, 840, Math.random (50, 430));
			}
			numero_de_copias++;
		
		}
	},

	async FolhaDeEventos1_Event15_Act1(runtime, localVars)
	{
		let numero_de_copias = 0;
		
		while (numero_de_copias < 2) {
			numero_de_copias <=2; {
				const clone = runtime.objects.BOMBA.createInstance (0, 870, Math.random (50, 430));
			}
			numero_de_copias++;
		
		}
	},

	async FolhaDeEventos1_Event10_Act2(runtime, localVars)
	{
		for (let i = 0; i < 2; i++) {
			runtime.objects.ENERGIA.createInstance(
				0,
				854,
				50 + Math.random() * (430 - 50)
			);
		}
		
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
