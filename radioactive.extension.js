(function () {

	// Função principal do bot
	function extend() {

      	// Caso essa propriedade não seja iniciada, ela tenta após 1 segundo
		if (!window.bot)
			return setTimeout(extend, 1 * 1000);

		// Seta a variável global para controle do Bot
		var bot = window.bot;

		// Carrega as propriedades
		bot.retrieveSettings();

		// Carrega o script controlador
		bot.loadChat();

	}

	// Muda as configurações padrões que são carregadas após a execução do script
	localStorage.setItem("basicBotsettings", JSON.stringify({
		botName: "BOTBABACA",
		startupCap: 1, // 1-200
		startupVolume: 20, // 0-100
		startupEmoji: true, // true ou false
		maximumAfk: 20,
		afkRemoval: false,
      	maximumDc: 15,
		blacklistEnabled: true,
		lockdownEnabled: false,
		lockGuard: false,
		maximumLocktime: 10,
		cycleGuard: false,
		maximumCycletime: 10,
		voteSkip: false,
		voteSkipLimit: 8,
		timeGuard: true,
		maximumSongLength: 7,
		autodisable: true,
		commandCooldown: 5,
		usercommandsEnabled: true,
		lockskipPosition: 1,
		lockskipReasons: [
			["theme", "Bota outra - fora do tema/evento"],
			["op", "Essa porra toca demais! porra!, HAIL SATAN"],
			["history", "Ja tocou essa merda jumento, olha o caralho do historico, ALLAHU AKBAAR"],
			["nsfw", "Oba, tetinhas, mas se fodeu vou pular, ALAHU AKBAAAAAAR"],
			["erro", "Video indisponivel, como sou bonzinho, vou te jogar em 2 <3"]
		],
		afkpositionCheck: 5,
		afkRankCheck: "ambassador",
		motdEnabled: true,
		motdInterval: 15,
		motd: "Sejam bem vindos! em breve novo website!",
		filterChat: false,
		etaRestriction: false,
		welcome: true,
		opLink: null,
		rulesLink: "Em breve",
		teamLink: "(Na descrição)",
		themeLink: null,
		fbLink: null,
		youtubeLink: null,
		websiteLink: "Em breve",
		intervalMessages: [],
		messageInterval: 5,
		songstats: false,
		commandLiteral: "!",
		blacklists: {}
	}));

	// Executa o script
	$.getScript("https://rawgit.com/italocjs/RadioactiveBot/master/radioactive.js", extend);
}).call(this);
