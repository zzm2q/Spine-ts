module spine {
    export class SkeletonData {
        public bones: BoneData[];
        public slots: SlotData[];
        public skins: Skin[];
        public animations: any[];
        public defaultSkin: any = null;
        constructor() {
            this.bones = [];
            this.slots = [];
            this.skins = [];
            this.animations = [];
        }


        /** @return May be null. */
        public findBone(boneName):BoneData {
            var bones = this.bones;
            for (var i = 0, n = bones.length; i < n; i++)
                if (bones[i].name == boneName) return bones[i];
            return undefined;
        }
        /** @return -1 if the bone was not found. */
        public findBoneIndex(boneName) {
            var bones = this.bones;
            for (var i = 0, n = bones.length; i < n; i++)
                if (bones[i].name == boneName) return i;
            return -1;
        }
        /** @return May be null. */
        public findSlot(slotName):SlotData {
            var slots = this.slots;
            for (var i = 0, n = slots.length; i < n; i++) {
                if (slots[i].name == slotName) return slots[i]; //FIXME : need to send PR slot[i]; => slots[i];
            }
            return null;
        }
        /** @return -1 if the bone was not found. */
        public findSlotIndex(slotName) {
            var slots = this.slots;
            for (var i = 0, n = slots.length; i < n; i++)
                if (slots[i].name == slotName) return i;
            return -1;
        }
        /** @return May be null. */
        public findSkin(skinName) {
            var skins = this.skins;
            for (var i = 0, n = skins.length; i < n; i++)
                if (skins[i].name == skinName) return skins[i];
            return null;
        }
        /** @return May be null. */
        public findAnimation(animationName) {
            var animations = this.animations;
            for (var i = 0, n = animations.length; i < n; i++)
                if (animations[i].name == animationName) return animations[i];
            return null;
        }

    }
}