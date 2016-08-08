import $ from 'jquery';
import user from '../models/username';

let $login = $(`
  <div class="login">
    <form class="login-form">
      <h2>Login</h2>
      <input type="text" name="username" placeholder="username" />
      <input type="submit" name="submit" value="submit" />
    </form>
  </div>
`);

$login.find('input[type="submit"]').on('click', function(evt){
  console.log(evt);
  evt.preventDefault();
  user.username = $(this).siblings('input').val();
  console.log(user.username);
  location.hash = '#posts';
});

export default $login;
