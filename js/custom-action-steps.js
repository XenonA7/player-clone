ig.module("game.feature.combat.player-clone-action-steps").requires("game.feature.combat.combat-action-steps").defines(function() {

  ig.ACTION_STEP.PLAYER_CLONE = ig.ActionStepBase.extend({
      init: function(a) {
          this.group = a.group || null
      },
      start: function(a) {
          a = a.getCombatantRoot();
          let b = ig.game.playerEntity.coll.pos;
          if (a.isPlayer) {
            ig.game.spawnEntity(ig.ENTITY.PlayerClone, b.x + 32, b.y, b.z);
          }
      }
  });

});