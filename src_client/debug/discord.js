gm.discord = (detailedStatus) => {
    let state = "In the Nexus";

    if (global.localplayer && typeof global.localplayer.remoteId !== "undefined")
        state = translateText('On Nexus Under ID {0}', global.localplayer.remoteId);

    mp.discord.update(detailedStatus, state);
}

global.discordDefault = () => {
    gm.discord(translateText('Living under the nexus'))
};

discordDefault ();