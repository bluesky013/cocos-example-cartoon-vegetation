import { Asset } from "cc";
import { loadAssetByUrl } from "../utils/asset-operation";
import { Editor, fse, path, projectAssetPath } from "../utils/editor";
import { register, SyncAsset, SyncAssetData } from "./asset";
import { SyncMeshData } from "./mesh";

export interface SyncMaterialData extends SyncAssetData {
}

@register
export class SyncMaterial extends SyncAsset {
    static clsName = 'cc.Material';

    static async sync (data: SyncMeshData): Promise<Asset | null> {
        // const defaultUrl = 'db://internal/default-material.mtl';
        // const dstUrl = `db://assets/${data.path.replace(path.extname(data.path), '')}.mtl`;
        // await Editor.Message.request('asset-db', 'copy-asset', defaultUrl, dstUrl);

        // return loadAssetByUrl(dstUrl);

        return null;
    }
}
