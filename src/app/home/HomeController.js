/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/7/16
 */

export default class HomeController {

	constructor() {
		this.name = 'Home';
		this.isShowModal = false;
		this.evaluteDatas = [
			{
				'icon': '/src/assets/images/daledu.jpg',
				'commit': 'Update from Forestry.io - setting-up-site/uploading-a-zip-file.md',
				'author': 'DaleDu ',
				'date': ' COMMITED WITH FORESTRY.IO 28 MINUTES AGO',
				'commitId': '37CB018'
			},
			{
				'icon': 'https://cdn.forestry.io/assets/gulp/profile-picture-scott-2c1551c9f71f45a97340bb651effe4b0a01f1faca33d1c6f20f902959fd5459b.jpg',
				'commit': 'Merge branch: master of github.com:forestryio/docs',
				'author': 'SCOTTGALLANT ',
				'date': ' COMMITED WITH FORESTRY.IO 40 MINUTES AGO',
				'commitId': 'FB3AC1C'
			},
			{
				'icon': 'https://cdn.forestry.io/assets/gulp/profile-picture-scott-2c1551c9f71f45a97340bb651effe4b0a01f1faca33d1c6f20f902959fd5459b.jpg',
				'commit': 'Updated CSS fore large images',
				'author': 'COTTGALLANT ',
				'date': ' COMMITED WITH FORESTRY.IO 42 MINUTES AGO',
				'commitId': '25C4FD8'
			},
			{
				'icon': '/src/assets/images/daledu.jpg',
				'commit': 'Update from Forestry.io - setting-up-site/uploading-a-zip-file.md',
				'author': 'CHERYLJAM ',
				'date': ' COMMITED WITH FORESTRY.IO 48 MINUTES AGO',
				'commitId': 'E9A02D3'
			},
			{
				'icon': 'https://cdn.forestry.io/assets/gulp/profile-picture-scott-2c1551c9f71f45a97340bb651effe4b0a01f1faca33d1c6f20f902959fd5459b.jpg',
				'commit': 'Set max-width for images in post',
				'author': 'SCOTTGALLANT ',
				'date': ' COMMITED WITH FORESTRY.IO AN HOUR AGO',
				'commitId': '9C3BEB6'
			},
			{	'icon': 'https://cdn.forestry.io/assets/gulp/profile-picture-scott-2c1551c9f71f45a97340bb651effe4b0a01f1faca33d1c6f20f902959fd5459b.jpg',
				'commit': 'Merge branch : master of github.com:forestryio/docs',
				'author': 'SCOTTGALLANT ',
				'date': ' COMMITED WITH FORESTRY.IO 2 HOURS AGO',
				'commitId': '6D58E89'
			}
		];
	}

	openOrCloseModal() {
		this.isShowModal = !this.isShowModal;
		console.log('--------------------');
		console.log(this.isShowModal);
	}
}
