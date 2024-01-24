<template>
  <div class="container">
    <div>Name: host. Framework: vue2, ts</div>
    <div id="user" ref="mod_user">
      mod_user
    </div>
    <div id="organization" ref="mod_organization">
      mod_organization
    </div>
    <div id="declarations" ref="mod_declarations">
      mod_declarations
    </div>
  </div>
</template>

<script>
import placeUserApp from 'mod_user/placeUserApp';
import placeOrganizationApp from 'mod_organization/placeOrganizationApp';
import placeDeclarationsApp from 'mod_declarations/placeDeclarationsApp';

export default {
  name: 'Host',
  mounted() {
    console.log('mounting');
    placeUserApp(this.$refs.mod_user);
    placeOrganizationApp(this.$refs.mod_organization);
    placeDeclarationsApp(this.$refs.mod_declarations);
  }
}
</script>