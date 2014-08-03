# encoding: UTF-8

require 'rubygems'

require 'bundler/setup'

task :usage do
  puts 'No rake task specified, use rake -T to list them'
end
task :default => [:usage]

if $0 == __FILE__
	Rake.application['usage'].invoke
end