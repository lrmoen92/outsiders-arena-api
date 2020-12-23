"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEnd = exports.Battle = exports.BattleEffect = exports.Effect = exports.Ability = exports.Portrait = exports.CostCheckDTO = exports.BattleTurnDTO = exports.AbilityTargetDTO = exports.CharacterInstance = exports.Character = exports.PlayerCredentials = exports.MissionProgress = exports.Mission = exports.PlayerEnergy = exports.MissionRequirement = exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());
exports.Player = Player;
var MissionRequirement = /** @class */ (function () {
    function MissionRequirement() {
    }
    return MissionRequirement;
}());
exports.MissionRequirement = MissionRequirement;
var PlayerEnergy = /** @class */ (function () {
    function PlayerEnergy() {
    }
    return PlayerEnergy;
}());
exports.PlayerEnergy = PlayerEnergy;
var Mission = /** @class */ (function () {
    function Mission() {
    }
    return Mission;
}());
exports.Mission = Mission;
var MissionProgress = /** @class */ (function () {
    function MissionProgress() {
    }
    return MissionProgress;
}());
exports.MissionProgress = MissionProgress;
var PlayerCredentials = /** @class */ (function () {
    function PlayerCredentials() {
    }
    return PlayerCredentials;
}());
exports.PlayerCredentials = PlayerCredentials;
var Character = /** @class */ (function () {
    function Character() {
    }
    return Character;
}());
exports.Character = Character;
var CharacterInstance = /** @class */ (function () {
    function CharacterInstance() {
    }
    return CharacterInstance;
}());
exports.CharacterInstance = CharacterInstance;
var AbilityTargetDTO = /** @class */ (function () {
    function AbilityTargetDTO() {
    }
    return AbilityTargetDTO;
}());
exports.AbilityTargetDTO = AbilityTargetDTO;
var BattleTurnDTO = /** @class */ (function () {
    function BattleTurnDTO() {
    }
    return BattleTurnDTO;
}());
exports.BattleTurnDTO = BattleTurnDTO;
var CostCheckDTO = /** @class */ (function () {
    function CostCheckDTO() {
    }
    return CostCheckDTO;
}());
exports.CostCheckDTO = CostCheckDTO;
var Portrait = /** @class */ (function () {
    function Portrait() {
    }
    return Portrait;
}());
exports.Portrait = Portrait;
var Ability = /** @class */ (function () {
    function Ability() {
    }
    return Ability;
}());
exports.Ability = Ability;
var Effect = /** @class */ (function () {
    function Effect() {
    }
    return Effect;
}());
exports.Effect = Effect;
var BattleEffect = /** @class */ (function (_super) {
    __extends(BattleEffect, _super);
    function BattleEffect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BattleEffect;
}(Effect));
exports.BattleEffect = BattleEffect;
var Battle = /** @class */ (function () {
    function Battle() {
    }
    return Battle;
}());
exports.Battle = Battle;
var GameEnd = /** @class */ (function () {
    function GameEnd() {
    }
    return GameEnd;
}());
exports.GameEnd = GameEnd;
//# sourceMappingURL=model.js.map