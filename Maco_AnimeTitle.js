/**
 *  Author: Maco
 *  http://cg-tutorial-spirits.blogspot.jp/
 */

/*:
*@plugindesc ver1.0 タイトル画面ピクチャアニメーション
*@
*@help
*picturesフォルダに動かしたい画像を入れて指定してください
*
*
*/

var alias_maco_Comandwindow = Scene_Title.prototype.createCommandWindow;

Scene_Title.prototype.createCommandWindow = function() {
	alias_maco_Comandwindow.call(this);
	this._commandWindow.opacity = 0;
}

var alias_maco_Title = Scene_Title.prototype.create;

Scene_Title.prototype.create = function() {
	alias_maco_Title.call(this);
				Scene_Base.prototype.create.call(this);
    this.createBackground();
    this.createPicture();
    this.createForeground();
    this.createWindowLayer();
    this.createCommandWindow();
};

Scene_Title.prototype.createPicture = function() {
	this._picture = new Sprite();
	this._picture.bitmap = ImageManager.loadPicture("Slime");
	this.addChild(this._picture);
}

var alias_maco_Chara_Move = Scene_Title.prototype.update;

Scene_Title.prototype.update = function() {
	alias_maco_Chara_Move.call(this);
	if (!this.isBusy()) {
					this._commandWindow.open();
	}

	var MoveTime = new Date().getTime() / 1000;
	this._picture.y = this._picture.height / 4 -100 + parseFloat(Math.sin(MoveTime)) * 50;

	Scene_Base.prototype.update.call(this);
}