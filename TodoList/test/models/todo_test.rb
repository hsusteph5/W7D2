# == Schema Information
#
# Table name: todos
#
#  id         :bigint(8)        not null, primary key
#  body       :string           not null
#  title      :string           not null
#  done       :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class TodoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
