<template>
  <div>
    <div class="page-container md-layout-column">
      <md-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="showNavigation = true">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">My Title</span>
        <md-button>Default</md-button>
        <md-button class="md-accent">Accent</md-button>

        <div class="md-toolbar-section-end">
          <md-button @click="showSidepanel = true">Favorites</md-button>
        </div>
      </md-toolbar>

      <md-drawer :md-active.sync="showNavigation" md-swipeable>
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">My App name</span>
        </md-toolbar>

        <md-list>
          <div>
            <div v-b-toggle.collapse-1>Toggle Collapse</div>
            <b-collapse id="collapse-1">
              <md-list-item>
                <md-icon>send</md-icon>
                <span class="md-list-item-text">Sent Mail</span>
              </md-list-item>
              <md-list-item>
                <md-icon>send</md-icon>
                <span class="md-list-item-text">Sent Mail</span>
              </md-list-item>
            </b-collapse>
          </div>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>

          <md-list-item class="text">
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">
              <router-link to="/">link</router-link>
            </span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-drawer>

      <md-drawer class="md-right" :md-active.sync="showSidepanel">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">Favorites</span>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <span class="md-list-item-text">Abbey Christansen</span>

            <md-button class="md-icon-button md-list-action">
              <md-icon class="md-primary">chat_bubble</md-icon>
            </md-button>
          </md-list-item>

          <md-list-item>
            <span class="md-list-item-text">Alex Nelson</span>

            <md-button class="md-icon-button md-list-action">
              <md-icon class="md-primary">chat_bubble</md-icon>
            </md-button>
          </md-list-item>

          <md-list-item>
            <span class="md-list-item-text">Mary Johnson</span>

            <md-button class="md-icon-button md-list-action">
              <md-icon>chat_bubble</md-icon>
            </md-button>
          </md-list-item>
        </md-list>
      </md-drawer>

      <md-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
        quibusdam, non molestias et! Earum magnam, similique, quo recusandae
        placeat dicta asperiores modi sint ea repudiandae maxime? Quae non
        explicabo, neque.

        <div>
          <md-autocomplete v-model="selectedCountry" :md-options="countries">
            <label>Country</label>
          </md-autocomplete>

          <md-autocomplete
            v-model="selectedEmployee"
            :md-options="employees"
            md-dense
          >
            <label>Employees</label>
          </md-autocomplete>
        </div>

        <div>
          <md-dialog-prompt
            :md-active.sync="active"
            v-model="value"
            md-title="What's your name?"
            md-input-maxlength="30"
            md-input-placeholder="Type your name..."
            md-confirm-text="Done"
          />

          <md-button class="md-primary md-raised" @click="active = true"
            >Prompt</md-button
          >
          <span v-if="value">Value: {{ value }}</span>
        </div>
        <md-progress-spinner
          :md-diameter="100"
          :md-stroke="10"
          md-mode="indeterminate"
        ></md-progress-spinner>
        <div>
          <md-field>
            <label>Initial Value</label>
            <md-input v-model="initial"></md-input>
          </md-field>

          <md-field>
            <label>Initial Value (Read Only)</label>
            <md-input v-model="initial" readonly></md-input>
          </md-field>

          <md-field>
            <label>Type here!</label>
            <md-input v-model="type"></md-input>
            <span class="md-helper-text">Helper text</span>
          </md-field>

          <md-field>
            <label>With label</label>
            <md-input
              v-model="withLabel"
              placeholder="A nice placeholder"
            ></md-input>
          </md-field>

          <md-field md-inline>
            <label>Inline</label>
            <md-input v-model="inline"></md-input>
          </md-field>

          <md-field>
            <label>Number</label>
            <md-input v-model="number" type="number"></md-input>
          </md-field>

          <md-field>
            <label>Textarea</label>
            <md-textarea v-model="textarea"></md-textarea>
          </md-field>

          <md-field>
            <label>Textarea with Autogrow</label>
            <md-textarea v-model="autogrow" md-autogrow></md-textarea>
          </md-field>

          <md-field>
            <label>Disabled</label>
            <md-input v-model="disabled" disabled></md-input>
          </md-field>
        </div>
      </md-content>
    </div>
  </div>
</template>

<script>
export default {
  name: "Temporary",
  data: () => ({
    showNavigation: false,
    showSidepanel: false,
    selectedCountry: null,
    selectedEmployee: null,
    countries: [
      "Algeria",
      "Argentina",
      "Brazil",
      "Canada",
      "Italy",
      "Japan",
      "United Kingdom",
      "United States"
    ],
    employees: [
      "Jim Halpert",
      "Dwight Schrute",
      "Michael Scott",
      "Pam Beesly",
      "Angela Martin",
      "Kelly Kapoor",
      "Ryan Howard",
      "Kevin Malone",
      "Creed Bratton",
      "Oscar Nunez",
      "Toby Flenderson",
      "Stanley Hudson",
      "Meredith Palmer",
      "Phyllis Lapin-Vance"
    ],
    active: false,
    value: null,
    initial: "Initial Value",
    type: null,
    withLabel: null,
    inline: null,
    number: null,
    textarea: null,
    autogrow: null,
    disabled: null
  })
};
</script>

<style lang="scss" scoped>
.page-container {
  min-height: 300px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.md-content {
  padding: 16px;
}
.text:hover {
  background: greenyellow;
}
</style>
