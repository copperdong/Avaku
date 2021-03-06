// This file is part of Avaku
// Copyright (C) 2010 Gio Carlo Cielo Borje
//
// Avaku is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Avaku is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

/**
* Base of Avatar
* @param{type} Type of avatar: male or female
*/
function Base(type) {
	this._type = type || 'M';

	this._img = new Image();
	this._img.src = config.IMAGE_PATH + '/Elidiun/Base_' + 'normal' + this._type + '.' + config.EXT;
	this._img.style.position = 'absolute';
	this._img.style.left = 0;
	this._img.style.top = 0;
}

Base.prototype = {
	update: function() {

	},

	/**
	 * Draws the avatar.
	 */
	draw: function() {
		if (Avaku.ctx) {
			Avaku.ctx.save()
				Avaku.ctx.drawImage(this._img, 0, 0, config.WIDTH, config.HEIGHT);
			Avaku.ctx.restore();
		}
	}
};
