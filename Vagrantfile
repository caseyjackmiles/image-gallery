Vagrant.configure("2") do |config|
  config.vm.box = "debian/jessie64"

  config.vm.synced_folder '.', '/home/vagrant/image-gallery'

  config.vm.network :private_network, ip: '10.10.10.61'

  config.vm.provider 'virtualbox' do |vb|
    vb.name = 'image-gallery'
    vb.linked_clone = true
    vb.memory = '1024'
  end

  config.vm.provision 'chef_solo' do |chef|
    chef.add_recipe 'nodejs'
  end
end
