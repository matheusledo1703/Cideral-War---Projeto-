

const scriptsInEvents = {

	async FolhaDeEventos1_Event7_Act1(runtime, localVars)
	{
		let energia = runtime.globalVars.ENERGIAA;
		
		// bloqueia se não tiver energia
		if (energia <= 0) {
		    runtime.globalVars.PODE_ATIRAR = 0;
		    return;
		}
		
		// consome energia
		energia--;
		runtime.globalVars.ENERGIAA = energia;
		
		// pega nave
		const nave = runtime.objects.NAVE_JOGADOR.getFirstInstance();
		if (!nave) return;
		
		// ATIRA (X fixo = 115)
		const tiro = runtime.objects.TIRO.createInstance(
		    "OBJETOS",
		    115,
		    nave.y
		);
		
		// deixa rápido
		if (tiro) {
		    tiro.angle = 0; // vai pra direita
		    tiro.behaviors.Projétil.speed = 700;
		}
	},

	async FolhaDeEventos1_Event8_Act1(runtime, localVars)
	{
		let numero_de_copias = 0;
		
		while (numero_de_copias < 2) {
			numero_de_copias <=2; {
				const clone = runtime.objects.NAVE_INIMIGO.createInstance (0, 940, Math.random (80, 430));
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
				80 + Math.random() * (430 - 80)
			);
		}
		
	},

	async FolhaDeEventos1_Event12_Act1(runtime, localVars)
	{
		let numero_de_copias = 0;
		
		while (numero_de_copias < 2) {
			numero_de_copias <=2; {
				const clone = runtime.objects.BOMBA.createInstance (0, 870, Math.random (80, 430));
			}
			numero_de_copias++;
		
		}
	},

	async FolhaDeEventos1_Event14_Act1(runtime, localVars)
	{
		let vida = runtime.globalVars.HP;
		
		vida --;
		
		runtime.globalVars.HP = vida;
		
		if(vida <= 0) {
			runtime.goToLayout("GAME OVER")
			}
	},

	async FolhaDeEventos1_Event16_Act1(runtime, localVars)
	{
		let energia = runtime.globalVars.ENERGIAA;
		
		energia ++;
		
		runtime.globalVars.ENERGIAA = energia;
		
	},

	async FolhaDeEventos1_Event18_Act1(runtime, localVars)
	{
		let derrotas = runtime.globalVars.DERROTADOS;
		derrotas++;
		runtime.globalVars.DERROTADOS = derrotas;
		
		runtime.objects.DESTRUIDOS_TEXTO.getFirstInstance().text = "" + derrotas;
		
		let points = runtime.globalVars.PONTOS;
		points += 5;
		runtime.globalVars.PONTOS = points;
		
		runtime.objects.PONTOS_TEXTO.getFirstInstance().text = "" + points;
		
		// pega instâncias da colisão
		const inimigo = runtime.objects.NAVE_INIMIGO.getFirstPickedInstance();
		const tiro = runtime.objects.TIRO.getFirstPickedInstance();
		
		if (!inimigo || !tiro) return;
		
		// evita múltipla execução
		if (inimigo.instVars.morrendo) return;
		inimigo.instVars.morrendo = true;
		
		// destrói tiro imediatamente
		tiro.destroy();
		
		// troca animação
		inimigo.setAnimation("EXPLOSÃO");
		
		// 🔥 IMPORTANTE: impede qualquer comportamento ativo
		if (inimigo.behaviors?.Projectile) {
		    inimigo.behaviors.Projectile.speed = 0;
		}
		
		// trava colisão visual (opcional mas ajuda MUITO)
		inimigo.setSolid?.false;
		
		// espera animação terminar de verdade
		setTimeout(() => {
		
		    // DESTROI PRIMEIRO
		    inimigo.destroy();
		
		    // depois cria novo inimigo (garante que o antigo sumiu)
		    runtime.objects.NAVE_INIMIGO.createInstance(
		        "OBJETOS",
		        980,
		        Math.random() * 480
		    );
		
		}, 600);
	},

	async FolhaDeEventos1_Event24_Act1(runtime, localVars)
	{
		let hpgeneral = runtime.globalVars.GENERAL_HP;
		
		//reduz uma vida
		hpgeneral --;
		
		//atualiza a variavel global
		runtime.globalVars.GENERAL_HP = hpgeneral;
		
	},

	async FolhaDeEventos1_Event30_Act1(runtime, localVars)
	{
		let hpchefao = runtime.globalVars.CHEFAO_HP;
		
		//reduz uma vida
		hpchefao --;
		
		//atualiza a variavel global
		runtime.globalVars.CHEFAO_HP = hpchefao;
		
	},

	async FolhaDeEventos1_Event20_Act1(runtime, localVars)
	{
		let vida = runtime.globalVars.HP;
		
		vida --;
		
		runtime.globalVars.HP = vida;
		
		if(vida <= 0) {
			runtime.goToLayout("GAME OVER")
			}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
